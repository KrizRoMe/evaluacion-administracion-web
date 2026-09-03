/* ===========================================================
   EcoMarket - JavaScript principal del lado del cliente
   Funcionalidades: carrito, filtros, búsqueda, modales,
   countdown, slider, modo oscuro, validación.
   =========================================================== */

// -----------------------------------------------------------
// DEPENDENCIAS (registradas en package.json para tracking)
// Nota historica: antes se usaba jQuery 2.1.4 (deprecada por
// vulnerabilidades XSS y fin de soporte). Migrado a vanilla JS.
// TODO: revisar la rúbrica de mantenimiento del sitio y
// actualizar dependencias en package.json trimestralmente.
// -----------------------------------------------------------

const PRODUCTS = [
  {
    id: 1, name: "Bolsa de algodón orgánico", category: "moda",
    price: 25, oldPrice: 35, image: "assets/producto-1.svg",
    badge: "eco", rating: 4.5, reviews: 128,
    description: "Bolsa 100% algodón orgánico certificado, perfecta para tus compras diarias. Reutilizable y biodegradable.",
    features: ["Algodón 100% orgánico", "Resistente hasta 8kg", "Lavable a máquina", "Biodegradable"]
  },
  {
    id: 2, name: "Botella de acero inoxidable", category: "cocina",
    price: 45, oldPrice: null, image: "assets/producto-2.svg",
    badge: "nuevo", rating: 4.8, reviews: 89,
    description: "Botella térmica de acero inoxidable, mantiene tus bebidas frías 24h o calientes 12h.",
    features: ["Acero inoxidable 18/8", "Libre de BPA", "Capacidad 750ml", "Aislamiento al vacío"]
  },
  {
    id: 3, name: "Cepillo de bambú biodegradable", category: "cosmetica",
    price: 12, oldPrice: 18, image: "assets/producto-3.svg",
    badge: "oferta", rating: 4.3, reviews: 234,
    description: "Cepillo dental de bambú biodegradable, perfecto para reducir el plástico en tu rutina diaria.",
    features: ["Mango de bambú Moso", "Cerdas de nylon sin BPA", "Empaque compostable", "Pack de 4 unidades"]
  },
  {
    id: 4, name: "Jabón artesanal sin plástico", category: "cosmetica",
    price: 18, oldPrice: null, image: "assets/producto-4.svg",
    badge: "nuevo", rating: 4.7, reviews: 156,
    description: "Jabón artesanal hecho a mano con ingredientes naturales y aceites esenciales. Sin plástico, sin sulfatos.",
    features: ["Ingredientes naturales", "Sin sulfatos ni parabenos", "Aroma a lavanda", "100g - dura 4 semanas"]
  },
  {
    id: 5, name: "Té orgánico de altura", category: "alimentacion",
    price: 32, oldPrice: 42, image: "assets/producto-5.svg",
    badge: "oferta", rating: 4.9, reviews: 312,
    description: "Té de hojas sueltas cultivado en granjas orgánicas de altura. Sabor intenso y propiedades antioxidantes.",
    features: ["100% hojas de té", "Cultivo orgánico", "Caja de 100g", "Origen: Cusco, Perú"]
  },
  {
    id: 6, name: "Velas aromáticas de cera de soja", category: "hogar",
    price: 38, oldPrice: null, image: "assets/producto-6.svg",
    badge: "eco", rating: 4.4, reviews: 87,
    description: "Velas hechas con cera de soja natural y aromas esenciales. Sin parafina, sin tóxicos.",
    features: ["Cera de soja 100%", "Aceites esenciales naturales", "Duración 40 horas", "Recipiente reusable"]
  },
  {
    id: 7, name: "Kit de siembra urbana", category: "regalos",
    price: 55, oldPrice: 75, image: "assets/producto-7.svg",
    badge: "oferta", rating: 4.6, reviews: 203,
    description: "Kit completo para iniciar tu huerto urbano en casa. Incluye semillas, macetas biodegradables y guía.",
    features: ["6 variedades de semillas", "12 macetas de turba", "Guía ilustrada", "Sustrato orgánico"]
  },
  {
    id: 8, name: "Café orgánico de altura", category: "alimentacion",
    price: 48, oldPrice: null, image: "assets/producto-8.svg",
    badge: "nuevo", rating: 4.9, reviews: 421,
    description: "Café 100% arábica de cultivo orgánico, tostado artesanal. Notas a chocolate y frutos rojos.",
    features: ["100% arábica", "Tueste medio", "500g", "Comercio justo"]
  },
  {
    id: 9, name: "Panel solar portátil", category: "energia",
    price: 285, oldPrice: 350, image: "assets/producto-9.svg",
    badge: "oferta", rating: 4.5, reviews: 67,
    description: "Panel solar portátil de 100W para cargar tus equipos en exteriores. Plegable y resistente al agua.",
    features: ["100W de potencia", "Plegable y ligero", "Resistente al agua IPX4", "Compatible con powerbanks"]
  },
  {
    id: 10, name: "Miel de azahar artesanal", category: "alimentacion",
    price: 42, oldPrice: null, image: "assets/producto-10.svg",
    badge: "eco", rating: 4.8, reviews: 198,
    description: "Miel pura de azahar, cosechada de forma artesanal por apicultores locales. Sin procesar.",
    features: ["100% miel pura", "Sin procesar", "500g", "Apicultores locales"]
  },
  {
    id: 11, name: "Detergente natural biodegradable", category: "limpieza",
    price: 28, oldPrice: 35, image: "assets/producto-11.svg",
    badge: "oferta", rating: 4.4, reviews: 145,
    description: "Detergente líquido biodegradable para ropa, formulado con ingredientes vegetales.",
    features: ["100% biodegradable", "Sin fosfatos ni cloro", "Rinde 60 lavadas", "Aroma a lavanda"]
  },
  {
    id: 12, name: "Almohada de fibra ecológica", category: "hogar",
    price: 95, oldPrice: 120, image: "assets/producto-12.svg",
    badge: "nuevo", rating: 4.6, reviews: 76,
    description: "Almohada rellena de fibra reciclada, hipoalergénica y lavable. Descanso sostenible.",
    features: ["Fibra reciclada PET", "Hipoalergénica", "Lavable a 60°", "Funda de algodón orgánico"]
  }
];

