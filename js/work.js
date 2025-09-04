document.addEventListener("DOMContentLoaded", function () { 
            // Language switcher functionality
            const translations = {
                en: {
                    Works: "3D Works",
                    Visuals: "AI Visuals",
                    Contact: "Contact",
                    WizenseGeo: "<strong>Geo by Wizens — a device for telecom specialists, enhancing measurement precision. My goal was to create a 3D animation that transforms technical specs — from waterproofing to tilt compensation — into a clear visual language, making complexity intuitive even for non-experts. </strong> <br><br>Showcase all features without turning it into a manual. I broke the device into core components: data display, top module, camera demonstration, water resistance, tilt compensation — and synchronized them into a cohesive rhythm. The soundtrack isn’t just background noise; its accents align with feature transitions. <br><br><strong>What’s the result?</strong><br>A versatile animation: horizontal for websites/presentations, vertical for social media. Used in 3+ campaigns, the real win is how a simple feature list transforms into a mood-driven narrative that sticks with the audience.",
                    EllisBrooklynSalt: "<strong>The fragrance Salt by Ellis Brooklyn inspired me to create a 3D animation where the warmth of the seaside and the freshness of the salty breeze transformed into a dynamic visual language.</strong><br><br>I immersed myself in the brand’s philosophy to create a style that complements the product rather than competes with it. The texture of the bottle, soft highlights of warm light, the animation of moving stones, and even the soundscape with the whisper of waves — all of this created the atmosphere of a warm beach. <br><br><strong>What’s the result?</strong><br>Through the animation, I didn’t just tell a story about the fragrance — I allowed viewers to feel it. The project resonated with the audience, but its true value lies in becoming a standalone visual story where Salt’s elegance unfolds through the rhythm of waves and the play of light.",                    
                    BloodyG575: "<strong>G575 by Bloody — a gaming headset with design fueled by esports energy. My goal was to create a 3D animation where RGB lighting and bold curves of the headset sync with a dynamic soundtrack, transforming it into a visual spectacle.</strong><br><br>Modeling the headset’s unconventional shape was a challenge — every detail had to mirror the original. I dove into esports aesthetics to ensure the matte texture, RGB effects, and animated elements worked as one cohesive system. Even the soundtrack was custom-made to amplify the motion’s intensity.<br><br><strong>What’s the result?</strong><br>300+ views, but more importantly: the animation deepened the emotional connection to the product. Dynamic visuals and tailored audio highlighted its premium appeal while staying true to the gritty gaming vibe.",
                    WallpaperAbstract: "<strong>Abstract 3D project inspired by the digital aesthetics of Microsoft wallpapers. My goal was to explore the capabilities of a specialized add-on for generating complex geometry, avoiding manual modeling.</strong><br><br>I studied the add-on’s functionality, adjusting parameters to create harmonious forms without artifacts. Optimized the scene by balancing detail and performance, configured soft lighting and materials to emphasize structural depth.<br><br><strong>What’s the result?</strong><br>A clean, minimalist visual with smooth lines and tech-inspired style. The add-on proved its effectiveness for rapidly creating complex objects, and the developed workflow can be adapted to other projects, reducing production time.",
                    MOFIIKeyboard: "<strong>Interactive 3D animation for keyboards by MOFII implements the integration of 3D graphics into a webpage. The goal was to create a keyboard animation synchronized with user actions and optimized for the browser.</strong><br><br>I modeled the keyboard, detailing the keys and textures. Configured materials and lighting for realism, optimized the scene for smooth web performance. Added a soundtrack composed in collaboration with a musician to enhance interaction with the animation.<br><br><strong>What’s the result?</strong><br>A realistic keyboard visualization and hands-on experience in creating 3D models for seamless web integration.",                    
                    SodaCan: "<strong>3D visualization of a Soda Can — a project to practice realism. Goal: model the can in detail, recreate materials (metal, packaging, droplets), create animation and convey the effect of freshness.</strong><br><br>I broke down the object into components: can shape, label texture, droplet physics. Adjusted metal and liquid materials, set up lighting to emphasize volume and highlights. Optimized render settings to balance detail and speed.<br><br><strong>What’s the result?</strong><br>A photorealistic visualization ready for commercial use. Enhanced skills in material and lighting work + a ready-to-use template for future beverage projects.",
                    Santal33: "<strong>Le Labo's Santal 33 is an iconic fragrance, and my task was to create a series of images that perfectly reflect the brand's recognizable aesthetic. Inspired by the clean, raw uniqueness of their Instagram account, I aimed for a product AI visualization in a grunge style, where every detail works to create an authentic Le Labo atmosphere.</strong><br><br>The main challenge was to accurately reproduce the brand's philosophy using generative design tools. After several iterations and careful selection, the best option was chosen, which not only conveys the spirit of Santal 33 but also creates a visual dialogue with the brand’s familiar audience.<br><br><strong>What was the result?</strong><br>The project is aimed at strengthening the emotional connection with the product through its visual representation. The dynamic and thoughtful visualization emphasizes the fragrance's premium quality and uniqueness, while preserving its bold and original character.",
                    Credits2023: "Credits | 2023",
                    Credits2024: "Credits | 2024",
                    Credits2025: "Credits | 2025",
                    Client: "Client:",
                    MotionDesigner1: "3D Motion Designer:",
                    Designer1: "3D Designer:",
                    ArtDirector2: "Art Director, 3D Motion Designer:",
                    ArtDirector3: "Art Director, 3D Motion Designer, Sound Designer:",
                    Promter: "AI Promter:",
                    Composer: "Composer:",
                    Tools: "Tools:",
                    MoreWorks: "More Works",
                    Allrightsreserved: "2025 Rin. All rights reserved."
                },
                ru: {
                    Works: "3D Проекты",
                    Visuals: "ИИ Визуал",
                    Contact: "Контакты",
                    WizenseGeo: "<strong>Geo от Wizens - прибор для специалистов в области телекоммуникаций, повышающий точность измерений. Моей задачей было создать 3D-анимацию, которая превратит технические характеристики — от влагозащиты до компенсации наклона — в понятный язык, где все выглядит логичным даже для новичка.</strong> <br><br>Сложность была в балансе: показать все характеристики устройства, не превратив анимацию в техническую инструкцию. Я разбила устройство на основные компоненты: дисплей с данными, верхний модуль, демонстрация камеры, водонепроницаемость, компенсация наклона — и синхронизировала их в единый ритм. Даже саундтрек здесь не просто фон — его акценты синхронизированы с переходами между демонстрацией функций.  <br><br><strong>Что вышло в итоге? </strong><br>Анимация стала универсальным инструментом: горизонтальный формат — для сайта или презентаций, вертикальный — для соцсетей. Клиент использовал её в 3+ кампаниях, но важнее другое — мне удалось показать, как из простого перечисления функционала можно создать настоящую историю со своим настроением.",
                    EllisBrooklynSalt: "<strong>Аромат Salt от Ellis Brooklyn вдохновил меня на создание 3D-анимации, где его теплота морского побережья и свежесть соленого бриза превратились в динамичный визуальный язык.</strong><br><br>Я погрузилась в философию бренда, чтобы создать стиль, не конкурирующий с продуктом, а дополняющий его. Текстура флакона, мягкие блики теплого света, анимация движения камней и даже звуковое сопровождение с шепотом волн — всё это создало атмосферу теплого пляжа. <br><br> <strong>Что вышло в итоге?</strong><br>С помощью анимации я не просто рассказала об аромате, а позволила его почувствовать. Проект нашёл отклик у аудитории, но его главная ценность — в том, что он стал самостоятельной визуальной историей, где элегантность Salt раскрывается через ритм волн и игру света.",
                    BloodyG575: "<strong>G575 от Bloody — игровая гарнитура, чей дизайн заряжен энергией киберспорта. Моей задачей было создать 3D-анимацию, где демонстрация RGB-подсветки и необычные формы корпуса движутся под динамичный трек, превращая гарнитуру в визуальный перформанс.</strong><br><br>Моделирование необычной формы наушников стало отдельным вызовом — была необходимость сделать каждую деталь максимально приближенной к оригиналу. Я также погрузилась в референсы киберспортивной эстетики, чтобы текстура матового пластика, RGB-подсветка и анимация деталей работали как единый механизм. Даже саундтрек здесь создан специально под проект, чтобы добавить динамики движению.<br><br><strong>Что вышло в итоге?</strong><br>Проект набрал более 300 просмотров — но важнее то, что анимация усилила эмоциональный контакт с продуктом. Динамичная визуализация и продуманный аудиоряд подчеркнули премиальность гарнитуры, сохранив её геймерскую атмосферу.",
                    WallpaperAbstract: "<strong>Абстрактный 3D-проект вдохновлен цифровой эстетикой обоев Microsoft. Моей задачей было исследовать возможности специализированного аддона для генерации сложной геометрии, избегая ручного моделирования.</strong><br><br>Я изучила функционал аддона, подбирая параметры для создания гармоничных форм без артефактов. Оптимизировала сцену: баланс между детализацией и производительностью, настроила мягкое освещение и материалы, подчеркивающие глубину структур.  <br><br><strong>Что вышло в итоге?</strong><br>Чистый минималистичный визуал с плавными линиями и технологичным стилем. Аддон доказал свою эффективность для быстрого создания сложных объектов, а готовый процесс можно адаптировать под другие проекты, сокращая время на производство.  ",
                    MOFIIKeyboard: "<strong>Интерактивная 3D-анимация для клавиатур от MOFII реализует идею интеграции 3D-графики в веб-страницу. Цель — создать анимацию клавиатуры, синхронизированную с действиями пользователя, и оптимизировать её для браузера.</strong><br><br> Я смоделировала клавиатуру, детально проработав кнопки и текстуры. Настроила материалы и освещение для реалистичности, оптимизировала сцену для плавной работы в вебе. Добавила саундтрек, созданный совместно с композитором, чтобы усилить взаимодействие с анимацией.<br><br> <strong>Что вышло в итоге?</strong><br>Реалистичная визуализация клавиатуры и практический опыт создания 3D-моделей для интеграции в веб-проекты.",
                    SodaCan: "<strong>3D-визуализация Soda Can — проект для отработки реализма. Цель: детально смоделировать банку, воссоздать материалы (металл, упаковка, капли), сделать анимацию и передать эффект свежести.</strong><br><br>Я разобрала объект на компоненты: форма банки, текстура этикетки, физика капель. Настраивала материалы для металла и жидкости, подобрала освещение, подчеркивающее объём и блики. Рендер оптимизирован для баланса детализации и скорости.<br><br> <strong>Что вышло в итоге?</strong><br>Фотореалистичная визуализация, которую можно использовать в рекламе. Прокачанные навыки работы с материалами и светом + готовый шаблон для будущих проектов с напитками.",
                    Santal33: "<strong>Santal 33 от Le Labo - культовый аромат бренда и моей задачей было создать серию изображений, которые бы безупречно отражали узнаваемую эстетику. Вдохновляясь лаконичностью и уникальностью их Instagram-аккаунта, я стремилась к продуктовой AI-визуализации в стиле гранж, где каждая деталь работает на создание подлинной атмосферы Le Labo.</strong><br><br>Ключевым вызовом стало максимально точное воспроизведение философии бренда средствами генеративного дизайна. В результате нескольких итераций и тщательного отбора был выбран лучший вариант, который не только передаёт дух Santal 33, но и создаёт визуальный диалог с уже знакомой аудиторией бренда.<br><br><strong>Что вышло в итоге?</strong><br>Проект нацелен на усиление эмоционального контакта с продуктом через его визуальное представление. Динамичная и продуманная визуализация подчеркивает премиальность и уникальность аромата, сохраняя его дерзкий и самобытный характер. ",
                    Credits2023: "Информация | 2023",
                    Credits2024: "Информация | 2024",
                    Credits2025: "Информация | 2025",
                    Client: "Клиент:",
                    Noncomercial: "Некомерческий проект",
                    MotionDesigner1: "3D Моушн Дизайнер:",
                    Designer1: "3D Дизайнер:",
                    ArtDirector2: "Арт Директор, 3D Моушн Дизайнер:",
                    ArtDirector3: "Арт Директор, 3D Моушн Дизайнер, Саунд Дизайнер:",
                    Promter: "ИИ Промтер:",
                    Composer: "Композитор:",
                    Tools: "Инструменты:",
                    MoreWorks: "Другие Проекты",
                    Allrightsreserved: "2025 Rin. Все права защищены."
                }
            };
    
            // Set the language and update the page content
            function setLanguage(lang) {
                localStorage.setItem("selectedLang", lang);
    
                document.querySelectorAll("[data-lang]").forEach((el) => {
                    const key = el.getAttribute("data-lang");
                    if (translations[lang][key]) {
                        el.innerHTML = translations[lang][key];
                    }
                });
    
                document.querySelectorAll(".lang-switcher a").forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("data-lang") === lang);
                });
            }
    
            // Handle language switcher clicks
            document.querySelectorAll(".lang-switcher a").forEach((link) => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    setLanguage(this.getAttribute("data-lang"));
                });
            });
    
            // Set initial language from localStorage or default to English
            setLanguage(localStorage.getItem("selectedLang") || "en");
});

