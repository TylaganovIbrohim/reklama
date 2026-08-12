// === ДАННЫЕ КАТАЛОГОВ ===
const demos = {
    icecream: {
        title: "Gelato Studio",
        theme: { accent: "#f472b6", glow: "#f9a8d4", bg: "#0c0508", class: "theme-icecream" },
        particles: { color: "244, 114, 182", count: 30, speed: 0.5 },
        categories: [
            {
                name: "Классика",
                subs: ["Сливочное", "Шоколадное", "Фисташковое"],
                products: [
                    { name: "Ваниль Мадагаскар", price: "250 ₽", sub: "Сливочное", img: "images/ice_vanilla.jpg" },
                    { name: "Бельгийский шоколад", price: "280 ₽", sub: "Шоколадное", img: "images/ice_choco.jpg" },
                    { name: "Фисташка Сицилия", price: "300 ₽", sub: "Фисташковое", img: "images/ice_pistachio.jpg" },
                    { name: "Карамель с солью", price: "270 ₽", sub: "Сливочное", img: "images/ice_caramel.jpg" },
                ]
            },
            {
                name: "Фруктовые",
                subs: ["Ягоды", "Цитрусовые", "Тропические"],
                products: [
                    { name: "Манго-Маракуйя", price: "270 ₽", sub: "Тропические", img: "images/ice_mango.jpg" },
                    { name: "Клубничный сорбет", price: "240 ₽", sub: "Ягоды", img: "images/ice_strawberry.jpg" },
                    { name: "Лимонный сорбет", price: "230 ₽", sub: "Цитрусовые", img: "images/ice_lemon.jpg" },
                    { name: "Малина-Базилик", price: "260 ₽", sub: "Ягоды", img: "images/ice_raspberry.jpg" },
                ]
            },
            {
                name: "Специальное",
                subs: ["Без сахара", "Веганское"],
                products: [
                    { name: "Кокос-Миндаль", price: "290 ₽", sub: "Веганское", img: "images/ice_coconut.jpg" },
                    { name: "Стевия-Ваниль", price: "260 ₽", sub: "Без сахара", img: "images/ice_stevia.jpg" },
                ]
            }
        ]
    },
    cafe: {
        title: "World Kitchen",
        theme: { accent: "#fb923c", glow: "#fdba74", bg: "#0a0805", class: "theme-cafe" },
        particles: { color: "251, 146, 60", count: 20, speed: 0.3 },
        categories: [
            {
                name: "Горячее",
                subs: ["Паста", "Бургеры", "Пицца", "Стейки"],
                products: [
                    { name: "Карбонара", price: "450 ₽", sub: "Паста", img: "images/cafe_pasta.jpg" },
                    { name: "Чизбургер", price: "380 ₽", sub: "Бургеры", img: "images/cafe_burger.jpg" },
                    { name: "Маргарита", price: "520 ₽", sub: "Пицца", img: "images/cafe_pizza.jpg" },
                    { name: "Рибай стейк", price: "1200 ₽", sub: "Стейки", img: "images/cafe_steak.jpg" },
                ]
            },
            {
                name: "Азия",
                subs: ["Суши", "Лапша", "Супы"],
                products: [
                    { name: "Филадельфия", price: "650 ₽", sub: "Суши", img: "images/cafe_sushi.jpg" },
                    { name: "Том Ям", price: "420 ₽", sub: "Супы", img: "images/cafe_soup.jpg" },
                ]
            },
            {
                name: "Салаты",
                subs: ["Классика", "Авторские"],
                products: [
                    { name: "Цезарь", price: "350 ₽", sub: "Классика", img: "images/cafe_salad.jpg" },
                    { name: "Греческий", price: "320 ₽", sub: "Классика", img: "images/cafe_salad.jpg" },
                ]
            },
            {
                name: "Десерты",
                subs: ["Торты", "Мороженое"],
                products: [
                    { name: "Тирамису", price: "280 ₽", sub: "Торты", img: "images/cafe_tiramisu.jpg" },
                ]
            },
            {
                name: "Напитки",
                subs: ["Кофе", "Соки", "Чай"],
                products: [
                    { name: "Капучино", price: "180 ₽", sub: "Кофе", img: "images/cafe_coffee.jpg" },
                    { name: "Апельсиновый сок", price: "150 ₽", sub: "Соки", img: "images/cafe_juice.jpg" },
                ]
            }
        ]
    },
    clothes: {
        title: "Urban Style",
        theme: { accent: "#3b82f6", glow: "#93c5fd", bg: "#050810", class: "theme-clothes" },
        particles: { color: "59, 130, 246", count: 25, speed: 0.4 },
        categories: [
            {
                name: "Верх",
                subs: ["Худи", "Футболки", "Куртки"],
                products: [
                    { name: "Худи Oversize", price: "3 500 ₽", sub: "Худи", img: "images/cl_hoodie.jpg" },
                    { name: "Футболка Basic", price: "1 500 ₽", sub: "Футболки", img: "images/cl_tshirt.jpg" },
                    { name: "Бомбер", price: "4 200 ₽", sub: "Куртки", img: "images/cl_bomber.jpg" },
                    { name: "Лонгслив", price: "1 800 ₽", sub: "Футболки", img: "images/cl_longsleeve.jpg" },
                ]
            },
            {
                name: "Низ",
                subs: ["Штаны", "Джинсы", "Шорты"],
                products: [
                    { name: "Карго штаны", price: "2 800 ₽", sub: "Штаны", img: "images/cl_cargo.jpg" },
                    { name: "Джинсы Wide", price: "3 200 ₽", sub: "Джинсы", img: "images/cl_jeans.jpg" },
                    { name: "Шорты спорт", price: "1 600 ₽", sub: "Шорты", img: "images/cl_shorts.jpg" },
                ]
            },
            {
                name: "Аксессуары",
                subs: ["Головные уборы", "Сумки", "Украшения"],
                products: [
                    { name: "Бейсболка", price: "1 200 ₽", sub: "Головные уборы", img: "images/cl_cap.jpg" },
                    { name: "Рюкзак City", price: "2 400 ₽", sub: "Сумки", img: "images/cl_backpack.jpg" },
                    { name: "Цепь серебро", price: "1 800 ₽", sub: "Украшения", img: "images/cl_chain.jpg" },
                ]
            }
        ]
    },
    tech: {
        title: "TechStore",
        theme: { accent: "#06b6d4", glow: "#67e8f9", bg: "#050a0c", class: "theme-tech" },
        particles: { color: "6, 182, 212", count: 40, speed: 0.8 },
        categories: [
            {
                name: "Смартфоны",
                subs: ["Apple", "Samsung", "Xiaomi"],
                products: [
                    { name: "iPhone 15 Pro", price: "120 000 ₽", sub: "Apple", img: "images/tech_iphone.jpg" },
                    { name: "Samsung S24", price: "95 000 ₽", sub: "Samsung", img: "images/tech_samsung.jpg" },
                    { name: "Xiaomi 14", price: "65 000 ₽", sub: "Xiaomi", img: "images/tech_xiaomi.jpg" },
                ]
            },
            {
                name: "Ноутбуки",
                subs: ["MacBook", "Windows", "Игровые"],
                products: [
                    { name: "MacBook Air M3", price: "130 000 ₽", sub: "MacBook", img: "images/tech_macbook.jpg" },
                    { name: "ASUS ROG", price: "140 000 ₽", sub: "Игровые", img: "images/tech_asus.jpg" },
                    { name: "ThinkPad X1", price: "110 000 ₽", sub: "Windows", img: "images/tech_thinkpad.jpg" },
                ]
            },
            {
                name: "Гаджеты",
                subs: ["Наушники", "Часы", "Планшеты"],
                products: [
                    { name: "AirPods Pro", price: "22 000 ₽", sub: "Наушники", img: "images/tech_airpods.jpg" },
                    { name: "Apple Watch", price: "35 000 ₽", sub: "Часы", img: "images/tech_watch.jpg" },
                    { name: "iPad Air", price: "65 000 ₽", sub: "Планшеты", img: "images/tech_ipad.jpg" },
                ]
            }
        ]
    }
};

