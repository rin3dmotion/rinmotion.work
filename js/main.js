// Initialize slider elements and variables
const slides = document.querySelectorAll('.index-slide');
const prevBtn = document.querySelector('.index-btn-prev');
const nextBtn = document.querySelector('.index-btn-next');
const dotsContainer = document.querySelector('.index-dots');
const slidesWrapper = document.querySelector('.index-slides');
let currentSlide = 0;

// Create navigation dots for slider
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Update slider position and UI
function updateSlider() {
  slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.index-dots div').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
  });

  prevBtn.style.display = currentSlide === 0 ? 'none' : 'block';
  nextBtn.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';

  slides.forEach((slide, index) => {
        if (index === currentSlide) {
            if (!slide.querySelector('.index-slide-info')) {
              const title = slide.dataset.title;
              const link = slide.dataset.link;
              const info = document.createElement('div');
              info.className = 'index-slide-info';
              info.innerHTML = `<div>${title}</div><a href="${link}" data-lang="ViewMore"></a>`; // Убрали статичный текст
              slide.appendChild(info);
              
              // Принудительно обновляем перевод для нового элемента
                const currentLang = localStorage.getItem("selectedLang") || "en";
                window.setLanguage(currentLang);
          }
      } else {
          const info = slide.querySelector('.index-slide-info');
          if (info) info.remove();
      }
  });
}

// Navigate to a specific slide
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Handle previous button click
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

// Handle next button click
nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
    }
});

// Update images for mobile devices
function updateImagesForMobile() {
    const isMobile = window.innerWidth <= 768;
    slides.forEach(slide => {
        const img = slide.querySelector('.index-slide-img');
        const mobileSrc = img.dataset.mobileSrc;
        if (isMobile && mobileSrc) {
            img.src = mobileSrc;
        } else {
            img.src = img.getAttribute('src').replace('-vertical', '-horizontal');
        }
    });
}

// Handle window resize for mobile images
window.addEventListener('resize', updateImagesForMobile);
updateImagesForMobile();
updateSlider();

// Handle wheel events for slider navigation with accumulation
const sliderContainer = document.querySelector('.index-slider');

// Добавляем переменные для отслеживания прокрутки
let wheelTimeout = null;
let wheelDelta = 0;
const WHEEL_THRESHOLD = 150; // Порог для срабатывания прокрутки (можно настроить)

sliderContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    
    // Аккумулируем значение прокрутки
    wheelDelta += Math.abs(event.deltaY);
    
    // Очищаем предыдущий таймаут
    if (wheelTimeout) clearTimeout(wheelTimeout);
    
    // Устанавливаем новый таймаут для сброса аккумулятора
    wheelTimeout = setTimeout(() => {
        wheelDelta = 0;
    }, 200); // Сбрасываем аккумулятор через 200мс
    
    // Проверяем, достигли ли порога прокрутки
    if (wheelDelta >= WHEEL_THRESHOLD) {
        // Сбрасываем аккумулятор
        wheelDelta = 0;
        
        // Определяем направление прокрутки
        if (event.deltaY > 0) {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlider();
            }
        } else if (event.deltaY < 0) {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        }
    }
});

let touchStartX = null;
let touchEndX = null;

// Handle touch start event
sliderContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
});

// Handle touch move event
sliderContainer.addEventListener('touchmove', (event) => {
    touchEndX = event.changedTouches[0].clientX;
});

// Handle touch end event
sliderContainer.addEventListener('touchend', () => {
    if (touchStartX === null || touchEndX === null) {
        return;
    }

    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) { 
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    } else if (deltaX < -50) { 
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlider();
        }
    }

    touchStartX = null;
    touchEndX = null;
});

// Toggle mobile menu on burger icon click
document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".index-burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    burgerIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        mobileMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});

// Add shadow to navbar on scroll
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".block-nav");

    const updateNavbarShadow = () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        const handleScroll = () => {
            const scrollThreshold = isMobile ? 10 : 116;
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add("shadow");
            } else {
                navbar.classList.remove("shadow");
            }
        };

        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll);

        handleScroll();
    };

    updateNavbarShadow();
    window.addEventListener("resize", updateNavbarShadow);
});

// Auto-resize textarea height
document.addEventListener("input", function (event) {
    if (event.target.tagName === "TEXTAREA") {
        const textarea = event.target;
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }
});

// Reset forms on page reload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".block-nav");

    const updateNavbarShadow = () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        // Add or remove shadow based on scroll position
        const handleScroll = () => {
            const scrollThreshold = isMobile ? 10 : 116;
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add("shadow");
            } else {
                navbar.classList.remove("shadow");
            }
        };

        // Ensure event listener is updated on resize
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll);

        handleScroll();
    };

    updateNavbarShadow();
    window.addEventListener("resize", updateNavbarShadow);
});

/**/
const navbar = document.querySelector(".work-block-nav");

// Add or remove shadow on navbar based on scroll position
function handleNavbarShadow() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const scrollThreshold = isMobile ? 10 : 116;

    if (window.scrollY > scrollThreshold) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
}

// Event listeners for navbar shadow update
window.addEventListener("scroll", handleNavbarShadow);
handleNavbarShadow();
window.addEventListener("resize", handleNavbarShadow);

document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".burger-menu svg");
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggle mobile menu on burger icon click
    burgerIcon.addEventListener("click", function (event) {
        event.stopPropagation(); 
        mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});

// Auto-resize textarea based on content
document.addEventListener("input", function (event) {
    if (event.target.tagName === "TEXTAREA") {
        const textarea = event.target;
        textarea.style.height = "auto"; 
        textarea.style.height = textarea.scrollHeight + "px";
    }
});

// Reset all forms before page unload
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};

/**/
