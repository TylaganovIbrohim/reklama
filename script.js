// === SVG ИКОНКИ ДЛЯ ТОВАРОВ ===
const icons = {
    icecream: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/><path d="M10 21h4"/></svg>`,
    bowl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 11h18M5 11v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,
    rice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>`,
    roll: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="6" width="16" height="12" rx="6"/><path d="M8 6v12M16 6v12"/></svg>`,
    tea: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
    drink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2h8l-1 18H9L8 2z"/><path d="M7 6h10"/></svg>`,
    hoodie: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
    shirt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
    pants: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v4l-2 12h-4l-2-8-2 8H6L4 8V4z"/></svg>`,
    cap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 16c0-5 4-9 10-9s10 4 10 9"/><path d="M2 16h20"/><path d="M12 7V3"/></svg>`,
    bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    chain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01" stroke-linecap="round"/></svg>`,
    laptop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
    watch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/></svg>`,
    tablet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01" stroke-linecap="round"/></svg>`
};

// === ДАННЫЕ КАТАЛОГОВ (ИКОНКИ ВМЕСТО ФОТО) ===
const demos = {
    icecream: {
        title: "Gelato Studio",
        theme: { accent: "#f472b6", glow: "#f9a8d4", bg: "#0c0508" },
        categories: [
            {
                name: "Классика",
                subs: ["Сливочное", "Шоколадное", "Фисташковое"],
                products: [
                    { name: "Ваниль Мадагаскар", price: "250 ₽", sub: "Сливочное", icon: "icecream" },
                    { name: "Бельгийский шоколад", price: "280 ₽", sub: "Шоколадное", icon: "icecream" },
                    { name: "Фисташка Сицилия", price: "300 ₽", sub: "Фисташковое", icon: "icecream" },
                    { name: "Карамель с солью", price: "270 ₽", sub: "Сливочное", icon: "icecream" },
                ]
            },
            {
                name: "Фруктовые",
                subs: ["Ягоды", "Цитрусовые", "Тропические"],
                products: [
                    { name: "Манго-Маракуйя", price: "270 ₽", sub: "Тропические", icon: "icecream" },
                    { name: "Клубничный сорбет", price: "240 ₽", sub: "Ягоды", icon: "icecream" },
                    { name: "Лимонный сорбет", price: "230 ₽", sub: "Цитрусовые", icon: "icecream" },
                    { name: "Малина-Базилик", price: "260 ₽", sub: "Ягоды", icon: "icecream" },
                ]
            },
            {
                name: "Специальное",
                subs: ["Без сахара", "Веганское"],
                products: [
                    { name: "Кокос-Миндаль", price: "290 ₽", sub: "Веганское", icon: "icecream" },
                    { name: "Стевия-Ваниль", price: "260 ₽", sub: "Без сахара", icon: "icecream" },
                ]
            }
        ]
    },
    chinese: {
        title: "Dragon Wok",
        theme: { accent: "#ef4444", glow: "#fca5a5", bg: "#0a0505" },
        categories: [
            {
                name: "Лапша",
                subs: ["Удон", "Рамен", "Соба"],
                products: [
                    { name: "Удон с курицей", price: "320 ₽", sub: "Удон", icon: "bowl" },
                    { name: "Рамен острый", price: "350 ₽", sub: "Рамен", icon: "bowl" },
                    { name: "Соба с овощами", price: "300 ₽", sub: "Соба", icon: "bowl" },
                    { name: "Удон с говядиной", price: "340 ₽", sub: "Удон", icon: "bowl" },
                ]
            },
            {
                name: "Рис",
                subs: ["Жареный", "На пару"],
                products: [
                    { name: "Жареный рис с яйцом", price: "280 ₽", sub: "Жареный", icon: "rice" },
                    { name: "Рис с креветками", price: "320 ₽", sub: "Жареный", icon: "rice" },
                    { name: "Белый рис жасмин", price: "120 ₽", sub: "На пару", icon: "rice" },
                ]
            },
            {
                name: "Закуски",
                subs: ["Роллы", "Бао", "Супы"],
                products: [
                    { name: "Спринг-роллы", price: "190 ₽", sub: "Роллы", icon: "roll" },
                    { name: "Бао с уткой", price: "220 ₽", sub: "Бао", icon: "roll" },
                    { name: "Том Ям", price: "280 ₽", sub: "Супы", icon: "bowl" },
                ]
            },
            {
                name: "Напитки",
                subs: ["Чай", "Газировка"],
                products: [
                    { name: "Чай Пуэр", price: "150 ₽", sub: "Чай", icon: "tea" },
                    { name: "Жасминовый чай", price: "140 ₽", sub: "Чай", icon: "tea" },
                    { name: "Кола", price: "100 ₽", sub: "Газировка", icon: "drink" },
                ]
            }
        ]
    },
    clothes: {
        title: "Urban Style",
        theme: { accent: "#3b82f6", glow: "#93c5fd", bg: "#050810" },
        categories: [
            {
                name: "Верх",
                subs: ["Худи", "Футболки", "Куртки"],
                products: [
                    { name: "Худи Oversize", price: "3 500 ₽", sub: "Худи", icon: "hoodie" },
                    { name: "Футболка Basic", price: "1 500 ₽", sub: "Футболки", icon: "shirt" },
                    { name: "Бомбер", price: "4 200 ₽", sub: "Куртки", icon: "hoodie" },
                    { name: "Лонгслив", price: "1 800 ₽", sub: "Футболки", icon: "shirt" },
                ]
            },
            {
                name: "Низ",
                subs: ["Штаны", "Джинсы", "Шорты"],
                products: [
                    { name: "Карго штаны", price: "2 800 ₽", sub: "Штаны", icon: "pants" },
                    { name: "Джинсы Wide", price: "3 200 ₽", sub: "Джинсы", icon: "pants" },
                    { name: "Шорты спорт", price: "1 600 ₽", sub: "Шорты", icon: "pants" },
                ]
            },
            {
                name: "Аксессуары",
                subs: ["Головные уборы", "Сумки", "Украшения"],
                products: [
                    { name: "Бейсболка", price: "1 200 ₽", sub: "Головные уборы", icon: "cap" },
                    { name: "Рюкзак City", price: "2 400 ₽", sub: "Сумки", icon: "bag" },
                    { name: "Цепь серебро", price: "1 800 ₽", sub: "Украшения", icon: "chain" },
                ]
            }
        ]
    },
    tech: {
        title: "TechStore",
        theme: { accent: "#06b6d4", glow: "#67e8f9", bg: "#050a0c" },
        categories: [
            {
                name: "Смартфоны",
                subs: ["Apple", "Samsung", "Xiaomi"],
                products: [
                    { name: "iPhone 15 Pro", price: "120 000 ₽", sub: "Apple", icon: "phone" },
                    { name: "Samsung S24", price: "95 000 ₽", sub: "Samsung", icon: "phone" },
                    { name: "Xiaomi 14", price: "65 000 ₽", sub: "Xiaomi", icon: "phone" },
                ]
            },
            {
                name: "Ноутбуки",
                subs: ["MacBook", "Windows", "Игровые"],
                products: [
                    { name: "MacBook Air M3", price: "130 000 ₽", sub: "MacBook", icon: "laptop" },
                    { name: "ASUS ROG", price: "140 000 ₽", sub: "Игровые", icon: "laptop" },
                    { name: "ThinkPad X1", price: "110 000 ₽", sub: "Windows", icon: "laptop" },
                ]
            },
            {
                name: "Гаджеты",
                subs: ["Наушники", "Часы", "Планшеты"],
                products: [
                    { name: "AirPods Pro", price: "22 000 ₽", sub: "Наушники", icon: "headphones" },
                    { name: "Apple Watch", price: "35 000 ₽", sub: "Часы", icon: "watch" },
                    { name: "iPad Air", price: "65 000 ₽", sub: "Планшеты", icon: "tablet" },
                ]
            }
        ]
    }
};