// -------- STATE --------
let cart = JSON.parse(localStorage.getItem('ecomarket_cart') || '[]');
let darkMode = localStorage.getItem('ecomarket_dark') === 'true';
let currentSlide = 0;
let countdownEnd = null;

// -------- INIT --------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);
  updateCartBadge();
  if (darkMode) toggleDarkMode(true);
  initCountdown();
  initSlider();
  animateStats();

  // Bindings
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('hamburger').addEventListener('click', toggleMenu);
  document.getElementById('themeToggle').addEventListener('click', () => toggleDarkMode(false));
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') closeModal();
  });

  document.getElementById('prevBtn').addEventListener('click', () => moveSlide(-1));
  document.getElementById('nextBtn').addEventListener('click', () => moveSlide(1));

  // Filtros y ordenamiento
  document.getElementById('sortSelect').addEventListener('change', applyFilters);
  document.getElementById('priceFilter').addEventListener('change', applyFilters);
  document.getElementById('categoryFilter').addEventListener('change', (e) => {
    document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
    const cat = e.target.value;
    const match = document.querySelector(`.category-item[data-category="${cat}"]`);
    if (match) match.classList.add('active');
    applyFilters();
  });

  // Categorías (botones con icono)
  document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
      item.classList.add('active');
      document.getElementById('categoryFilter').value = item.dataset.category;
      applyFilters();
    });
  });

  // Búsqueda
  document.getElementById('headerSearch').addEventListener('input', applyFilters);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target.length > 1) {
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (document.getElementById('mainNav').classList.contains('open')) toggleMenu();
        }
      }
    });
  });

  // Formularios
  document.getElementById('newsletterForm').addEventListener('submit', handleNewsletter);
  document.getElementById('contactForm').addEventListener('submit', handleContact);
});

