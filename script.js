/* ==========================================================
   H&K STORE — SCRIPT.JS
   Organized into clearly labeled sections. Beginner-friendly.
   ========================================================== */

// ==========================================
// H&K STORE CONFIGURATION
// ==========================================
const STORE_NAME = "H&K";
const STORE_TAGLINE = "Smart Products for Better Living";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";   // <-- change to your WhatsApp number, country code first, no + or spaces
const PHONE_NUMBER = "+91XXXXXXXXXX";     // <-- change to your support phone number
const EMAIL = "your@email.com";           // <-- change to your support email

const INSTAGRAM_URL = "#";
const FACEBOOK_URL = "#";
const YOUTUBE_URL = "#";

const FREE_SHIPPING_LIMIT = 999;   // orders at or above this value get free shipping
const STANDARD_SHIPPING_FEE = 79;  // shipping fee charged below the free shipping limit

// ==========================================
// COUPON SETTINGS
// ==========================================
// Add / edit coupon codes here. "percent" discounts are 0-100.
const COUPONS = {
  "WELCOME10": { type: "percent", value: 10, label: "10% off with WELCOME10" }
};

// ==========================================
// CATEGORY LIST (used for menus, filters, category tiles)
// ==========================================
const CATEGORIES = [
  { id: "kitchen-essentials", name: "Kitchen Essentials", image: "kitchen-essentials.jpg" },
  { id: "home-organization", name: "Home Organization", image: "home-organization.jpg" },
  { id: "storage-solutions", name: "Storage Solutions", image: "storage-solutions.jpg" },
  { id: "home-decor", name: "Home Decor", image: "home-decor.jpg" },
  { id: "dining-serving", name: "Dining & Serving", image: "dining-serving.jpg" },
  { id: "cleaning-utility", name: "Cleaning & Utility", image: "cleaning-utility.jpg" },
  { id: "bathroom", name: "Bathroom", image: "bathroom.jpg" },
  { id: "new-arrivals", name: "New Arrivals", image: "new-arrivals.jpg" }
];

// ==========================================
// ADD / EDIT PRODUCTS HERE
// ==========================================
// Each product needs: id, name, category (must match a CATEGORIES id, except
// "new-arrivals" which is a virtual tag), price (selling price), mrp,
// rating, reviews (count), image, gallery (array of images), description,
// features (array), isNew, isBestSeller, dateAdded (for "Newest" sorting).
// To ADD a product: copy one block, change the id to a new unique number, edit fields.
// To DELETE a product: remove its block.
// To change an image: replace the URL with your own file, e.g. "product1.jpg"

