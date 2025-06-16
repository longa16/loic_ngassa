
const translations = {
    fr: {
        "hero-title": "LOIC Y. NGASSA",
        "hero-subtitle": "Futur Data scientist, passionné par les nouvelles technologies.",
        "footer-text": "© 2025 — Conçu avec intention",
        "menu-about": "À propos",
        "menu-work": "Projets",
        "menu-other": "Autres",
        "menu-contact": "Contact"
    },
    en: {
        "hero-title": "LOIC Y. NGASSA",
        "hero-subtitle": "Future Data Scientist, passionate about new technologies.",
        "footer-text": "© 2025 — Crafted with intention",
        "menu-about": "About",
        "menu-work": "Work",
        "menu-other": "Other",
        "menu-contact": "Contact"
    }
};

function updateContent(lang) {
    // Met à jour le contenu principal
    document.querySelector('.hero h1').textContent = translations[lang]["hero-title"];
    document.querySelector('.hero p').textContent = translations[lang]["hero-subtitle"];
    document.querySelector('footer p').textContent = translations[lang]["footer-text"];
    
    // Met à jour le menu si existant
    const menuLinks = document.querySelectorAll('.nav-links a');
    if (menuLinks.length > 0) {
        menuLinks[0].textContent = translations[lang]["menu-about"];
        menuLinks[1].textContent = translations[lang]["menu-work"];
        menuLinks[2].textContent = translations[lang]["menu-other"];
        menuLinks[3].textContent = translations[lang]["menu-contact"];
    }
    
    // Met à jour l'état des boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    localStorage.setItem('preferredLang', lang);
}