// === СОСТОЯНИЕ ===
let currentDemo = null;
let currentCatIdx = 0;
let currentSub = "Все";
let particleAnimation = null;

const modal = document.getElementById('demoModal');
const miniTitle = document.getElementById('miniTitle');
const mainMenu = document.getElementById('mainMenu');
const subMenu = document.getElementById('subMenu');
const miniProducts = document.getElementById('miniProducts');
const miniSearch = document.getElementById('miniSearch');
const preloader = document.getElementById('preloader');
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// === ЧАСТИЦЫ ===
function initParticles(config) {
    cancelAnimationFrame(particleAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < config.count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * config.speed,
            vy: (Math.random() - 0.5) * config.speed,
            size: Math.random() * 3 + 1,
            alpha: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${config.color}, ${p.alpha})`;
            ctx.fill();
        });
        particleAnimation = requestAnimationFrame(animate);
    }
    animate();
}

function stopParticles() {
    cancelAnimationFrame(particleAnimation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// === ТЕМА ===
function applyTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-glow', theme.glow);
    root.style.setProperty('--theme-bg', theme.bg);
    modal.className = `modal open ${theme.class}`;
}

function resetTheme() {
    const root = document.documentElement;
    root.style.removeProperty('--theme-accent');
    root.style.removeProperty('--theme-glow');
    root.style.removeProperty('--theme-bg');
    modal.className = 'modal';
}

// === ОТКРЫТИЕ / ЗАКРЫТИЕ ===
function openDemo(key) {
    currentDemo = demos[key];
    currentCatIdx = 0;
    currentSub = "Все";
    
    applyTheme(currentDemo.theme);
    initParticles(currentDemo.particles);
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
    stopParticles();
    currentDemo = null;
}

// === РЕНДЕР МЕНЮ ===
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
            <div class="product-img">
                <img src="${p.img}" alt="${p.name}" loading="eager" draggable="false">
            </div>
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

window.addEventListener('resize', () => {
    if (currentDemo) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('contextmenu', event => event.preventDefault());

// === ПРЕДЗАГРУЗКА ФОТО ===
function preloadAllImages() {
    const allUrls = [];
    Object.values(demos).forEach(demo => {
        demo.categories.forEach(cat => {
            cat.products.forEach(p => allUrls.push(p.img));
        });
    });
    
    let loaded = 0;
    const total = allUrls.length;
    
    return new Promise((resolve) => {
        if (total === 0) { resolve(); return; }
        allUrls.forEach(url => {
            const img = new Image();
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded >= total) resolve();
            };
            img.src = url;
        });
        setTimeout(resolve, 15000);
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    await preloadAllImages();
    preloader.classList.add('hidden');
});
