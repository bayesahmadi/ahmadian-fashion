/* ============================================================
   AHMADIAN FASHION — Main Script
   40 unique products across 4 categories
   ============================================================ */

const products = [
  /* ---------- WOMEN (زنانه) — 12 items ---------- */
  {
    id: 1,
    name: "کت لینن کلاسیک",
    category: "women",
    categoryName: "زنانه",
    price: 480,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    badge: "جدید",
  },
  {
    id: 2,
    name: "مانتو کتان خاکی",
    category: "women",
    categoryName: "زنانه",
    price: 850,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "شلوار راسته کرم",
    category: "women",
    categoryName: "زنانه",
    price: 910,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "پیراهن ابریشمی صورتی",
    category: "women",
    categoryName: "زنانه",
    price: 620,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "دامن میدی چین‌دار",
    category: "women",
    categoryName: "زنانه",
    price: 540,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80",
    badge: "محبوب",
  },
  {
    id: 6,
    name: "بلوز کشمیر یقه‌گرد",
    category: "women",
    categoryName: "زنانه",
    price: 720,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "پالتو پشمی بلند",
    category: "women",
    categoryName: "زنانه",
    price: 1280,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=700&q=80",
    badge: "ویژه",
  },
  {
    id: 8,
    name: "شومیز ساتن آبی",
    category: "women",
    categoryName: "زنانه",
    price: 590,
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 9,
    name: "شلوار جین مام‌فیت",
    category: "women",
    categoryName: "زنانه",
    price: 680,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 10,
    name: "تیشرت نخی یقه‌هفت",
    category: "women",
    categoryName: "زنانه",
    price: 320,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 11,
    name: "بارانی سبک بهاری",
    category: "women",
    categoryName: "زنانه",
    price: 980,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 12,
    name: "ست بافت زمستانی",
    category: "women",
    categoryName: "زنانه",
    price: 1100,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
    badge: "تخفیف ویژه",
  },

  /* ---------- MEN (مردانه) — 12 items ---------- */
  {
    id: 13,
    name: "پیراهن نخی آبی",
    category: "men",
    categoryName: "مردانه",
    price: 620,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 14,
    name: "پلیور بافت زغالی",
    category: "men",
    categoryName: "مردانه",
    price: 760,
    image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 15,
    name: "کت اسپرت سرمه‌ای",
    category: "men",
    categoryName: "مردانه",
    price: 470,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 16,
    name: "شلوار پارچه‌ای فاخر",
    category: "men",
    categoryName: "مردانه",
    price: 890,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    badge: "جدید",
  },
  {
    id: 17,
    name: "تیشرت پولو کلاسیک",
    category: "men",
    categoryName: "مردانه",
    price: 380,
    image: "https://images.unsplash.com/photo-1625910513413-5fc45e4608b5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 18,
    name: "کاپشن چرم مشکی",
    category: "men",
    categoryName: "مردانه",
    price: 1450,
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=700&q=80",
    badge: "محبوب",
  },
  {
    id: 19,
    name: "پیراهن رسمی سفید",
    category: "men",
    categoryName: "مردانه",
    price: 540,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 20,
    name: "هودی ورزشی طوسی",
    category: "men",
    categoryName: "مردانه",
    price: 690,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 21,
    name: "کت تک دکمه‌دار",
    category: "men",
    categoryName: "مردانه",
    price: 1680,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
    badge: "ویژه",
  },
  {
    id: 22,
    name: "شلوار جین اسلیم",
    category: "men",
    categoryName: "مردانه",
    price: 720,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 23,
    name: "جلیقه بافت یقه‌گرد",
    category: "men",
    categoryName: "مردانه",
    price: 490,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 24,
    name: "بارانی کلاسیک کرم",
    category: "men",
    categoryName: "مردانه",
    price: 1350,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=700&q=80",
    badge: "تخفیف ویژه",
  },

  /* ---------- KIDS (طفلانه) — 8 items ---------- */
  {
    id: 25,
    name: "ست تیشرت و شلوار طفلانه",
    category: "kids",
    categoryName: "طفلانه",
    price: 340,
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=700&q=80",
    badge: "جدید",
  },
  {
    id: 26,
    name: "پیراهن نخی دخترانه",
    category: "kids",
    categoryName: "طفلانه",
    price: 280,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 27,
    name: "سویشرت پسرانه ورزشی",
    category: "kids",
    categoryName: "طفلانه",
    price: 420,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 28,
    name: "دامن توتو دخترانه",
    category: "kids",
    categoryName: "طفلانه",
    price: 360,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80",
    badge: "محبوب",
  },
  {
    id: 29,
    name: "کت بافت کودکانه",
    category: "kids",
    categoryName: "طفلانه",
    price: 450,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 30,
    name: "شلوارک جین طفلانه",
    category: "kids",
    categoryName: "طفلانه",
    price: 290,
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 31,
    name: "پیراهن خواب کودکانه",
    category: "kids",
    categoryName: "طفلانه",
    price: 260,
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 32,
    name: "ست زمستانی پشمی",
    category: "kids",
    categoryName: "طفلانه",
    price: 580,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=700&q=80",
    badge: "ویژه",
  },

  /* ---------- ACCESSORY (اکسسوری) — 8 items ---------- */
  {
    id: 33,
    name: "کیف دوشی چرم",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 540,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    badge: "محبوب",
  },
  {
    id: 34,
    name: "عینک آفتابی رترو",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 690,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    badge: "تخفیف ویژه",
  },
  {
    id: 35,
    name: "شال گردن پشمی",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 320,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 36,
    name: "کلاه بافت زمستانی",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 280,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 37,
    name: "دستکش چرم زنانه",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 390,
    image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 38,
    name: "کمربند چرم کلاسیک",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 450,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
    badge: "جدید",
  },
  {
    id: 39,
    name: "جوراب نخی بسته‌ای",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 180,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 40,
    name: "گردنبند مینیمال",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 520,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    badge: "ویژه",
  },
];

