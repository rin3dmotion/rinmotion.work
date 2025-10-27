document.addEventListener("DOMContentLoaded", function () { 
            // Language switcher functionality
            const translations = {
                en: {
                    Works: "Works",
                    Visuals: "AI Visuals",
                    Contact: "Contact",
                    WizenseGeo: "Geo by Wizens is a telecommunications device with extensive functionality. The requirement was to transform its dry list of technical specifications into an intuitive, logical visual language accessible to a broad audience. <br><br>The key challenge lay in finding the balance between impeccable technical accuracy and maximum clarity. My strategy was to logically segment the device into functional modules and present their operation in a unified, synchronized, and precise rhythm.",
                    EllisBrooklynSalt: "Salt by Ellis Brooklyn is a fragrance whose warmth of the seaside and freshness of the salty breeze needed to be transformed into a tangible video clip.<br><br>The core strategy was sensory augmentation. I immersed myself in the brand's philosophy to create a style that reveals the fragrance through atmosphere: soft reflections of warm light, animated movement of stones, and the tactile texture of the bottle were synchronized with the meditative sound of waves.",                    
                    BloodyG575: "G575 by Bloody — a headset with an aggressive, esports-driven design. My challenge was to avoid dull, choppy animations and craft a visual experience that fully conveys the product's energy and deeply resonates with the target audience.<br><br> As the core strategy, I synchronized dynamic camera movements with an edgy, bold soundtrack to create a single, energized animation that provokes a powerful emotional response.",
                    WallpaperAbstract: "Abstract 3D project inspired by the digital aesthetics of Microsoft wallpapers. My goal was to explore the capabilities of a specialized add-on for generating complex geometry, avoiding manual modeling.<br><br>I studied the add-on’s functionality, adjusting parameters to create harmonious forms without artifacts. Optimized the scene by balancing detail and performance, configured soft lighting and materials to emphasize structural depth.",
                    MOFIIKeyboard: "Interactive 3D animation for MOFII keyboards implements the idea of integrating 3D graphics into a web page. The goal is to create keyboard animation synchronized with user actions, and to beautifully showcase the product's functionality and advantages.<br><br>The core strategy was sensory augmentation. I modeled the keyboard, detailing every button and texture, and adjusted the materials and lighting for maximum realism. To enhance the interaction with the animation, a soundtrack, created in collaboration with a composer, was added.",                    
                    SodaCan: "3D Visualization of a Soda Can is a refreshing natural drink in convenient packaging. The goal of the project was to model the can in detail, recreate materials (metal, packaging, droplets), create animation, and convey the effect of freshness.<br><br>My task was to transform the sensation of a cool, refreshing soda into a tangible 3D object. I broke down the object into components: the can's shape, the label's texture, and, most importantly, the physics of the droplets. I meticulously configured the materials for the metal and liquid and selected lighting that emphasizes volume and reflections.",
                    Santal33: "Santal 33 by Le Labo is the brand's iconic fragrance, and my task was to create a series of images that perfectly reflect its recognizable aesthetic. Inspired by the minimalism and unique character of their Instagram account, I aimed for a product AI visualization in a grunge style, where every detail works to create an authentic Le Labo atmosphere.<br><br>The core strategy was the most accurate reproduction of the brand's philosophy using generative design tools. The bespoke and thoughtful visualization emphasizes the premium nature and uniqueness of the fragrance, while preserving its bold and independent character.",
                    TheBodyCream: "My task was to convey the essence of the premium product, Augustinus Bader The Body Cream, through a series of visual images. I aimed to create a visual identity that would perfectly fit the brand's golden aesthetic and atmosphere.<br><br>The core strategy was the transformation of the product into a work of art using generative AI tools. I immersed myself in Augustinus Bader's signature style, creating each image with the goal of conveying a sense of luxury, emphasizing the product's exclusivity, and strengthening the emotional connection with the audience.",
                    TattooLiner: "I aimed to recreate the gothic style of KVD Tattoo Liner, which would perfectly reflect the brand's aesthetic.<br><br>The core strategy was the transformation of the product into a symbol of self-expression using generative AI tools. I immersed myself in the world of KVD Beauty, where dark shades, mystique, and sharp lines merge to reflect the product's spirit.",
                    SoothingSerum: "Maria Nila Soothing Serum is a gentle product created for harmony and skin care. I aimed to create a visual identity that would perfectly reflect the brand's soft and bright aesthetic.<br><br>The core strategy was the transformation of the product into a visual embodiment of tenderness using generative AI tools. I immersed myself in the world of Maria Nila, where gentle hues and natural motifs blend into a single whole.",
                    GlossStick: "Revolution Beauty Gloss Stick is a cherry-flavored product that needed its appetizing and juicy character emphasized.<br><br>The core strategy was sensory augmentation and creating a strong flavor association using generative AI tools. I used AI to combine the world of cosmetics and a cherry-chocolate cake to make the visual unusual and appetizing.",
                    REM_glowStick: "Glow Stick by REM is an unusual and vibrant product that required a suitable visual identity.<br><br>The core strategy was the transformation of the product into a symbol of self-expression using generative AI tools. I immersed myself in the world of KVD Beauty, where dark shades, cyberpunk, and sharp lines merge to reflect the product's spirit.",
                    Credits2023: "Credits | 2023",
                    Credits2024: "Credits | 2024",
                    Credits2025: "Credits | 2025",
                    Client: "Client:",
                    MotionDesigner1: "Motion Designer:",
                    Designer1: "3D Designer:",
                    ArtDirector2: "Motion Designer:",
                    ArtDirector3: "Motion Designer, Sound Designer:",
                    Prompter: "AI Prompter:",
                    Composer: "Composer:",
                    Tools: "Tools:",
                    MoreWorks: "More Works",
                    Allrightsreserved: "2025 Rin. All rights reserved."
                },
                ru: {
                    Works: "Проекты",
                    Visuals: "ИИ Визуал",
                    Contact: "Контакты",
                    WizenseGeo: "Geo от Wizens — телекоммуникационный прибор с обширным функционалом. Требовалось трансформировать его сухой перечень технических характеристик в интуитивно понятный и логичный визуальный язык, доступный широкой аудитории.<br><br> Ключевой вызов состоял в поиске баланса между безупречной технической точностью и максимальной наглядностью. Моя стратегия — логически разделить прибор на функциональные модули и представить их работу в едином, синхронизированном и четком ритме.",
                    EllisBrooklynSalt: "Salt от Ellis Brooklyn — аромат, в которои нужно было трансформировать теплоту морского побережья и свежесть соленого бриза в осязаемый видео ролик. <br><br> Ключевая стратегия — сенсорное дополнение. Я погрузилась в философию бренда, чтобы создать стиль, который раскрывает аромат через атмосферу: мягкие блики теплого света, анимация движения камней и тактильная текстура флакона были синхронизированы с медитативным звуком волн.",
                    BloodyG575: "G575 от Bloody — наушники с агрессивным, киберспортивным дизайном. Моя задача состояла в том, чтобы избежать скучных, нестабильных анимаций и создать видео, которое в полной мере передаст энергию продукта и будет максимально близок к целевой аудитории. <br><br> В качестве основной стратегии я синхронизировала динамичные движения камеры и дерзкий саундтрек, чтобы создать единую заряженную анимацию, вызывающую сильный эмоциональный отклик.",
                    WallpaperAbstract: "Абстрактный 3D-проект вдохновлен цифровой эстетикой обоев Microsoft. Моей задачей было исследовать возможности специализированного аддона для генерации сложной геометрии, избегая ручного моделирования.<br><br>Я изучила функционал аддона, подбирая параметры для создания гармоничных форм без артефактов. Оптимизировала сцену: баланс между детализацией и производительностью, настроила мягкое освещение и материалы, подчеркивающие глубину структур.",
                    MOFIIKeyboard: "Интерактивная 3D-анимация для клавиатур MOFII реализует идею интеграции 3D-графики в веб-страницу. Цель состоит в том, чтобы создать анимацию клавиатуры, синхронизированную с действиями пользователя, и красиво продемонстрировать функциональность и преимущества продукта.<br><br>Ключевая стратегия — сенсорное дополнение. Я смоделировала клавиатуру, детально проработав каждую кнопку и текстуру, а также настроила материалы и освещение для максимальной реалистичности. Для усиления взаимодействия с анимацией был добавлен саундтрек, созданный совместно с композитором.",
                    SodaCan: "3D-визуализация Soda Can — освежающий натуральный напиток в удобной упаковке. Целью проекта стало детально смоделировать банку, воссоздать материалы (металл, упаковка, капли), сделать анимацию и передать эффект свежести.<br><br>Моей задачей было трансформировать ощущение прохладной, освежающей газировки в осязаемый 3D-объект. Я разобрала объект на компоненты: форма банки, текстура этикетки и, главное, физика капель. Тщательно настроила материалы для металла и жидкости, а также подобрала освещение, подчеркивающее объём и блики. ",
                    Santal33: "Santal 33 от Le Labo - культовый аромат бренда и моей задачей было создать серию изображений, которые бы безупречно отражали узнаваемую эстетику. Вдохновляясь лаконичностью и уникальностью их Instagram-аккаунта, я стремилась к продуктовой AI-визуализации в стиле гранж, где каждая деталь работает на создание подлинной атмосферы Le Labo.<br><br>Ключевая стратегия — максимально точное воспроизведение философии бренда средствами генеративного дизайна. Индивидуальная и продуманная визуализация подчеркивает премиальность и уникальность аромата, сохраняя его дерзкий и самобытный характер.",
                    TheBodyCream: "Перед мной стояла задача передать суть премиального продукта Augustinus Bader The Body Cream через серию визуальных образов. Я стремилась создать визуал, который идеально впишется в золотистую эстетику бренда и его атмосферу.<br><br>Ключевая стратегия — трансформация продукта в предмет искусства средствами генеративного ИИ. Я погрузилась в фирменный стиль Augustinus Bader, создавая каждый образ с целью передать ощущение роскоши, подчеркнуть эксклюзивность продукта и усилить эмоциональную связь с аудиторией. ",
                    TattooLiner: "Я стремилась воссоздать готический стиль KVD Tattoo Liner, который идеально отразит эстетику бренда.<br><br>Ключевая стратегия — трансформация продукта в символ самовыражения средствами генеративного ИИ. Я погрузилась в мир KVD Beauty, где тёмные оттенки, мистика и чёткие линии сливаются, чтобы отразить дух продукта.",
                    SoothingSerum: "Maria Nila Soothing Serum — нежный продукт, созданный для гармонии и ухода за кожей. Я стремилась создать визуал, который идеально отразит мягкую и светлую эстетику бренда.<br><br>Ключевая стратегия — трансформация продукта в визуальное воплощение нежности средствами генеративного ИИ. Я погрузилась в мир Maria Nila, где нежные оттенки и натуральные мотивы сливаются в единое целое. ",
                    GlossStick: "Revolution Beauty Gloss Stick - продукт со вкусом вишни, который требовал подчеркнуть его аппетитный и сочный характер.<br><br>Ключевая стратегия — сенсорное дополнение и создание сильной вкусовой ассоциации средствами генеративного ИИ. Я использовала ИИ для объединения мира косметики и вишнево-шоколадного торта, чтобы сделать визуал необычным и аппетитным.",
                    REM_glowStick: "Glow Stick от REM — необычный и яркий продукт, который нуждался в подходящем визуале.<br><br>Ключевая стратегия — трансформация продукта в символ самовыражения средствами генеративного ИИ. Я погрузилась в мир KVD Beauty, где тёмные оттенки, киберпанк и чёткие линии сливаются, чтобы отразить дух продукта.",
                    Credits2023: "Информация | 2023",
                    Credits2024: "Информация | 2024",
                    Credits2025: "Информация | 2025",
                    Client: "Клиент:",
                    Noncomercial: "Некомерческий проект",
                    MotionDesigner1: "3D Моушн Дизайнер:",
                    Designer1: "3D Дизайнер:",
                    ArtDirector2: "3D Моушн Дизайнер:",
                    ArtDirector3: "3D Моушн Дизайнер, Саунд Дизайнер:",
                    Prompter: "ИИ Промтер:",
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


});

// Загрузка галереи
document.addEventListener('DOMContentLoaded', function() {
    fetch('../gallery-template.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('gallery-container').innerHTML = data;
            initGallery(); // Инициализируйте функционал галереи после загрузки
        })
        .catch(error => console.error('Error loading gallery:', error));
});

// Функция для инициализации галереи
function initGallery() {
    // Весь ваш код для галереи должен быть здесь!
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
        const scrollDelay = 200;
        const scrollStep = 300;

        moreWorkGallery.addEventListener('wheel', function (event) {
            event.preventDefault();

            if (isScrolling) return;
            isScrolling = true;

            const delta = Math.sign(event.deltaY);

            if (delta > 0) {
                moreWorkGallery.scrollBy({ left: scrollStep, behavior: 'smooth' });
            } else if (delta < 0) {
                moreWorkGallery.scrollBy({ left: -scrollStep, behavior: 'smooth' });
            }

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
        console.error("Gallery elements not found");
    }
}