document.addEventListener("DOMContentLoaded", function () {
    // Initialize GLightbox
    const lightbox = GLightbox({
        selector: ".gallery-item",
        touchNavigation: true,
        loop: false,
        autoplayVideos: false,
    });

    // Handle .gallery-link clicks
    document.querySelectorAll(".gallery-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href");
            const galleryItem = document.querySelector(`.gallery-item[href="${target}"]`);
            if (galleryItem) {
                galleryItem.click();
            }
        });
    });

    // Handle .gallery-item-wrapper clicks
    document.querySelectorAll(".gallery-item-wrapper").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const link = this.querySelector(".gallery-item");
            if (link) {
                link.click();
            }
        });
    });

    // Scroll navigation for lightbox
    let isScrolling = false;
    const scrollDelay = 600; // Transition delay (0.4s)

    document.addEventListener("wheel", function (event) {
        // Check if lightbox is open
        const isLightboxOpen = document.querySelector(".glightbox-open") !== null;
        if (!isLightboxOpen) return;

        // Check if cursor is over lightbox
        const lightboxContainer = document.querySelector(".glightbox-container");
        if (!lightboxContainer || !lightboxContainer.contains(event.target)) return;

        // Prevent multiple scroll triggers
        if (isScrolling) return;
        isScrolling = true;

        // Determine scroll direction
        const delta = Math.sign(event.deltaY); // 1 (down) or -1 (up)

        // Find navigation buttons
        const nextButton = document.querySelector(".gnext");
        const prevButton = document.querySelector(".gprev");

        // Navigate based on scroll direction
        if (delta > 0 && nextButton) {
            nextButton.click(); // Next slide
        } else if (delta < 0 && prevButton) {
            prevButton.click(); // Previous slide
        }

        // Delay to prevent rapid scrolling
        setTimeout(() => {
            isScrolling = false;
        }, scrollDelay);
    });
});

