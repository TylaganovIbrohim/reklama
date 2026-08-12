// === ДАННЫЕ КАТАЛОГОВ ===
const demos = {
    icecream: {
        title: "Gelato Studio",
        theme: { accent: "#ec4899", glow: "#f9a8d4", bg: "#fff0f7", class: "theme-icecream" },
        particles: { type: "snow", color: "96, 165, 250", count: 28 },
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
        theme: { accent: "#a9744f", glow: "#e6cbb4", bg: "#150b07", class: "theme-cafe" },
        particles: { type: "beans", color: "198, 152, 110", count: 14 },
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
                subs: ["Суши", "Супы"],
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
                    { name: "Греческий", price: "320 ₽", sub: "Авторские", img: "images/cafe_salad.jpg" },
                ]
            },
            {
                name: "Десерты",
                subs: ["Торты"],
                products: [
                    { name: "Тирамису", price: "280 ₽", sub: "Торты", img: "images/cafe_tiramisu.jpg" },
                ]
            },
            {
                name: "Напитки",
                subs: ["Кофе", "Соки"],
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
        particles: { type: "float", color: "59, 130, 246", count: 25 },
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
        particles: { type: "matrix", color: "6, 182, 212" },
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

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// ==========================================
// ГРАВИТАЦИЯ ОТ ДАТЧИКА НАКЛОНА (АКСЕЛЕРОМЕТР)
// ==========================================
const gravity = { x: 0, y: 1 };
let sensorAttached = false;

function onOrient(e) {
    if (e.beta == null || e.gamma == null) return;
    // sin даёт плавный вектор: телефон вертикально -> вниз, плашмя -> невесомость
    gravity.x = Math.sin(clamp(e.gamma, -90, 90) * Math.PI / 180);
    gravity.y = Math.sin(clamp(e.beta, 0, 180) * Math.PI / 180);
}

function enableSensor() {
    if (sensorAttached) return;
    if (typeof DeviceOrientationEvent === 'undefined') return;
    const attach = () => {
        window.addEventListener('deviceorientation', onOrient);
        sensorAttached = true;
    };
    // iOS требует системный запрос (один раз, при тапе)
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(r => { if (r === 'granted') attach(); })
            .catch(() => {});
    } else {
        attach(); // Android — без разрешений
    }
}

function wrapEdge(p, m = 26) {
    if (p.x < -m) p.x = canvas.width + m;
    if (p.x > canvas.width + m) p.x = -m;
    if (p.y < -m) p.y = canvas.height + m;
    if (p.y > canvas.height + m) p.y = -m;
}