// === СОСТОЯНИЕ ===
let currentDemo = null;
let currentCatIdx = 0;
let currentSub = "Все";

const modal = document.getElementById('demoModal');
const miniTitle = document.getElementById('miniTitle');
const mainMenu = document.getElementById('mainMenu');
const subMenu = document.getElementById('subMenu');
const miniProducts = document.getElementById('miniProducts');
const miniSearch = document.getElementById('miniSearch');
const preloader = document.getElementById('preloader');

// === ПРИМЕНЕНИЕ ТЕМЫ ===
function applyTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-glow', theme.glow);
    root.style.setProperty('--theme-bg', theme.bg);
}

function resetTheme() {
    const root = document.documentElement;
    root.style.removeProperty('--theme-accent');
    root.style.removeProperty('--theme-glow');
    root.style.removeProperty('--theme-bg');
}

// === ОТКРЫТИЕ / ЗАКРЫТИЕ ===
function openDemo(key) {
    currentDemo = demos[key];
    currentCatIdx = 0;
    currentSub = "Все";
    
    applyTheme(currentDemo.theme);
    miniTitle.textContent = currentDemo.title;
    miniSearch.value = "";
    
    renderMainMenu();
    renderSubMenu();
    renderProducts();
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDemo() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    resetTheme();
    currentDemo = null;
}

