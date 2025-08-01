// Initialisation du Menu Burger
const burger = document.querySelector('.menu-burger');
const nav = document.createElement('div');
nav.className = 'fullscreen-menu';
const navLinks = document.createElement('ul');
navLinks.className = 'nav-links';

const links = [
    { text: 'À propos', href: 'about me.html' },
    { text: 'Projets', href: 'work.html' },
    { text: 'Autres', href: 'other.html' },
    { text: 'Contact', href: 'contact.html' }
];

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
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

// Styles du menu
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .fullscreen-menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background: var(--glass);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 99;
        animation: fadeIn 0.3s ease-out;
    }
    
    .nav-links {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }
    
    .nav-links li {
        margin: 2rem 0;
    }
    
    .nav-links a {
        text-decoration: none;
        color: var(--space-gray);
        font-weight: 400;
        font-size: 1.5rem;
        transition: var(--transition);
    }
    
    .nav-links a:hover {
        opacity: 0.7;
    }
`;
document.head.appendChild(style);

function setupLanguageSwitcher() {
    // Initialisation
    const defaultLang = localStorage.getItem('preferredLang') || 'fr';
    updateContent(defaultLang);
    
    // Gestion des clics
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('lang-btn')) {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            updateContent(lang);
        }
    });
}

// Démarrer le système de traduction
setupLanguageSwitcher();