const products = [
  {
    id: 1,
    name: "Stainless Steel Insulated Casserole 1.5L",
    category: "kitchen-essentials",
    price: 899, mrp: 1499,
    rating: 4.4, reviews: 212,
    image: "p1_1.jpg",
    gallery: [
      "p1_1.jpg", "p1_2.jpg", "p1_3.jpg"],
    description: "Keep rotis and rice warm for hours with this double-walled insulated casserole. Sturdy stainless steel body with a comfortable carry handle, ideal for daily meals and gatherings.",
    features: ["Keeps food warm up to 6 hours", "Food-grade stainless steel inner body", "Break-resistant outer shell", "Easy-grip handles", "1.5 Litre capacity"],
    isNew: false, isBestSeller: true, dateAdded: "2026-05-02"
  },
  {
    id: 2,
    name: "Non-Stick Induction Base Tawa 26cm",
    category: "kitchen-essentials",
    price: 649, mrp: 999,
    rating: 4.3, reviews: 158,
    image: "p2_1.jpg",
    gallery: [
      "p2_1.jpg", "p2_2.jpg"],
    description: "A everyday non-stick tawa that works on gas and induction cooktops. Even heat distribution makes it perfect for rotis, dosas and parathas.",
    features: ["Induction & gas compatible", "3-layer non-stick coating", "Riveted heat-resistant handle", "26cm diameter"],
    isNew: false, isBestSeller: true, dateAdded: "2026-04-11"
  },
  {
    id: 3,
    name: "Modular Fridge Storage Containers (Set of 6)",
    category: "storage-solutions",
    price: 549, mrp: 899,
    rating: 4.5, reviews: 301,
    image: "p3_1.jpg",
    gallery: [
      "p3_1.jpg", "p3_2.jpg", "p3_3.jpg"],
    description: "Stackable, space-saving containers designed to fit neatly inside your refrigerator shelves. Keep vegetables and leftovers organized and fresh.",
    features: ["Set of 6 stackable containers", "BPA-free food grade plastic", "Airtight snap-lock lids", "Transparent body to spot contents easily"],
    isNew: false, isBestSeller: true, dateAdded: "2026-03-20"
  },
  {
    id: 4,
    name: "Wall-Mounted Kitchen Organizer Rack",
    category: "home-organization",
    price: 749, mrp: 1199,
    rating: 4.2, reviews: 96,
    image: "p4_1.jpg",
    gallery: [
      "p4_1.jpg", "p4_2.jpg"],
    description: "Free up counter space with this rust-resistant wall organizer. Great for spice jars, cutting boards and everyday kitchen tools.",
    features: ["Rust-resistant coated steel", "Easy wall mounting kit included", "Multiple hooks and shelves", "Space-saving vertical design"],
    isNew: true, isBestSeller: false, dateAdded: "2026-07-14"
  },
  {
    id: 5,
    name: "Ceramic Dinner Plate Set (Set of 6)",
    category: "dining-serving",
    price: 1299, mrp: 1999,
    rating: 4.6, reviews: 184,
    image: "p5_1.jpg",
    gallery: [
      "p5_1.jpg", "p5_2.jpg", "p5_3.jpg"],
    description: "Elevate your dining table with these elegant ceramic dinner plates. Sturdy, chip-resistant and dishwasher safe for everyday and special occasions.",
    features: ["Set of 6 dinner plates", "Chip-resistant ceramic", "Microwave & dishwasher safe", "10-inch diameter"],
    isNew: false, isBestSeller: true, dateAdded: "2026-02-18"
  },
  {
    id: 6,
    name: "Multi-Purpose Cleaning Spray Bottle Kit",
    category: "cleaning-utility",
    price: 399, mrp: 599,
    rating: 4.1, reviews: 77,
    image: "p6_1.jpg",
    gallery: [
      "p6_1.jpg", "p6_2.jpg"],
    description: "A complete kit with refillable spray bottles and microfiber cloths for quick daily cleaning across the home.",
    features: ["2 refillable spray bottles", "3 microfiber cloths included", "Adjustable nozzle spray", "Compact storage design"],
    isNew: true, isBestSeller: false, dateAdded: "2026-07-02"
  },
  {
    id: 7,
    name: "Bathroom Corner Storage Shelf",
    category: "bathroom",
    price: 449, mrp: 749,
    rating: 4.0, reviews: 63,
    image: "p7_1.jpg",
    gallery: [
      "p7_1.jpg", "p7_2.jpg"],
    description: "A rust-proof corner shelf that makes the most of unused bathroom space for your daily essentials.",
    features: ["Rust-proof stainless finish", "No-drill adhesive mount", "3-tier storage", "Fits standard bathroom corners"],
    isNew: false, isBestSeller: false, dateAdded: "2026-01-30"
  },
  {
    id: 8,
    name: "Handwoven Cotton Table Runner",
    category: "home-decor",
    price: 349, mrp: 599,
    rating: 4.3, reviews: 54,
    image: "p8_1.jpg",
    gallery: [
      "p8_1.jpg", "p8_2.jpg"],
    description: "Add a warm, handcrafted touch to your dining table with this handwoven cotton runner, made by local artisans.",
    features: ["100% handwoven cotton", "Machine washable", "13 x 72 inches", "Fade-resistant natural dyes"],
    isNew: true, isBestSeller: false, dateAdded: "2026-06-25"
  },
  {
    id: 9,
    name: "Airtight Glass Storage Jars (Set of 4)",
    category: "storage-solutions",
    price: 799, mrp: 1299,
    rating: 4.5, reviews: 142,
    image: "p9_1.jpg",
    gallery: [
      "p9_1.jpg", "p9_2.jpg", "p9_3.jpg"],
    description: "Borosilicate glass jars with airtight lids to keep grains, spices and snacks fresh while looking neat on your shelf.",
    features: ["Set of 4 jars, 1L each", "Airtight rubber-seal lids", "Oven and freezer safe glass", "Stackable design"],
    isNew: false, isBestSeller: true, dateAdded: "2026-03-05"
  },
  {
    id: 10,
    name: "Foldable Laundry Storage Basket",
    category: "home-organization",
    price: 499, mrp: 799,
    rating: 4.2, reviews: 88,
    image: "p10_1.jpg",
    gallery: [
      "p10_1.jpg", "p10_2.jpg"],
    description: "A collapsible laundry basket that folds flat for storage when not in use — practical for compact Indian homes.",
    features: ["Collapsible & lightweight", "Reinforced carry handles", "45L capacity", "Water-resistant fabric"],
    isNew: false, isBestSeller: false, dateAdded: "2026-02-02"
  },
  {
    id: 11,
    name: "Stainless Steel Serving Bowl Set (Set of 3)",
    category: "dining-serving",
    price: 599, mrp: 899,
    rating: 4.4, reviews: 121,
    image: "p11_1.jpg",
    gallery: [
      "p11_1.jpg", "p11_2.jpg"],
    description: "Durable stainless steel serving bowls in three handy sizes, perfect for daily meals and festive gatherings alike.",
    features: ["Set of 3 nesting bowls", "Rust-resistant stainless steel", "Mirror-polish finish", "Dishwasher safe"],
    isNew: false, isBestSeller: false, dateAdded: "2026-01-15"
  },
  {
    id: 12,
    name: "Ceramic Table Lamp with Fabric Shade",
    category: "home-decor",
    price: 1099, mrp: 1799,
    rating: 4.6, reviews: 47,
    image: "p12_1.jpg",
    gallery: [
      "p12_1.jpg", "p12_2.jpg"],
    description: "A warm ceramic table lamp that adds a cozy glow to living rooms and bedrooms. A subtle style upgrade for any corner.",
    features: ["Ceramic base with fabric shade", "Soft ambient lighting", "E27 bulb holder (bulb not included)", "16-inch height"],
    isNew: true, isBestSeller: false, dateAdded: "2026-07-20"
  },
  {
    id: 13,
    name: "Microfiber Bathroom Floor Mat",
    category: "bathroom",
    price: 299, mrp: 499,
    rating: 4.1, reviews: 69,
    image: "p13_1.jpg",
    gallery: [
      "p13_1.jpg", "p13_2.jpg"],
    description: "A super-absorbent, quick-drying bathroom mat with a non-slip base to keep your floor safe and dry.",
    features: ["Super absorbent microfiber", "Non-slip rubber base", "Machine washable", "40 x 60 cm"],
    isNew: false, isBestSeller: false, dateAdded: "2026-01-08"
  },
  {
    id: 14,
    name: "Stovetop Pressure Cooker 5L",
    category: "kitchen-essentials",
    price: 1699, mrp: 2499,
    rating: 4.7, reviews: 266,
    image: "p14_1.jpg",
    gallery: [
      "p14_1.jpg", "p14_2.jpg", "p14_3.jpg"],
    description: "A reliable everyday pressure cooker built with certified safety features, sized right for a small to mid-size family.",
    features: ["5 Litre capacity", "Certified safety valve system", "Induction & gas compatible", "Sturdy stay-cool handles"],
    isNew: false, isBestSeller: true, dateAdded: "2026-04-28"
  },
  {
    id: 15,
    name: "Bamboo Kitchen Cutting Board Set",
    category: "kitchen-essentials",
    price: 549, mrp: 849,
    rating: 4.3, reviews: 92,
    image: "p15_1.jpg",
    gallery: [
      "p15_1.jpg", "p15_2.jpg"],
    description: "A set of durable bamboo cutting boards in three sizes — gentle on knife edges and naturally resistant to odours.",
    features: ["Set of 3 sizes", "100% natural bamboo", "Knife-friendly surface", "Built-in hanging hole"],
    isNew: true, isBestSeller: false, dateAdded: "2026-07-09"
  },
  {
    id: 16,
    name: "Woven Storage Baskets with Handles (Set of 2)",
    category: "home-organization",
    price: 649, mrp: 999,
    rating: 4.4, reviews: 58,
    image: "p16_1.jpg",
    gallery: [
      "p16_1.jpg", "p16_2.jpg"],
    description: "Handy woven baskets for organizing toys, magazines, or pantry items — sturdy build with a natural, tidy look.",
    features: ["Set of 2 baskets", "Reinforced handles", "Sturdy woven build", "Multi-purpose use"],
    isNew: true, isBestSeller: false, dateAdded: "2026-06-30"
  }
];

