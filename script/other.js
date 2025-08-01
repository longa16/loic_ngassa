document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.sub-nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const tabId = this.dataset.tab + '-content';
            document.getElementById(tabId).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Données des carousels par onglet
    const carouselData = {
        'design-content': [
            { img: 'assets/service-civique1.jpg', caption: 'Atelier de formation' },
            { img: 'https://lejour.cm/wp-content/uploads/2024/05/IMG-20240531-WA0002-1280x853.jpg', caption: 'Stand MBOA Paris'},
            { img: 'https://medias.objectifgard.com/api/v1/images/view/683014953fdc091d930edbe8/article/image.jpg', caption: 'mentorat afev' },
            { img: 'assets/service-civique2.png', caption: 'Newsletter' },
            { img: 'assets/Mboa-Paris.webp', caption: 'MBOA Paris 2024' },
        ],
        'engineering-content': [
            { img: 'https://media.licdn.com/dms/image/v2/D4E22AQGAsQKzPb2cFQ/feedshare-shrink_2048_1536/B4EZdaGZpzH0Ao-/0/1749563319245?e=1756944000&v=beta&t=0NUc8JbT2IjkK657Q_RcWB3E7rPgfwa955pNGfzsSPs', caption: 'ICMAIE 2025"' },
            { img: 'assets/conference1.jpg', caption: 'VivaTech 2025 "Tesla Optimus"' },
            { img: 'https://media.licdn.com/dms/image/v2/D4E22AQEXJtLah3OXfQ/feedshare-shrink_2048_1536/B4EZdaGZpuHgAo-/0/1749563319542?e=1756944000&v=beta&t=87pu-JIK_fKFREuisoPserlHhsv5ojqA_F48iobFk-8', caption: 'ICMAIE 2025"' },
            { img: 'https://media.licdn.com/dms/image/v2/D4E12AQGqqNSP9rLIfw/article-cover_image-shrink_600_2000/B4EZePM7W4G4AU-/0/1750454222025?e=1759363200&v=beta&t=1smpTsSkIKe_pQORJpreh1i2t2zIFoX22JO_iJb6P-c', caption: 'VivaTech 2025' },
            { img: 'assets/conference2.jpg', caption: 'Prototype fusée' }
        ],
        'photography-content': [
            { img: 'assets/sport1.png', caption: 'Marathon 2024' },
            { img: 'https://media.sudouest.fr/14316293/1000x500/capture.jpg?v=1678111233', caption: 'Match de basketball' },
        ],
    };

    // Initialisation des carousels
    function initCarousels() {
        Object.keys(carouselData).forEach(tabId => {
            const carousel = document.querySelector(`#${tabId} .experience-carousel`);
            if (!carousel) return;

            const track = carousel.querySelector('.carousel-track');
            const dotsContainer = carousel.querySelector('.carousel-dots');
            
            // Création des slides
            carouselData[tabId].forEach((item, index) => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.innerHTML = `
                    <img src="${item.img}" alt="Experience illustration">
                    <div class="carousel-caption">${item.caption}</div>
                `;
                track.appendChild(slide);

                // Création des dots
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                dot.dataset.index = index;
                dotsContainer.appendChild(dot);
            });

            // Gestion des événements
            setupCarouselControls(carousel);
        });
    }

    function setupCarouselControls(carousel) {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        
        let currentIndex = 0;
        
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.dataset.index);
                updateCarousel();
            });
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });
        
        // Initialisation
        dots[0]?.classList.add('active');
    }

    // Initialiser les carousels lorsque l'onglet est actif
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.tab-content.active .experience-carousel').forEach(carousel => {
            if (!carousel.dataset.initialized) {
                setupCarouselControls(carousel);
                carousel.dataset.initialized = 'true';
            }
        });
    });
    
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
    
    initCarousels();
});