/* ============================================================
   CART STATE
   ============================================================ */
let cart = JSON.parse(localStorage.getItem("ahmadian-cart") || "[]");
const faNumber = new Intl.NumberFormat("fa-IR");
const price = (amount) => `${faNumber.format(amount)} افغانی`;

const productGrid = document.querySelector("#productGrid");
const cartPanel = document.querySelector("#cartPanel");

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function renderProducts(category = "all") {
  const visible =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  productGrid.innerHTML = visible
    .map(
      (product) => `
    <article class="product">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
        <button class="quick-add" data-id="${product.id}">افزودن به سبد خرید</button>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.categoryName}</p>
        <p class="price">${price(product.price)}</p>
      </div>
    </article>`,
    )
    .join("");
}

/* ============================================================
   CART LOGIC
   ============================================================ */
function saveCart() {
  localStorage.setItem("ahmadian-cart", JSON.stringify(cart));
}

function renderCart() {
  document.querySelector("#cartCount").textContent = faNumber.format(
    cart.length,
  );

  const items = document.querySelector("#cartItems");
  items.innerHTML = cart.length
    ? cart
        .map(
          (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${price(item.price)}</p>
      </div>
      <button class="remove" data-id="${item.id}" aria-label="حذف ${item.name}">×</button>
    </div>`,
        )
        .join("")
    : '<p class="cart-empty">سبد خرید شما هنوز خالی است.</p>';

  document.querySelector("#cartTotal").textContent = price(
    cart.reduce((sum, item) => sum + item.price, 0),
  );
}

function addToCart(id) {
  const product = products.find((p) => p.id === Number(id));
  if (!product) return;
  cart.push(product);
  saveCart();
  renderCart();
}

function toggleCart(show) {
  cartPanel.classList.toggle("open", show);
  document.body.style.overflow = show ? "hidden" : "";
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */
document.querySelector("#filters").addEventListener("click", (event) => {
  if (!event.target.matches(".filter")) return;
  document
    .querySelectorAll(".filter")
    .forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
  renderProducts(event.target.dataset.category);
});

productGrid.addEventListener("click", (event) => {
  if (event.target.matches(".quick-add")) addToCart(event.target.dataset.id);
});

document.querySelector("#cartItems").addEventListener("click", (event) => {
  if (!event.target.matches(".remove")) return;
  const index = cart.findIndex(
    (item) => item.id === Number(event.target.dataset.id),
  );
  if (index > -1) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }
});

document
  .querySelector("#cartButton")
  .addEventListener("click", () => toggleCart(true));

document
  .querySelector("#closeCart")
  .addEventListener("click", () => toggleCart(false));

document
  .querySelector("#overlay")
  .addEventListener("click", () => toggleCart(false));

document.querySelector(".checkout").addEventListener("click", () =>
  alert("این بخش برای تمرین است؛ پرداخت واقعی فعال نیست."),
);

/* ============================================================
   INIT
   ============================================================ */
renderProducts();
renderCart();