// ==========================================
// DEMONSTRATION REVIEWS
// ==========================================
// These are placeholder reviews for layout/demo purposes only.
// Replace with genuine customer reviews before going live.
const DEMO_REVIEWS = [
  { productId: 1, rating: 5, text: "Keeps rotis warm the whole evening. Very happy with the build quality.", author: "Demo Reviewer", verified: true },
  { productId: 3, rating: 5, text: "Fridge looks so organized now, containers stack perfectly.", author: "Demo Reviewer", verified: true },
  { productId: 14, rating: 4, text: "Cooks fast and feels sturdy. Whistle valve works smoothly.", author: "Demo Reviewer", verified: true },
  { productId: 5, rating: 5, text: "Plates look premium, great for guests.", author: "Demo Reviewer", verified: true },
  { productId: 9, rating: 4, text: "Good seal, spices stay fresh for longer.", author: "Demo Reviewer", verified: true },
  { productId: 2, rating: 4, text: "Non-stick coating is holding up well after weeks of use.", author: "Demo Reviewer", verified: true }
];

// ==========================================
// FAQ DATA
// ==========================================
const FAQS = [
  { q: "How can I place an order?", a: "Browse our shop, add products to your cart, and complete checkout. You can also order directly via WhatsApp." },
  { q: "Do you offer Cash on Delivery?", a: "Yes, Cash on Delivery is available at checkout in most serviceable areas." },
  { q: "How long does delivery take?", a: "Delivery timelines depend on your location and are shared once your order is confirmed." },
  { q: "Can I return a product?", a: "Yes, please see our Return & Refund Policy for eligibility and steps." },
  { q: "How can I track my order?", a: "Once your order is shipped, tracking details will be shared with you." },
  { q: "How can I contact H&K?", a: "You can reach us by phone, WhatsApp or email — details are in our Contact section." },
  { q: "What payment methods are available?", a: "Cash on Delivery is available now. Online payment will be enabled soon." },
  { q: "Is online payment secure?", a: "Once enabled, online payments will be processed through a secure, trusted payment gateway." }
];

// ==========================================
// STATE — loaded from localStorage
// ==========================================
let cart = loadFromStorage("hk_cart", []);          // [{id, qty}]
let wishlist = loadFromStorage("hk_wishlist", []);  // [id, id, ...]
let recentlyViewed = loadFromStorage("hk_recent", []); // [id, id, ...]
let appliedCoupon = loadFromStorage("hk_coupon", null); // "WELCOME10" or null

let activeFilters = { category: null, priceRange: null, search: "" };
let activeSort = "featured";

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}
function saveToStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
}

// ==========================================
// UTILITIES
// ==========================================
function formatPrice(n) { return "₹" + Number(n).toLocaleString("en-IN"); }
function findProduct(id) { return products.find(p => p.id === Number(id)); }
function discountPercent(mrp, price) { return Math.round(((mrp - price) / mrp) * 100); }
function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
function categoryName(catId) {
  const c = CATEGORIES.find(c => c.id === catId);
  return c ? c.name : catId;
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ==========================================
// CART LOGIC
// ==========================================
function addToCart(id, qty = 1) {
  id = Number(id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveToStorage("hk_cart", cart);
  updateBadges();
  showToast("Added to cart ✓");
}
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== Number(id));
  saveToStorage("hk_cart", cart);
  updateBadges();
  renderCartView();
  showToast("Item removed from cart");
}
function setCartQty(id, qty) {
  const item = cart.find(c => c.id === Number(id));
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveToStorage("hk_cart", cart);
  updateBadges();
  renderCartView();
}
function cartCount() { return cart.reduce((sum, c) => sum + c.qty, 0); }
function cartSubtotal() {
  return cart.reduce((sum, c) => {
    const p = findProduct(c.id);
    return p ? sum + p.price * c.qty : sum;
  }, 0);
}
function cartDiscountAmount(subtotal) {
  if (!appliedCoupon || !COUPONS[appliedCoupon]) return 0;
  const coupon = COUPONS[appliedCoupon];
  if (coupon.type === "percent") return Math.round(subtotal * (coupon.value / 100));
  return 0;
}
function cartShippingFee(subtotalAfterDiscount) {
  if (cart.length === 0) return 0;
  return subtotalAfterDiscount >= FREE_SHIPPING_LIMIT ? 0 : STANDARD_SHIPPING_FEE;
}
function cartTotals() {
  const subtotal = cartSubtotal();
  const discount = cartDiscountAmount(subtotal);
  const afterDiscount = subtotal - discount;
  const shipping = cartShippingFee(afterDiscount);
  const total = afterDiscount + shipping;
  return { subtotal, discount, shipping, total };
}

// ==========================================
// WISHLIST LOGIC
// ==========================================
function isWishlisted(id) { return wishlist.includes(Number(id)); }
function toggleWishlist(id) {
  id = Number(id);
  if (isWishlisted(id)) {
    wishlist = wishlist.filter(w => w !== id);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(id);
    showToast("Added to wishlist ♥");
  }
  saveToStorage("hk_wishlist", wishlist);
  updateBadges();
  refreshWishlistButtons();
  // If the wishlist page itself is currently open, re-render its grid so a
  // removed item disappears immediately and the empty state can appear.
  const wishlistView = document.getElementById("view-wishlist");
  if (wishlistView && !wishlistView.hidden) {
    renderWishlistView();
  }
}
function refreshWishlistButtons() {
  document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
    const id = Number(btn.getAttribute("data-wishlist-id"));
    btn.classList.toggle("active", isWishlisted(id));
  });
}