// -------- PRODUCT RENDERING --------
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = '<div class="no-results">😔 No se encontraron productos con esos filtros.</div>';
    return;
  }
  grid.innerHTML = list.map(p => {
    const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    const stars = renderStars(p.rating);
    return `
      <article class="product-card" data-id="${p.id}" data-category="${p.category}">
        <div class="product-image">
          ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'oferta' ? '-' + discount + '%' : p.badge}</span>` : ''}
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-category">${p.category}</p>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span>${p.rating} (${p.reviews})</span>
          </div>
          <div class="product-price">
            <span class="price-current">S/ ${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="price-old">S/ ${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <div class="product-actions">
            <button class="btn-secondary btn-sm" onclick="addToCart(${p.id})">Añadir</button>
            <button class="btn-icon" onclick="openProductModal(${p.id})" aria-label="Ver detalles de ${p.name}">👁</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(empty);
}

// -------- FILTROS --------
function applyFilters() {
  const search = document.getElementById('headerSearch').value.toLowerCase().trim();
  const sort = document.getElementById('sortSelect').value;
  const maxPrice = parseFloat(document.getElementById('priceFilter').value);
  const category = document.getElementById('categoryFilter').value;

  let filtered = PRODUCTS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search) && !p.category.toLowerCase().includes(search)) return false;
    if (maxPrice < 999 && p.price > maxPrice) return false;
    if (category !== 'todos' && p.category !== category) return false;
    return true;
  });

  switch (sort) {
    case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
  }
  renderProducts(filtered);
}

// -------- CART --------
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
  saveCart();
  updateCartBadge();
  showToast(`✓ ${product.name} añadido al carrito`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(id);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('ecomarket_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cartItems');
  if (!cart.length) {
    container.innerHTML = '<div class="cart-empty">🛒<br>Tu carrito está vacío</div>';
    document.getElementById('cartTotal').textContent = 'S/ 0.00';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">S/ ${(item.price * item.qty).toFixed(2)}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="qty-btn" onclick="removeFromCart(${item.id})" style="margin-left:auto;" aria-label="Eliminar">✕</button>
        </div>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = `S/ ${total.toFixed(2)}`;
}

function openCart() {
  renderCart();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

// -------- PRODUCT MODAL --------
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalImage').src = p.image;
  document.getElementById('modalImage').alt = p.name;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDescription').textContent = p.description;
  document.getElementById('modalPrice').textContent = `S/ ${p.price.toFixed(2)}`;
  document.getElementById('modalOldPrice').textContent = p.oldPrice ? `S/ ${p.oldPrice.toFixed(2)}` : '';
  document.getElementById('modalFeatures').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modalAddBtn').onclick = () => { addToCart(id); closeModal(); };
  document.getElementById('productModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

// -------- COUNTDOWN --------
function initCountdown() {
  // Termina en 7 días desde hoy
  const stored = localStorage.getItem('ecomarket_countdown');
  if (stored && parseInt(stored) > Date.now()) {
    countdownEnd = parseInt(stored);
  } else {
    countdownEnd = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem('ecomarket_countdown', countdownEnd.toString());
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const diff = countdownEnd - Date.now();
  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// -------- TESTIMONIALS SLIDER --------
function initSlider() {
  const total = document.querySelectorAll('.testimonial').length;
  const dotsContainer = document.getElementById('sliderDots');
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  setInterval(() => moveSlide(1), 5000);
}

function moveSlide(direction) {
  const total = document.querySelectorAll('.testimonial').length;
  currentSlide = (currentSlide + direction + total) % total;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  const track = document.getElementById('testimonialsTrack');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

// -------- DARK MODE --------
function toggleDarkMode(initial) {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  document.getElementById('themeToggle').textContent = darkMode ? '☀' : '🌙';
  if (!initial) localStorage.setItem('ecomarket_dark', darkMode);
}

// -------- HAMBURGER --------
function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('active');
}

// -------- STATS ANIMATION --------
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 60);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = current.toLocaleString() + (target >= 1000 ? '+' : '');
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  stats.forEach(s => observer.observe(s));
}

// -------- TOAST --------
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// -------- FORM VALIDATION --------
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const msg = document.getElementById('newsletterMessage');
  const email = input.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    msg.textContent = '⚠️ Por favor, ingresa un correo válido.';
    msg.style.color = '#fff';
    return;
  }
  msg.textContent = '🎉 ¡Gracias por suscribirte! Revisa tu correo para confirmar.';
  msg.style.color = '#fff';
  input.value = '';
}

function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  let valid = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'El nombre debe tener al menos 3 caracteres.';
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Ingresa un correo válido.';
    valid = false;
  }
  if (message.length < 10) {
    document.getElementById('messageError').textContent = 'El mensaje debe tener al menos 10 caracteres.';
    valid = false;
  }
  if (!valid) return;

  const ok = document.getElementById('contactMessage2');
  ok.textContent = '✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.';
  ok.style.color = 'var(--color-verde)';
  e.target.reset();
}

// Expose handlers globally for inline onclick
window.addToCart = addToCart;
window.openProductModal = openProductModal;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;