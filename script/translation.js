const translations = {
    fr: {
        // Commun à toutes les pages
        "hero-title": "LOIC Y. NGASSA",
        "hero-subtitle": "Futur Data scientist, passionné par les nouvelles technologies.",
        "footer-text": "© 2025 — Conçu avec intention",
        "menu-about": "À propos",
        "menu-work": "Projets",
        "menu-other": "Autres",
        "menu-contact": "Contact",

        // Page Contact
        "contact-title": "Contactez moi",
        "contact-name": "Nom",
        "contact-email": "Email",
        "contact-message": "Message",
        "contact-submit": "Envoyer",

        // Page About
        "about-philosophy": "Philosophie",
        "about-journey": "Parcours",
        "about-skills": "Domaines de compétences",
        "about-education1": "Ingénierie informatique · INSA HdF",
        "about-education2": "Classes préparatoires · IUCSJD",
        "about-education3": "Baccalauréat scientifique · LBNB",

        // Page Work
        "work-technologies": "Technologies",
        "work-internships": "Stages",
        "work-projects": "Projets",
        "work-certifications": "Certifications",
        
        "data-science-title": "Data science",
        "data-science-desc": "Maîtrise des technologies clés pour la data science et l'analyse de données.",
        
        "web-dev-title": "Développement web",
        "web-dev-desc": "Maîtrise des technologies clés pour le développement web.",
        
        "cloud-title": "Cloud Computing",
        "cloud-desc": "Maîtrise des technologies clés pour le cloud computing.",
        
        "devops-title": "DevOps",
        "devops-desc": "Maîtrise des technologies clés pour le DevOps.",
        
        "blockchain-title": "Blockchain/Web3",
        "blockchain-desc": "Maîtrise des technologies clés pour le développement de solutions Blockchain et Web3.",

        // Page Other
        "other-commitments": "Engagements",
        "other-events": "Salon",
        "other-sports": "Sport/Autres",
        
        "civic-service-title": "Service Civique",
        "civic-service-org": "EA Le Sextant",
        "civic-service-desc": "Agir pour les personnes en situation de handicap...",
        "civic-service-date": "Avril 2025-Septembre 2025",
        
        "mentoring-title": "Mentorat",
        "mentoring-org": "AFEV",
        "mentoring-desc": "Accompagner un jeune à travers des échanges réguliers...",
        "mentoring-date": "2023-2024"
    },
    en: {
        // Common to all pages
        "hero-title": "LOIC Y. NGASSA",
        "hero-subtitle": "Future Data Scientist, passionate about new technologies.",
        "footer-text": "© 2025 — Crafted with intention",
        "menu-about": "About",
        "menu-work": "Work",
        "menu-other": "Other",
        "menu-contact": "Contact",

        // Contact Page
        "contact-title": "Contact me",
        "contact-name": "Name",
        "contact-email": "Email",
        "contact-message": "Message",
        "contact-submit": "Send",

        // About Page
        "about-philosophy": "Philosophy",
        "about-journey": "Journey",
        "about-skills": "Skills",
        "about-education1": "Computer Engineering · INSA HdF",
        "about-education2": "Preparatory classes · IUCSJD",
        "about-education3": "Scientific Baccalaureate · LBNB",

        // Work Page
        "work-technologies": "Technologies",
        "work-internships": "Internships",
        "work-projects": "Projects",
        "work-certifications": "Certifications",
        
        "data-science-title": "Data science",
        "data-science-desc": "Mastery of key technologies for data science...",
        
        "web-dev-title": "Web development",
        "web-dev-desc": "Mastery of key technologies for web development...",
        
        "cloud-title": "Cloud Computing",
        "cloud-desc": "Mastery of key technologies for cloud computing...",
        
        "devops-title": "DevOps",
        "devops-desc": "Mastery of key technologies for DevOps...",
        
        "blockchain-title": "Blockchain/Web3",
        "blockchain-desc": "Mastery of key technologies for Blockchain...",

        // Other Page
        "other-commitments": "Commitments",
        "other-events": "Events",
        "other-sports": "Sports/Others",
        
        "civic-service-title": "Civic Service",
        "civic-service-org": "EA Le Sextant",
        "civic-service-desc": "Acting for people with disabilities...",
        "civic-service-date": "April 2025-September 2025",
        
        "mentoring-title": "Mentoring",
        "mentoring-org": "AFEV",
        "mentoring-desc": "Supporting a young person through...",
        "mentoring-date": "2023-2024"
    }
};

function updateContent(lang) {
    // Common elements
    updateElement('.hero h1', 'hero-title', lang);
    updateElement('.hero p', 'hero-subtitle', lang);
    updateElement('footer p', 'footer-text', lang);

    // Navigation menu
    updateAllElements('.nav-links a', [
        'menu-about', 'menu-work', 'menu-other', 'menu-contact'
    ], lang);

    // Contact Page
    if (document.querySelector('.contact-title')) {
        updateElement('.contact-title', 'contact-title', lang);
        updateElement('label[for="name"]', 'contact-name', lang);
        updateElement('label[for="email"]', 'contact-email', lang);
        updateElement('label[for="message"]', 'contact-message', lang);
        updateElement('.submit-btn span', 'contact-submit', lang);
    }

    // About Page
    if (document.querySelector('.about-container')) {
        updateElement('h2:nth-of-type(1)', 'about-philosophy', lang, true);
        updateElement('h2:nth-of-type(2)', 'about-journey', lang, true);
        updateElement('h2:nth-of-type(3)', 'about-skills', lang, true);
        
        const educationItems = document.querySelectorAll('.timeline-content p');
        if (educationItems.length >= 3) {
            educationItems[0].textContent = translations[lang]["about-education1"];
            educationItems[1].textContent = translations[lang]["about-education2"];
            educationItems[2].textContent = translations[lang]["about-education3"];
        }
    }

    // Work Page
    if (document.querySelector('.work-container')) {
        updateAllElements('.nav-item button', [
            'work-technologies', 'work-internships', 'work-projects', 'work-certifications'
        ], lang);
        
        // Update project cards content here...
    }

    // Other Page
    if (document.querySelector('.tab-content-container')) {
        updateAllElements('.sub-nav-link', [
            'other-commitments', 'other-events', 'other-sports'
        ], lang);
        
        // Update content cards here...
    }

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    localStorage.setItem('preferredLang', lang);
}

// Helper functions
function updateElement(selector, key, lang, keepHtml = false) {
    const element = document.querySelector(selector);
    if (element) {
        if (keepHtml) {
            const span = element.querySelector('span');
            if (span) {
                element.innerHTML = `${span.outerHTML} ${translations[lang][key]}`;
            } else {
                element.textContent = translations[lang][key];
            }
        } else {
            element.textContent = translations[lang][key];
        }
    }
}

function updateAllElements(selector, keys, lang) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        if (elements.length === keys.length && translations[lang][keys[index]]) {
            element.textContent = translations[lang][keys[index]];
        }
    });
}