// ==========================================
// RECENTLY VIEWED LOGIC
// ==========================================
function addRecentlyViewed(id) {
  id = Number(id);
  recentlyViewed = recentlyViewed.filter(r => r !== id);
  recentlyViewed.unshift(id);
  recentlyViewed = recentlyViewed.slice(0, 6);
  saveToStorage("hk_recent", recentlyViewed);
}

// ==========================================
// BADGE UPDATES
// ==========================================
function updateBadges() {
  const cCount = cartCount();
  const wCount = wishlist.length;
  ["cartBadge", "cartBadgeMobile"].forEach(id => document.getElementById(id).textContent = cCount);
  ["wishlistBadge", "wishlistBadgeMobile"].forEach(id => document.getElementById(id).textContent = wCount);
}

// ==========================================
// PRODUCT CARD RENDERING
// ==========================================
function productCardHTML(p) {
  const discount = discountPercent(p.mrp, p.price);
  const wished = isWishlisted(p.id) ? "active" : "";
  let badge = "";
  if (p.isNew) badge = `<span class="product-badge badge-new">NEW</span>`;
  else if (discount > 0) badge = `<span class="product-badge">${discount}% OFF</span>`;

  return `
  <div class="product-card" data-product-id="${p.id}">
    <div class="product-thumb">
      <a href="#product-${p.id}" aria-label="${p.name}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </a>
      ${badge}
      <button class="wishlist-toggle ${wished}" data-wishlist-id="${p.id}" aria-label="Toggle wishlist">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${wished ? 'currentColor' : 'none'}"><path d="M12 20s-7-4.4-9.5-8.7C1 8 2.3 4.5 5.8 4c2-.3 3.6.7 6.2 3 2.6-2.3 4.2-3.3 6.2-3 3.5.5 4.8 4 3.3 7.3C19 15.6 12 20 12 20z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
      </button>
    </div>
    <div class="product-info">
      <span class="product-cat-label">${categoryName(p.category)}</span>
      <a href="#product-${p.id}"><h3 class="product-name">${p.name}</h3></a>
      <div class="product-rating"><span class="stars">${starString(p.rating)}</span><span>${p.rating} (${p.reviews})</span></div>
      <div class="product-price-row">
        <span class="price-selling">${formatPrice(p.price)}</span>
        <span class="price-mrp">MRP ${formatPrice(p.mrp)}</span>
        ${discount > 0 ? `<span class="price-discount">${discount}% OFF</span>` : ""}
      </div>
      <div class="product-actions">
        <button class="btn btn-outline" data-add-cart="${p.id}">ADD TO CART</button>
        <button class="btn btn-primary" data-buy-now="${p.id}">BUY NOW</button>
      </div>
    </div>
  </div>`;
}

function renderProductGrid(containerId, productList) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = productList.map(productCardHTML).join("") || "";
}

// ==========================================
// CATEGORY RENDERING
// ==========================================
function renderCategoryGrid() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = CATEGORIES.map(c => `
    <a href="#shop?category=${c.id}" class="category-card">
      <img src="${c.image}" alt="${c.name}" loading="lazy">
      <div class="category-overlay">
        <h3>${c.name}</h3>
        <span>Shop Now</span>
      </div>
    </a>
  `).join("");
}

// ==========================================
// HOME PAGE SECTIONS
// ==========================================
function renderHomeSections() {
  renderCategoryGrid();
  renderProductGrid("bestSellerGrid", products.filter(p => p.isBestSeller).slice(0, 8));
  renderProductGrid("newArrivalGrid", products.filter(p => p.isNew).slice(0, 8));
  renderHomeReviews();
  renderFAQ();
  renderContactCards();
  renderFooterSocial();
  attachProductGridEvents();
}

function renderHomeReviews() {
  const grid = document.getElementById("homeReviewGrid");
  grid.innerHTML = DEMO_REVIEWS.slice(0, 3).map(r => `
    <div class="review-card">
      <span class="stars">${starString(r.rating)}</span>
      <p>"${r.text}"</p>
      <span class="review-author">${r.author}</span>
      <span class="review-verified">${r.verified ? "Verified Purchase (Demo)" : "Demo Review"}</span>
    </div>
  `).join("");
}

function renderFAQ() {
  const list = document.getElementById("faqList");
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-faq-index="${i}">
      <button class="faq-question">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join("");
  list.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => btn.closest(".faq-item").classList.toggle("open"));
  });
}

function renderContactCards() {
  const grid = document.getElementById("contactGrid");
  grid.innerHTML = `
    <div class="contact-card">
      <h4>Call Us</h4>
      <p>${PHONE_NUMBER}</p>
      <a class="btn btn-outline btn-sm" href="tel:${PHONE_NUMBER}">Call</a>
    </div>
    <div class="contact-card">
      <h4>WhatsApp</h4>
      <p>Chat with us for quick help</p>
      <a class="btn btn-outline btn-sm" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_NUMBER}">WhatsApp</a>
    </div>
    <div class="contact-card">
      <h4>Email</h4>
      <p>${EMAIL}</p>
      <a class="btn btn-outline btn-sm" href="mailto:${EMAIL}">Email</a>
    </div>
  `;
}

function renderFooterSocial() {
  const el = document.getElementById("footerSocialLinks");
  el.innerHTML = `
    <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
    <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
    <a href="${YOUTUBE_URL}" target="_blank" rel="noopener" aria-label="YouTube">YT</a>
  `;
}

// ==========================================
// SEARCH LOGIC
// ==========================================
function searchProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    categoryName(p.category).toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

function initSearch() {
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const countEl = document.getElementById("searchResultCount");

  document.getElementById("searchToggleBtn").addEventListener("click", () => {
    overlay.classList.add("active");
    setTimeout(() => input.focus(), 150);
  });
  document.getElementById("searchCloseBtn").addEventListener("click", () => overlay.classList.remove("active"));

  input.addEventListener("input", () => {
    const results = searchProducts(input.value);
    if (!input.value.trim()) {
      countEl.textContent = "";
      renderProductGrid("searchResultsGrid", []);
      return;
    }
    countEl.textContent = results.length === 0 ? "No products found." : `${results.length} product${results.length === 1 ? "" : "s"} found`;
    renderProductGrid("searchResultsGrid", results);
    attachProductGridEvents();
  });
}