document.addEventListener("DOMContentLoaded", function() {

    // // Handle navbar shadow effect based on scroll position
    // const navbar = document.querySelector(".index-block-nav");
    // if (navbar) {
    //     function handleNavbarShadow() {
    //         const isMobile = window.matchMedia("(max-width: 768px)").matches;
    //         const scrollThreshold = isMobile ? 10 : 116;

    //         if (window.scrollY > scrollThreshold) {
    //             navbar.classList.add("shadow");
    //         } else {
    //             navbar.classList.remove("shadow");
    //         }
    //     }

    //     window.addEventListener("scroll", handleNavbarShadow);
    //     handleNavbarShadow();
    //     window.addEventListener("resize", handleNavbarShadow);
    // }

    // Toggle mobile menu on burger icon click
    const burgerIcon = document.querySelector(".burger-menu svg");
    const mobileMenu = document.getElementById("mobile-menu");

    if (burgerIcon && mobileMenu) {
        burgerIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileMenu.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!mobileMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                mobileMenu.classList.remove("active");
            }
        });
    }

    // Auto-resize textarea based on content
    document.addEventListener("input", function (event) {
        if (event.target.tagName === "TEXTAREA") {
            const textarea = event.target;
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        }
    });

// Horizontal scrolling for "More Works" section
const moreWorkGallery = document.querySelector('.more-work-gallery');
const moreWorkPrevBtn = document.querySelector('.more-work-prev');
const moreWorkNextBtn = document.querySelector('.more-work-next');

