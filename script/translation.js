const translations = {
    fr: {
        "hero-title": "LOIC Y. NGASSA",
        "hero-subtitle": "Futur Data scientist, passionné par les nouvelles technologies.",
        "footer-text": "© 2025 — Conçu avec intention",
        "menu-about": "À propos",
        "menu-work": "Projets",
        "menu-other": "Autres",
        "menu-contact": "Contact",
        "contact-title": "Contactez moi",
        "contact-name": "Nom",
        "contact-email": "Email",
        "contact-message": "Message",
        "contact-submit": "Envoyer",
        "about-philosophy": "Philosophie",
        "about-journey": "Parcours",
        "about-skills": "Domaines de compétences",
        "about-education1": "Ingénierie informatique · INSA HdF",
        "about-education2": "Classes préparatoires · IUCSJD",
        "about-education3": "Baccalauréat scientifique · LBNB"
    },
    en: {
        "hero-title": "LOIC Y. NGASSA",
        "hero-subtitle": "Future Data Scientist, passionate about new technologies.",
        "footer-text": "© 2025 — Crafted with intention",
        "menu-about": "About",
        "menu-work": "Work",
        "menu-other": "Other",
        "menu-contact": "Contact",
        "contact-title": "Contact me",
        "contact-name": "Name",
        "contact-email": "Email",
        "contact-message": "Message",
        "contact-submit": "Send",
        "about-philosophy": "Philosophy",
        "about-journey": "Journey",
        "about-skills": "Skills",
        "about-education1": "Computer Engineering · INSA HdF",
        "about-education2": "Preparatory classes · IUCSJD",
        "about-education3": "Scientific Baccalaureate · LBNB"
    }
};

function updateContent(lang) {
    // Met à jour le contenu principal 
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const footerText = document.querySelector('footer p');
    
    if (heroTitle) heroTitle.textContent = translations[lang]["hero-title"];
    if (heroSubtitle) heroSubtitle.textContent = translations[lang]["hero-subtitle"];
    if (footerText) footerText.textContent = translations[lang]["footer-text"];
    
    // Met à jour le menu si existant
    const menuLinks = document.querySelectorAll('.nav-links a');
    if (menuLinks.length > 0) {
        menuLinks[0].textContent = translations[lang]["menu-about"];
        menuLinks[1].textContent = translations[lang]["menu-work"];
        menuLinks[2].textContent = translations[lang]["menu-other"];
        menuLinks[3].textContent = translations[lang]["menu-contact"];
    }
    
    // Met à jour les éléments de contact 
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) {
        contactTitle.textContent = translations[lang]["contact-title"];
        
        const nameLabel = document.querySelector('label[for="name"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const messageLabel = document.querySelector('label[for="message"]');
        const submitBtn = document.querySelector('.submit-btn span');
        
        if (nameLabel) nameLabel.textContent = translations[lang]["contact-name"];
        if (emailLabel) emailLabel.textContent = translations[lang]["contact-email"];
        if (messageLabel) messageLabel.textContent = translations[lang]["contact-message"];
        if (submitBtn) submitBtn.textContent = translations[lang]["contact-submit"];
    }

    // Met à jour les éléments "About me"
    const aboutContainer = document.querySelector('.about-container');
    if (aboutContainer) {
        const philosophyTitle = aboutContainer.querySelector('h2:nth-of-type(1)');
        const journeyTitle = aboutContainer.querySelector('h2:nth-of-type(2)');
        const skillsTitle = aboutContainer.querySelector('h2:nth-of-type(3)');
        const educationItems = aboutContainer.querySelectorAll('.timeline-content p');
        
        if (philosophyTitle) {
            philosophyTitle.innerHTML = `<span class="section-number">01</span> ${translations[lang]["about-philosophy"]}`;
        }
        if (journeyTitle) {
            journeyTitle.innerHTML = `<span class="section-number">02</span> ${translations[lang]["about-journey"]}`;
        }
        if (skillsTitle) {
            skillsTitle.innerHTML = `<span class="section-number">03</span> ${translations[lang]["about-skills"]}`;
        }
        if (educationItems.length > 0) {
            educationItems[0].textContent = translations[lang]["about-education1"];
            educationItems[1].textContent = translations[lang]["about-education2"];
            educationItems[2].textContent = translations[lang]["about-education3"];
        }
    }
    
    // Met à jour l'état des boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    localStorage.setItem('preferredLang', lang);
}