// Initialisation du Menu Burger
const burger = document.querySelector('.menu-burger');
const nav = document.createElement('div');
nav.className = 'fullscreen-menu';
const navLinks = document.createElement('ul');
navLinks.className = 'nav-links';

// MODIFICATION ICI : Utilisation des ID (#) au lieu des fichiers .html
const links = [
    { text: 'Profil', href: '#home' },
    { text: 'Projets', href: '#work' },
    { text: 'Autres', href: '#other' },
    { text: 'Contact', href: '#contact' }
];

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;

    // Fermer le menu quand on clique sur un lien
    a.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    li.appendChild(a);
    navLinks.appendChild(li);
});

nav.appendChild(navLinks);
nav.style.display = 'none';
document.body.appendChild(nav);

// Gestion du clic sur le burger
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    if (nav.style.display === 'none' || !nav.style.display) {
        nav.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        nav.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



function setupLanguageSwitcher() {
    // Initialisation
    const defaultLang = localStorage.getItem('preferredLang') || 'fr';
    updateContent(defaultLang);

    // Gestion des clics
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('lang-btn')) {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            updateContent(lang);
        }
    });
}

// Démarrer le système de traduction
setupLanguageSwitcher();