// ==========================================
// FILTER / SORT LOGIC (Shop page)
// ==========================================
const PRICE_RANGES = [
  { id: "under-500", label: "Under ₹500", min: 0, max: 500 },
  { id: "500-1000", label: "₹500 – ₹1,000", min: 500, max: 1000 },
  { id: "1000-2000", label: "₹1,000 – ₹2,000", min: 1000, max: 2000 },
  { id: "2000-5000", label: "₹2,000 – ₹5,000", min: 2000, max: 5000 },
  { id: "above-5000", label: "Above ₹5,000", min: 5000, max: Infinity }
];

function applyFiltersAndSort() {
  let list = [...products];

  if (activeFilters.category === "new-arrivals" || activeFilters.category === "new") {
    list = list.filter(p => p.isNew);
  } else if (activeFilters.category === "bestseller") {
    list = list.filter(p => p.isBestSeller);
  } else if (activeFilters.category) {
    list = list.filter(p => p.category === activeFilters.category);
  }

  if (activeFilters.priceRange) {
    const range = PRICE_RANGES.find(r => r.id === activeFilters.priceRange);
    if (range) list = list.filter(p => p.price >= range.min && p.price <= range.max);
  }

  if (activeFilters.search) {
    list = searchProducts(activeFilters.search).filter(p => list.includes(p));
  }

  switch (activeSort) {
    case "newest": list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
    case "bestselling": list.sort((a, b) => (b.isBestSeller === a.isBestSeller) ? b.reviews - a.reviews : (b.isBestSeller ? 1 : -1)); break;
    case "price-low": list.sort((a, b) => a.price - b.price); break;
    case "price-high": list.sort((a, b) => b.price - a.price); break;
    case "rating": list.sort((a, b) => b.rating - a.rating); break;
    default: break; // featured = original order
  }

  return list;
}

function renderShopFilters() {
  const catList = document.getElementById("filterCategoryList");
  catList.innerHTML = `
    <label class="filter-option"><input type="radio" name="catFilter" value="" ${!activeFilters.category ? "checked" : ""}> All Categories</label>
    ` + CATEGORIES.filter(c => c.id !== "new-arrivals").map(c => `
    <label class="filter-option"><input type="radio" name="catFilter" value="${c.id}" ${activeFilters.category === c.id ? "checked" : ""}> ${c.name}</label>
  `).join("");

  const priceList = document.getElementById("filterPriceList");
  priceList.innerHTML = `
    <label class="filter-option"><input type="radio" name="priceFilter" value="" ${!activeFilters.priceRange ? "checked" : ""}> Any Price</label>
    ` + PRICE_RANGES.map(r => `
    <label class="filter-option"><input type="radio" name="priceFilter" value="${r.id}" ${activeFilters.priceRange === r.id ? "checked" : ""}> ${r.label}</label>
  `).join("");

  catList.querySelectorAll("input").forEach(inp => inp.addEventListener("change", () => {
    activeFilters.category = inp.value || null;
    renderShopView();
  }));
  priceList.querySelectorAll("input").forEach(inp => inp.addEventListener("change", () => {
    activeFilters.priceRange = inp.value || null;
    renderShopView();
  }));
}

function renderShopView() {
  document.getElementById("sortSelect").value = activeSort;
  const results = applyFiltersAndSort();
  renderProductGrid("shopGrid", results);
  attachProductGridEvents();

  const countEl = document.getElementById("shopResultCount");
  countEl.textContent = activeFilters.search
    ? (results.length === 0 ? "No products found." : `${results.length} product${results.length === 1 ? "" : "s"} found`)
    : `${results.length} product${results.length === 1 ? "" : "s"}`;

  document.getElementById("shopEmptyState").hidden = results.length !== 0;

  let breadcrumb = "All Products";
  if (activeFilters.category === "new-arrivals" || activeFilters.category === "new") breadcrumb = "New Arrivals";
  else if (activeFilters.category === "bestseller") breadcrumb = "Best Sellers";
  else if (activeFilters.category) breadcrumb = categoryName(activeFilters.category);
  document.getElementById("shopBreadcrumb").textContent = breadcrumb;

  renderShopFilters();
}

// ==========================================
// PRODUCT DETAIL RENDERING
// ==========================================
let currentPDQty = 1;
let currentPDImageIndex = 0;

