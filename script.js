const products = [
  {
    id: 1,
    name: "کت لینن کلاسیک",
    category: "women",
    categoryName: "زنانه",
    price: 480,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    badge: "جدید",
  },
  {
    id: 2,
    name: "پیراهن نخی آبی",
    category: "men",
    categoryName: "مردانه",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "مانتو کتان خاکی",
    category: "women",
    categoryName: "زنانه",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 1,
    name: "کت لینن کلاسیک",
    category: "women",
    categoryName: "زنانه",
    price: 480,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    badge: "جدید",
  },
  {
    id: 3,
    name: "کیف دوشی چرم",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 540,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    badge: "محبوب",
  },
  {
    id: 4,
    name: "شلوار راسته کرم",
    category: "women",
    categoryName: "زنانه",
    price: 910,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "کیف دوشی چرم",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 540,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    badge: "محبوب",
  },
  {
    id: 5,
    name: "پلیور بافت زغالی",
    category: "men",
    categoryName: "مردانه",
    price: 760,
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "مانتو کتان خاکی",
    category: "women",
    categoryName: "زنانه",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "عینک آفتابی رترو",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 690,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    badge: "تخفیف ویژه",
  },
  {
    id: 7,
    name: "مانتو کتان خاکی",
    category: "women",
    categoryName: "زنانه",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "کت اسپرت سرمه‌ای",
    category: "men",
    categoryName: "مردانه",
    price: 470,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "عینک آفتابی رترو",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 690,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    badge: "تخفیف ویژه",
  },
  {
    id: 4,
    name: "شلوار راسته کرم",
    category: "women",
    categoryName: "زنانه",
    price: 910,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "کت اسپرت سرمه‌ای",
    category: "men",
    categoryName: "مردانه",
    price: 470,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    name: "مانتو کتان خاکی",
    category: "women",
    categoryName: "زنانه",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    name: "کت اسپرت سرمه‌ای",
    category: "men",
    categoryName: "مردانه",
    price: 470,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "عینک آفتابی رترو",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 690,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    badge: "تخفیف ویژه",
  },
  {
    id: 8,
    name: "کت اسپرت سرمه‌ای",
    category: "men",
    categoryName: "مردانه",
    price: 470,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "کیف دوشی چرم",
    category: "accessory",
    categoryName: "اکسسوری",
    price: 540,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
    badge: "محبوب",
  },
  {
    id: 8,
    name: "کت اسپرت سرمه‌ای",
    category: "men",
    categoryName: "مردانه",
    price: 470,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=700&q=80",
  },
];

let cart = JSON.parse(localStorage.getItem("ahmadian-cart") || "[]");
const faNumber = new Intl.NumberFormat("fa-IR");
const price = (amount) => `${faNumber.format(amount)} افغانی`;
const productGrid = document.querySelector("#productGrid");
const cartPanel = document.querySelector("#cartPanel");

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
      <div class="product-info"><h3>${product.name}</h3><p>${product.categoryName}</p><p class="price">${price(product.price)}</p></div>
    </article>`,
    )
    .join("");
}

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
    <div class="cart-item"><img src="${item.image}" alt="${item.name}"><div><h4>${item.name}</h4><p>${price(item.price)}</p></div><button class="remove" data-id="${item.id}" aria-label="حذف ${item.name}">×</button></div>`,
        )
        .join("")
    : '<p class="cart-empty">سبد خرید شما هنوز خالی است.</p>';
  document.querySelector("#cartTotal").textContent = price(
    cart.reduce((sum, item) => sum + item.price, 0),
  );
}
function addToCart(id) {
  cart.push(products.find((product) => product.id === Number(id)));
  saveCart();
  renderCart();
}
function toggleCart(show) {
  cartPanel.classList.toggle("open", show);
  document.body.style.overflow = show ? "hidden" : "";
}

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
  cart.splice(
    cart.findIndex((item) => item.id === Number(event.target.dataset.id)),
    1,
  );
  saveCart();
  renderCart();
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
document
  .querySelector(".checkout")
  .addEventListener("click", () =>
    alert("این بخش برای تمرین است؛ پرداخت واقعی فعال نیست."),
  );

renderProducts();
renderCart();