// ==========================================
// СИСТЕМА ЧАСТИЦ С ФИЗИКОЙ НАКЛОНА
// ==========================================
function initParticles(cfg) {
    cancelAnimationFrame(particleAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (cfg.type === 'snow') return snowLoop(cfg);
    if (cfg.type === 'beans') return beansLoop(cfg);
    if (cfg.type === 'matrix') return matrixLoop(cfg);
    floatLoop(cfg);
}

function stopParticles() {
    cancelAnimationFrame(particleAnimation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// --- СНЕЖИНКИ: падают по гравитации, качаются, крутятся ---
function snowLoop(cfg) {
    const flakes = Array.from({ length: cfg.count }, () => makeFlake(true));
    function makeFlake(any) {
        return {
            x: Math.random() * canvas.width,
            y: any ? Math.random() * canvas.height : -20,
            s: Math.random() * 10 + 8,
            vx: 0, vy: Math.random() * 0.5 + 0.3,
            sway: Math.random() * 6.28,
            rot: Math.random() * 3.14,
            vr: (Math.random() - 0.5) * 0.02,
            a: Math.random() * 0.5 + 0.3
        };
    }
    function step() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        flakes.forEach(f => {
            f.vx += gravity.x * 0.04;
            f.vy += gravity.y * 0.04;
            f.vx = clamp(f.vx * 0.99, -3, 3);
            f.vy = clamp(f.vy, -3, 3);
            f.sway += 0.01;
            f.rot += f.vr;
            f.x += f.vx + Math.sin(f.sway) * 0.4;
            f.y += f.vy;
            wrapEdge(f);
            ctx.save();
            ctx.translate(f.x, f.y);
            ctx.rotate(f.rot);
            ctx.font = f.s + 'px serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = `rgba(${cfg.color}, ${f.a})`;
            ctx.fillText('❄\uFE0E', 0, 0);
            ctx.restore();
        });
        particleAnimation = requestAnimationFrame(step);
    }
    step();
}

// --- КОФЕЙНЫЕ ЗЁРНА: всплывают ПРОТИВ гравитации (как аромат) ---
function beansLoop(cfg) {
    const beans = Array.from({ length: cfg.count }, () => makeBean(true));
    function makeBean(any) {
        return {
            x: Math.random() * canvas.width,
            y: any ? Math.random() * canvas.height : canvas.height + 20,
            s: Math.random() * 6 + 4,
            vx: 0, vy: -(Math.random() * 0.4 + 0.2),
            rot: Math.random() * 3.14,
            vr: (Math.random() - 0.5) * 0.01,
            a: Math.random() * 0.4 + 0.15
        };
    }
    function step() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        beans.forEach(b => {
            b.vx -= gravity.x * 0.015;
            b.vy -= gravity.y * 0.015;
            b.vx = clamp(b.vx * 0.99, -1.5, 1.5);
            b.vy = clamp(b.vy, -1.5, 1.5);
            b.rot += b.vr;
            b.x += b.vx;
            b.y += b.vy;
            wrapEdge(b);
            ctx.save();
            ctx.translate(b.x, b.y);
            ctx.rotate(b.rot);
            ctx.strokeStyle = `rgba(${cfg.color}, ${b.a})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.ellipse(0, 0, b.s, b.s * 0.7, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, -b.s * 0.7);
            ctx.quadraticCurveTo(b.s * 0.5, 0, 0, b.s * 0.7);
            ctx.stroke();
            ctx.restore();
        });
        particleAnimation = requestAnimationFrame(step);
    }
    step();
}

// --- МАТРИЦА: скорость и снос зависят от наклона ---
function matrixLoop(cfg) {
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;
    const drops = Array.from({ length: columns }, () => Math.random() * -50);
    const chars = "01アカサタナハマヤラワXYZ<>*+=ﾑｱｳｴｵｶｷｸｹｺ";
    let xOff = 0;
    function step() {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';

        const speed = 0.4 + Math.max(0.15, gravity.y) * 0.8;
        xOff = (xOff + gravity.x * 2 + canvas.width) % canvas.width;

        ctx.font = fontSize + 'px monospace';
        ctx.textAlign = 'left';
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = (i * fontSize + xOff) % canvas.width;
            const y = drops[i] * fontSize;
            ctx.fillStyle = `rgba(${cfg.color}, 0.85)`;
            ctx.fillText(char, x, y);
            if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i] += speed;
        }
        particleAnimation = requestAnimationFrame(step);
    }
    step();
}

// --- ТОЧКИ (ОДЕЖДА): гравитация + отскок от стен ---
function floatLoop(cfg) {
    const dots = Array.from({ length: cfg.count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.5 + 0.2
    }));
    function step() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach(p => {
            p.vx += gravity.x * 0.02;
            p.vy += gravity.y * 0.02;
            p.vx = clamp(p.vx, -2, 2);
            p.vy = clamp(p.vy, -2, 2);
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) { p.x = 0; p.vx *= -0.9; }
            if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -0.9; }
            if (p.y < 0) { p.y = 0; p.vy *= -0.9; }
            if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -0.9; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${cfg.color}, ${p.alpha})`;
            ctx.fill();
        });
        particleAnimation = requestAnimationFrame(step);
    }
    step();
}

// ==========================================
// ТЕМА
// ==========================================
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

// ==========================================
// ОТКРЫТИЕ / ЗАКРЫТИЕ
// ==========================================
function openDemo(key) {
    currentDemo = demos[key];
    currentCatIdx = 0;
    currentSub = "Все";

    enableSensor(); // тап = жест, можно включать датчик
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

// ==========================================
// РЕНДЕР МЕНЮ
// ==========================================
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

// ==========================================
// РЕНДЕР ТОВАРОВ + ЗАГЛУШКА ФОТО
// ==========================================
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
        card.querySelector('img').addEventListener('error', function() {
            this.parentElement.classList.add('no-img');
        });
        miniProducts.appendChild(card);
    });
}

// ==========================================
// EVENT LISTENERS
// ==========================================
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
    if (currentDemo) initParticles(currentDemo.particles);
});

// ==========================================
// SCROLL REVEAL + СКРОЛЛ
// ==========================================
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

// ==========================================
// ПРЕДЗАГРУЗКА ФОТО (фикс: таймаут 6 сек)
// ==========================================
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
        setTimeout(resolve, 6000);
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    await preloadAllImages();
    preloader.classList.add('hidden');
});