if (moreWorkGallery && moreWorkPrevBtn && moreWorkNextBtn) {
    // Click handlers for buttons
    moreWorkPrevBtn.addEventListener('click', () => {
        moreWorkGallery.scrollBy({ left: -moreWorkGallery.offsetWidth * 0.5, behavior: 'smooth' });
    });

    moreWorkNextBtn.addEventListener('click', () => {
        moreWorkGallery.scrollBy({ left: moreWorkGallery.offsetWidth * 0.5, behavior: 'smooth' });
    });

    // Scroll handler for wheel events
    let isScrolling = false;
    const scrollDelay = 200; // Delay in milliseconds (0.2 seconds)
    const scrollStep = 300; // Scroll distance per wheel event

    moreWorkGallery.addEventListener('wheel', function (event) {
        event.preventDefault(); // Prevent default vertical scrolling

        if (isScrolling) return; // Prevent multiple scroll triggers
        isScrolling = true;

        // Determine scroll direction
        const delta = Math.sign(event.deltaY); // 1 (down) or -1 (up)

        // Scroll horizontally based on wheel direction
        if (delta > 0) {
            moreWorkGallery.scrollBy({ left: scrollStep, behavior: 'smooth' }); // Scroll right
        } else if (delta < 0) {
            moreWorkGallery.scrollBy({ left: -scrollStep, behavior: 'smooth' }); // Scroll left
        }

        // Reset the scrolling flag after the delay
        setTimeout(() => {
            isScrolling = false;
        }, scrollDelay);
    });

    // Click handler for gallery items
    const galleryItems = document.querySelectorAll('.more-work-gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const href = item.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });
} else {
    console.error("One or more elements for the 'More Works' gallery were not found.");
}
});