function renderProductDetail(id) {
  const p = findProduct(id);
  const container = document.getElementById("productDetailContainer");
  if (!p) {
    container.innerHTML = `<p class="empty-state">Product not found.</p>`;
    return;
  }
  currentPDQty = 1;
  currentPDImageIndex = 0;
  addRecentlyViewed(p.id);

  const discount = discountPercent(p.mrp, p.price);
  const wished = isWishlisted(p.id);

  container.innerHTML = `
    <div class="pd-layout">
      <div class="pd-gallery">
        <div class="pd-gallery-main"><img id="pdMainImage" src="${p.gallery[0]}" alt="${p.name}"></div>
        <div class="pd-thumbs" id="pdThumbs">
          ${p.gallery.map((img, i) => `<button class="pd-thumb ${i === 0 ? "active" : ""}" data-thumb-index="${i}"><img src="${img}" alt="${p.name} view ${i + 1}"></button>`).join("")}
        </div>
      </div>
      <div class="pd-info">
        <span class="product-cat-label">${categoryName(p.category)}</span>
        <h1>${p.name}</h1>
        <div class="pd-rating-row"><span class="stars">${starString(p.rating)}</span><span>${p.rating} · ${p.reviews} reviews</span></div>
        <div class="pd-price-row">
          <span class="price-selling">${formatPrice(p.price)}</span>
          <span class="price-mrp">MRP ${formatPrice(p.mrp)}</span>
          ${discount > 0 ? `<span class="price-discount">${discount}% OFF</span>` : ""}
        </div>
        <div class="pd-qty-row">
          <div class="qty-stepper">
            <button id="pdQtyMinus" aria-label="Decrease quantity">−</button>
            <span id="pdQtyValue">1</span>
            <button id="pdQtyPlus" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div class="pd-actions">
          <button class="btn btn-outline" id="pdAddCartBtn">ADD TO CART</button>
          <button class="btn btn-primary" id="pdBuyNowBtn">BUY NOW</button>
          <button class="pd-wishlist-btn ${wished ? "active" : ""}" id="pdWishlistBtn" aria-label="Toggle wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}"><path d="M12 20s-7-4.4-9.5-8.7C1 8 2.3 4.5 5.8 4c2-.3 3.6.7 6.2 3 2.6-2.3 4.2-3.3 6.2-3 3.5.5 4.8 4 3.3 7.3C19 15.6 12 20 12 20z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
          </button>
        </div>

        <div class="pd-block">
          <h3>Why you'll love it</h3>
          <div class="pd-love-list">
            ${p.features.slice(0, 4).map(f => `<div class="pd-love-item">${f}</div>`).join("")}
          </div>
        </div>

        <div class="pd-tabs">
          <div class="pd-block">
            <h3>Description</h3>
            <p>${p.description}</p>
          </div>
          <div class="pd-block">
            <h3>Features</h3>
            <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
          </div>
          <div class="pd-block">
            <h3>Specifications</h3>
            <ul>
              <li>Category: ${categoryName(p.category)}</li>
              <li>Rating: ${p.rating} out of 5 (${p.reviews} reviews)</li>
            </ul>
          </div>
          <div class="pd-block">
            <h3>Shipping Information</h3>
            <p>Free shipping on orders above ${formatPrice(FREE_SHIPPING_LIMIT)}. Orders below this value are charged a standard shipping fee at checkout.</p>
          </div>
          <div class="pd-block">
            <h3>Return Information</h3>
            <p>See our Return &amp; Refund Policy for eligibility and steps to initiate a return.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Gallery thumbnail switching
  container.querySelectorAll(".pd-thumb").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-thumb-index"));
      currentPDImageIndex = idx;
      document.getElementById("pdMainImage").src = p.gallery[idx];
      container.querySelectorAll(".pd-thumb").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Quantity stepper
  document.getElementById("pdQtyMinus").addEventListener("click", () => {
    currentPDQty = Math.max(1, currentPDQty - 1);
    document.getElementById("pdQtyValue").textContent = currentPDQty;
  });
  document.getElementById("pdQtyPlus").addEventListener("click", () => {
    currentPDQty += 1;
    document.getElementById("pdQtyValue").textContent = currentPDQty;
  });

  // Actions
  document.getElementById("pdAddCartBtn").addEventListener("click", () => addToCart(p.id, currentPDQty));
  document.getElementById("pdBuyNowBtn").addEventListener("click", () => buyNow(p.id, currentPDQty));
  document.getElementById("pdWishlistBtn").addEventListener("click", (e) => {
    toggleWishlist(p.id);
    const btn = e.currentTarget;
    btn.classList.toggle("active", isWishlisted(p.id));
    btn.querySelector("svg").setAttribute("fill", isWishlisted(p.id) ? "currentColor" : "none");
  });

  // Related products (same category, excluding current)
  const related = products.filter(rp => rp.category === p.category && rp.id !== p.id).slice(0, 4);
  const relatedFallback = related.length ? related : products.filter(rp => rp.id !== p.id).slice(0, 4);
  renderProductGrid("relatedGrid", relatedFallback);

  // Recently viewed (excluding current)
  const recentSection = document.getElementById("recentlyViewedSection");
  const recentIds = recentlyViewed.filter(rid => rid !== p.id);
  if (recentIds.length > 0) {
    recentSection.hidden = false;
    renderProductGrid("recentlyViewedGrid", recentIds.map(findProduct).filter(Boolean));
  } else {
    recentSection.hidden = true;
  }

  attachProductGridEvents();
}

// ==========================================
// BUY NOW
// ==========================================
function buyNow(id, qty = 1) {
  addToCart(id, qty);
  if (location.hash === "#checkout") {
    renderCheckoutSummary();
  } else {
    location.hash = "#checkout";
  }
}

// ==========================================
// CART VIEW RENDERING
// ==========================================
function renderCartView() {
  const list = document.getElementById("cartItemsList");
  const emptyState = document.getElementById("cartEmptyState");
  const summaryBox = document.getElementById("cartSummaryBox");

  if (cart.length === 0) {
    list.innerHTML = "";
    emptyState.hidden = false;
    summaryBox.style.display = "none";
    return;
  }
  emptyState.hidden = true;
  summaryBox.style.display = "";

  list.innerHTML = cart.map(c => {
    const p = findProduct(c.id);
    if (!p) return "";
    return `
    <div class="cart-item">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-cat">${categoryName(p.category)}</div>
        <div class="cart-item-row">
          <div class="qty-stepper">
            <button data-cart-minus="${p.id}" aria-label="Decrease quantity">−</button>
            <span>${c.qty}</span>
            <button data-cart-plus="${p.id}" aria-label="Increase quantity">+</button>
          </div>
          <span class="cart-item-price">${formatPrice(p.price * c.qty)}</span>
        </div>
        <button class="remove-item-btn" data-cart-remove="${p.id}">Remove</button>
      </div>
    </div>`;
  }).join("");

  list.querySelectorAll("[data-cart-minus]").forEach(btn => btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-cart-minus");
    const item = cart.find(c => c.id === Number(id));
    if (item.qty <= 1) { removeFromCart(id); } else { setCartQty(id, item.qty - 1); }
  }));
  list.querySelectorAll("[data-cart-plus]").forEach(btn => btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-cart-plus");
    const item = cart.find(c => c.id === Number(id));
    setCartQty(id, item.qty + 1);
  }));
  list.querySelectorAll("[data-cart-remove]").forEach(btn => btn.addEventListener("click", () => {
    removeFromCart(btn.getAttribute("data-cart-remove"));
  }));

  renderCartTotals();
}

function renderCartTotals() {
  const { subtotal, discount, shipping, total } = cartTotals();
  document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);
  document.getElementById("cartShipping").textContent = shipping === 0 ? "FREE" : formatPrice(shipping);
  document.getElementById("cartTotal").textContent = formatPrice(total);
  const discountRow = document.getElementById("cartDiscountRow");
  if (discount > 0) {
    discountRow.hidden = false;
    document.getElementById("cartDiscount").textContent = "-" + formatPrice(discount);
  } else {
    discountRow.hidden = true;
  }
  document.getElementById("couponInput").value = appliedCoupon || "";
  const msgEl = document.getElementById("couponMsg");
  if (appliedCoupon && COUPONS[appliedCoupon]) {
    msgEl.textContent = COUPONS[appliedCoupon].label + " applied";
    msgEl.className = "coupon-msg success";
  } else {
    msgEl.textContent = "";
  }
}

function initCouponHandler() {
  document.getElementById("applyCouponBtn").addEventListener("click", () => {
    const code = document.getElementById("couponInput").value.trim().toUpperCase();
    if (!code) { return; }
    if (COUPONS[code]) {
      appliedCoupon = code;
      saveToStorage("hk_coupon", appliedCoupon);
      showToast("Coupon applied ✓");
      renderCartTotals();
    } else {
      // Update totals first (keeps any previously applied valid coupon working),
      // then show the error message and the code the user tried, without it
      // being immediately overwritten by renderCartTotals' own message sync.
      renderCartTotals();
      const msgEl = document.getElementById("couponMsg");
      msgEl.textContent = "Invalid coupon code.";
      msgEl.className = "coupon-msg error";
      document.getElementById("couponInput").value = code;
    }
    if (!document.getElementById("view-checkout").hidden) renderCheckoutSummary();
  });
}

// ==========================================
// WISHLIST VIEW
// ==========================================
function renderWishlistView() {
  const grid = document.getElementById("wishlistGrid");
  const emptyState = document.getElementById("wishlistEmptyState");
  const items = wishlist.map(findProduct).filter(Boolean);
  if (items.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;
  renderProductGrid("wishlistGrid", items);
  attachProductGridEvents();
}

// ==========================================
// CHECKOUT VIEW
// ==========================================
function renderCheckoutSummary() {
  const { subtotal, discount, shipping, total } = cartTotals();
  document.getElementById("checkoutSubtotal").textContent = formatPrice(subtotal);
  document.getElementById("checkoutShipping").textContent = shipping === 0 ? "FREE" : formatPrice(shipping);
  document.getElementById("checkoutTotal").textContent = formatPrice(total);
  const discountRow = document.getElementById("checkoutDiscountRow");
  if (discount > 0) {
    discountRow.hidden = false;
    document.getElementById("checkoutDiscount").textContent = "-" + formatPrice(discount);
  } else {
    discountRow.hidden = true;
  }
  const itemsList = document.getElementById("checkoutItemsList");
  itemsList.innerHTML = cart.map(c => {
    const p = findProduct(c.id);
    if (!p) return "";
    return `<div class="checkout-line-item"><span>${p.name} × ${c.qty}</span><span>${formatPrice(p.price * c.qty)}</span></div>`;
  }).join("") || `<p class="empty-state" style="padding:10px 0;">Your cart is empty.</p>`;
}

function buildWhatsappMessage(customer) {
  const lines = [];
  lines.push(`Hello ${STORE_NAME},`);
  lines.push("");
  lines.push("I would like to place an order.");
  lines.push("");
  cart.forEach(c => {
    const p = findProduct(c.id);
    if (!p) return;
    lines.push(`Product: ${p.name}`);
    lines.push(`Quantity: ${c.qty}`);
    lines.push(`Price: ${formatPrice(p.price)}`);
    lines.push("");
  });
  const { total } = cartTotals();
  lines.push(`Total: ${formatPrice(total)}`);
  lines.push("");
  if (customer) {
    lines.push(`Customer Name: ${customer.fullName || ""}`);
    lines.push(`Mobile: ${customer.mobile || ""}`);
    lines.push(`Address: ${customer.house || ""}, ${customer.street || ""}`);
    lines.push(`City: ${customer.city || ""}`);
    lines.push(`State: ${customer.state || ""}`);
    lines.push(`PIN: ${customer.pin || ""}`);
  } else {
    lines.push("Customer Name: ");
    lines.push("Mobile: ");
    lines.push("Address: ");
    lines.push("City: ");
    lines.push("State: ");
    lines.push("PIN: ");
  }
  return encodeURIComponent(lines.join("\n"));
}

function openWhatsappOrder(customer) {
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }
  const msg = buildWhatsappMessage(customer);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
}

function initCheckoutForm() {
  const form = document.getElementById("checkoutForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length === 0) { showToast("Your cart is empty"); return; }
    location.hash = "#order-success";
    cart = [];
    saveToStorage("hk_cart", cart);
    appliedCoupon = null;
    saveToStorage("hk_coupon", appliedCoupon);
    updateBadges();
  });

  form.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener("change", () => {
      document.getElementById("onlinePaymentNote").hidden = radio.value !== "online" || !radio.checked;
    });
  });

  document.getElementById("checkoutWhatsappBtn").addEventListener("click", () => {
    const data = new FormData(form);
    const customer = Object.fromEntries(data.entries());
    openWhatsappOrder(customer);
  });
}

// ==========================================
// POLICY PAGES CONTENT
// ==========================================
const POLICY_PAGES = {
  privacy: {
    title: "Privacy Policy",
    body: `<p>This Privacy Policy explains how H&K collects, uses and protects your information when you shop with us. This is placeholder text — please replace it with your finalized, legally reviewed policy before publishing your store.</p>
    <h3>Information We Collect</h3><p>Details you provide during checkout, such as your name, contact number, email and delivery address.</p>
    <h3>How We Use Information</h3><p>To process orders, communicate delivery updates, and improve our services.</p>
    <h3>Contact</h3><p>For privacy questions, reach us at ${EMAIL}.</p>`
  },
  terms: {
    title: "Terms & Conditions",
    body: `<p>These Terms &amp; Conditions govern your use of the H&K website. This is placeholder text — please replace it with your finalized, legally reviewed terms before publishing your store.</p>
    <h3>Orders</h3><p>All orders are subject to availability and confirmation.</p>
    <h3>Pricing</h3><p>Prices are listed in Indian Rupees (₹) and may change without prior notice.</p>`
  },
  shipping: {
    title: "Shipping Policy",
    body: `<p>This is placeholder shipping policy text — please replace it with your finalized policy before publishing your store.</p>
    <h3>Shipping Charges</h3><p>Orders above ${formatPrice(FREE_SHIPPING_LIMIT)} qualify for free shipping. Orders below this amount are charged a standard shipping fee of ${formatPrice(STANDARD_SHIPPING_FEE)} at checkout.</p>
    <h3>Delivery Timelines</h3><p>Delivery timelines vary based on your location and will be communicated after order confirmation.</p>`
  },
  refund: {
    title: "Return & Refund Policy",
    body: `<p id="policy-returns-anchor">This is placeholder return &amp; refund policy text — please replace it with your finalized policy before publishing your store.</p>
    <h3>Returns</h3><p>Please contact us within the applicable window from delivery to initiate a return.</p>
    <h3>Refunds</h3><p>Refunds are processed after the returned product is received and inspected.</p>`
  }
};
// alias so #policy-returns also resolves sensibly
POLICY_PAGES.returns = POLICY_PAGES.refund;

function renderPolicyPage(key) {
  const data = POLICY_PAGES[key] || POLICY_PAGES.privacy;
  document.getElementById("policyContainer").innerHTML = `<h1>${data.title}</h1>${data.body}`;
}

// ==========================================
// PRODUCT GRID EVENT DELEGATION (Add/Buy/Wishlist buttons)
// ==========================================
function attachProductGridEvents() {
  document.querySelectorAll("[data-add-cart]").forEach(btn => {
    btn.onclick = () => addToCart(btn.getAttribute("data-add-cart"), 1);
  });
  document.querySelectorAll("[data-buy-now]").forEach(btn => {
    btn.onclick = () => buyNow(btn.getAttribute("data-buy-now"), 1);
  });
  document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      toggleWishlist(btn.getAttribute("data-wishlist-id"));
    };
  });
}

// ==========================================
// ROUTER — simple hash-based single page navigation
// ==========================================
function parseHash() {
  const raw = location.hash.replace(/^#/, "");
  const [path, queryString] = raw.split("?");
  const params = new URLSearchParams(queryString || "");
  return { path: path || "home", params };
}

function showView(viewId) {
  document.querySelectorAll(".app-view").forEach(v => v.hidden = true);
  const target = document.getElementById(viewId);
  if (target) target.hidden = false;
}

function updateBottomNavActive(path) {
  document.querySelectorAll(".bottom-nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-bottom") === path);
  });
}

function router() {
  const { path, params } = parseHash();
  window.scrollTo(0, 0);
  closeAllOverlays();

  if (path === "home") {
    showView("view-home");
    updateBottomNavActive("home");

  } else if (path === "shop") {
    activeFilters.category = params.get("category") || params.get("filter") || null;
    activeFilters.search = "";
    showView("view-shop");
    renderShopView();
    updateBottomNavActive("shop");

  } else if (path === "categories") {
    showView("view-home");
    setTimeout(() => document.getElementById("categories").scrollIntoView({ behavior: "smooth" }), 50);
    updateBottomNavActive("categories");

  } else if (path.startsWith("product-")) {
    const id = path.replace("product-", "");
    showView("view-product");
    renderProductDetail(id);
    updateBottomNavActive("");

  } else if (path === "cart") {
    showView("view-cart");
    renderCartView();
    updateBottomNavActive("cart");

  } else if (path === "wishlist") {
    showView("view-wishlist");
    renderWishlistView();
    updateBottomNavActive("wishlist");

  } else if (path === "checkout") {
    showView("view-checkout");
    renderCheckoutSummary();
    updateBottomNavActive("");

  } else if (path === "order-success") {
    showView("view-order-success");
    updateBottomNavActive("");

  } else if (path.startsWith("policy-")) {
    const key = path.replace("policy-", "");
    showView("view-policy");
    renderPolicyPage(key);
    updateBottomNavActive("");

  } else if (path === "account") {
    showView("view-account");
    updateBottomNavActive("");

  } else if (path === "contact" || path === "faq" || path === "about") {
    showView("view-home");
    setTimeout(() => {
      const el = document.getElementById(path);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
    updateBottomNavActive("");

  } else {
    showView("view-home");
    updateBottomNavActive("home");
  }

  refreshWishlistButtons();
}

// ==========================================
// MOBILE MENU / OVERLAYS
// ==========================================
function closeAllOverlays() {
  document.getElementById("mobileMenu").classList.remove("active");
  document.getElementById("searchOverlay").classList.remove("active");
  document.getElementById("overlayBackdrop").classList.remove("active");
}

function initMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("overlayBackdrop");
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
    menu.classList.add("active");
    backdrop.classList.add("active");
  });
  backdrop.addEventListener("click", closeAllOverlays);
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeAllOverlays));
}

// ==========================================
// SORT SELECT
// ==========================================
function initSortSelect() {
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    activeSort = e.target.value;
    renderShopView();
  });
  document.getElementById("clearFiltersBtn").addEventListener("click", () => {
    activeFilters = { category: null, priceRange: null, search: "" };
    activeSort = "featured";
    renderShopView();
  });
}

// ==========================================
// CART PAGE WHATSAPP BUTTON
// ==========================================
function initCartWhatsapp() {
  document.getElementById("cartWhatsappBtn").addEventListener("click", () => openWhatsappOrder(null));
}

// ==========================================
// INIT
// ==========================================
function init() {
  updateBadges();
  renderHomeSections();
  initSearch();
  initMobileMenu();
  initSortSelect();
  initCouponHandler();
  initCheckoutForm();
  initCartWhatsapp();

  window.addEventListener("hashchange", router);
  router();
}

document.addEventListener("DOMContentLoaded", init);