// === РЕНДЕР ГЛАВНОГО МЕНЮ ===
function renderMainMenu() {
    mainMenu.innerHTML = '';
    currentDemo.categories.forEach((cat, idx) => {
        const btn = document.createElement('button');
        btn.className = `menu-btn ${idx === currentCatIdx ? 'active' : ''}`;
        btn.textContent = cat.name;
        btn.style.animationDelay = `${idx * 0.06}s`;
        btn.onclick = () => {
            currentCatIdx = idx;
            currentSub = "Все";
            renderMainMenu();
            renderSubMenu();
            renderProducts();
        };
        mainMenu.appendChild(btn);
    });
}

// === РЕНДЕР ПОДМЕНЮ ===
function renderSubMenu() {
    subMenu.innerHTML = '';
    const cat = currentDemo.categories[currentCatIdx];
    
    const allBtn = document.createElement('button');
    allBtn.className = `menu-btn ${currentSub === "Все" ? 'active' : ''}`;
    allBtn.textContent = "Все";
    allBtn.onclick = () => { currentSub = "Все"; renderSubMenu(); renderProducts(); };
    subMenu.appendChild(allBtn);

    cat.subs.forEach((sub, idx) => {
        const btn = document.createElement('button');
        btn.className = `menu-btn ${currentSub === sub ? 'active' : ''}`;
        btn.textContent = sub;
        btn.style.animationDelay = `${(idx + 1) * 0.05}s`;
        btn.onclick = () => { currentSub = sub; renderSubMenu(); renderProducts(); };
        subMenu.appendChild(btn);
    });
}

// === РЕНДЕР ТОВАРОВ ===
function renderProducts(filter = "") {
    miniProducts.innerHTML = '';
    const cat = currentDemo.categories[currentCatIdx];
    
    const filtered = cat.products.filter(p => {
        const matchSub = currentSub === "Все" || p.sub === currentSub;
        const matchSearch = p.name.toLowerCase().includes(filter.toLowerCase());
        return matchSub && matchSearch;
    });

    if (filtered.length === 0) {
        miniProducts.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:2rem;font-size:0.85rem;">Ничего не найдено</p>';
        return;
    }

    filtered.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${idx * 0.07}s`;
        card.innerHTML = `
            <div class="product-icon">${icons[p.icon]}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-price">${p.price}</div>
        `;
        miniProducts.appendChild(card);
    });
}

// === EVENT LISTENERS ===
document.querySelectorAll('.demo-card').forEach(card => {
    card.addEventListener('click', () => openDemo(card.dataset.demo));
});

document.querySelector('.modal-close').addEventListener('click', closeDemo);

miniSearch.addEventListener('input', (e) => {
    if (currentDemo) renderProducts(e.target.value);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeDemo();
});

// === SCROLL REVEAL ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// === ПЛАВНЫЙ СКРОЛЛ ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// === ЗАЩИТА ===
document.addEventListener('contextmenu', event => event.preventDefault());

// === ИНИЦИАЛИЗАЦИЯ (без предзагрузки фото - иконки мгновенные) ===
window.addEventListener('DOMContentLoaded', () => {
    // Небольшая задержка для плавности
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 600);
});