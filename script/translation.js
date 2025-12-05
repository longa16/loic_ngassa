// Système de traduction pour le portfolio
const translations = {
    fr: {
        // Navigation et Menu
        'nav.about': 'À propos',
        'nav.projects': 'Projets',
        'nav.other': 'Autres',
        'nav.contact': 'Contact',

        // Page d'accueil (index.html)
        'hero.name': 'LOIC Y. NGASSA',
        'hero.description': 'Futur ML Ingénieur / Data scientist, passionné par les nouvelles technologies.',
        'footer.copyright': '© 2025 — Conçu avec intention',

        // Page À propos (about me.html)
        'about.title': 'À propos de moi',
        'about.subtitle': 'Étudiant en Ingénierie Informatique',
        'about.description1': 'Passionné par l\'intelligence artificielle et ses applications concrètes, je consacre mon temps à explorer les domaines du Machine Learning, du Deep Learning et de la Data Science. Mon objectif est de développer des solutions intelligentes qui améliorent notre quotidien.',
        'about.description2': 'Convaincu que l\'IA représente l\'une des révolutions technologiques les plus importantes de notre siècle, je me forme constamment aux dernières avancées dans ce domaine, des modèles de langage aux réseaux de neurones convolutifs, en passant par les systèmes de recommandation.',
        'about.description3': 'En parallèle de mes études, je travaille sur divers projets personnels alliant IA et développement web, avec une attention particulière portée à l\'expérience utilisateur et aux architectures cloud.',

        // Sections À propos
        'about.philosophy': 'Philosophie',
        'about.quote': '"L\'intelligence artificielle est une extension de l\'intelligence humaine, pas une menace."',
        'about.journey': 'Parcours',
        'about.skills': 'Compétences',
        'about.other-skills': 'Autres Compétences',

        // Timeline
        'timeline.present': '2023 - Présent',
        'timeline.engineering': 'Ingénierie informatique · INSA HdF',
        'timeline.prep': '2020 - 2023',
        'timeline.prep-desc': 'Classes préparatoires · IUCSJD',
        'timeline.bac': '- 2020',
        'timeline.bac-desc': 'Baccalauréat scientifique · LBNB',

        // Compétences
        'skills.languages': 'Langages: Python (pandas, Matplotlib, scikit-learn, PyTorch/TensorFlow), SQL',
        'skills.stats': 'Statistiques, Probabilités',
        'skills.modeling': 'Modélisation (régression, clustering, arbres, etc.)',
        'skills.mlops': 'MLOps : MLflow, TensorFlow Serving, Kubernetes, Docker, Git',
        'skills.viz': 'Visualisation : Power BI, Tableau',
        'skills.cloud': 'Cloud computing: AWS, Azure',
        'skills.web': 'Développement web: PHP, JavaScript, HTML/CSS',
        'skills.devops': 'DevOps: CI/CD, Kubernetes, Docker',
        'skills.blockchain': 'Blockchain/Web3',

        // Page Contact (contact.html)
        'contact.connection': 'Connexion',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.twitter': 'Twitter',
        'contact.email': 'Email',

        // Page Autres (other.html)
        'other.commitments': 'Engagements',
        'other.exhibitions': 'Salon',
        'other.sports': 'Sport/Autres',

        // Engagements
        'engagement.civic': 'Service Civique',
        'engagement.civic-org': 'EA Le Sextant',
        'engagement.civic-desc': 'Agir pour les personnes en situation de handicap, les seniors et leurs aidant·es, en facilitant leur accès et leur autonomie dans l\'usage des outils numériques et de l\'informatique.',
        'engagement.civic-date': 'Avril 2025-Septembre 2025',

        'engagement.mentoring': 'Mentorat',
        'engagement.mentoring-org': 'AFEV',
        'engagement.mentoring-desc': 'Accompagner un jeune À travers des échanges réguliers et des activités éducatives ou culturelles. Le mentorat vise à lutter contre les inégalités, à encourager la réussite de tous et à construire une société plus solidaire.',
        'engagement.mentoring-date': '2023-2024',

        'engagement.volunteer': 'Bénévolat',
        'engagement.volunteer-org': 'MBOA PARIS',
        'engagement.volunteer-desc': 'Participer en tant que bénévole à l\'organisation et au bon déroulement des activités culturelles et artistiques.',
        'engagement.volunteer-date': 'Mai 2024',

        // Salons
        'salon.vivatech': 'VivaTech 2025',
        'salon.vivatech-loc': 'Paris, France',
        'salon.vivatech-desc': 'Salon annuel dédié à l\'innovation et à la technologie Il rassemble chaque année à Paris les acteurs majeurs de la tech, des grandes entreprises aux jeunes pousses.',
        'salon.vivatech-date': '2025',

        'salon.icmaie': 'ICMAIE',
        'salon.icmaie-loc': 'Valenciennes, France',
        'salon.icmaie-desc': 'Conférence internationale sur l\'IA et le métavers dans l\'éducation pour une société durable',
        'salon.icmaie-date': '2025',

        // Sports
        'sport.basketball': 'Basketball',
        'sport.basketball-desc': 'Pratique régulière depuis 10 ans. Passion qui allie dynamisme, travail d\'équipe et stratégie.',
        'sport.basketball-date': '2013-Présent',

        'sport.running': 'Marche à pied/Course',
        'sport.running-desc': 'Je pratique régulièrement la marche et la course à pied. Ces activités ne sont pas seulement des exercices physiques pour moi, mais aussi des moments de réflexion et de connexion avec la nature.',
        'sport.running-date': '2021-Présent',

        // Page Work (work.html)
        'work.experiences': 'Experiences',
        'work.certifications': 'Certifications',
        'work.projects': 'Projets',

        // Expériences
        'work.exp1.title': 'Analyste BI junior - BICEC',
        'work.exp1.date': 'Mars - Aout 2023',
        'work.exp1.desc': 'chargé de concevoir un dashboard de pilotage destiné à suivre les performances des plateformes digitales (applications mobiles, services en ligne) et des services monétiques (distributeurs, cartes bancaires, paiements) de la banque.',

        'work.exp2.title': 'Analyste de données junior - BICEC',
        'work.exp2.date': 'Fevrier - Juin 2022',
        'work.exp2.desc': 'Développement d\'une solution de reporting BI avec Talend et Power BI conception et de développement d\'une solution complète de suivi et de reporting des opérations de guichets et de caisses, à l\'aide des outils Talend pour l\'intégration de données et Power BI pour la visualisation.',

        'work.exp3.title': 'Developpeur web junior - SCI Real Immovable',
        'work.exp3.date': 'Février - Mai 2021',
        'work.exp3.desc': 'Développement d\'un site web immobilier avec Symfony l\'objectif etait de digitaliser la vitrine de l\'entreprise en permettant la publication et la gestion d\'annonces immobilières, ainsi que l\'interaction avec les clients via un formulaire de contact et un espace d\'administration sécurisé.',

        // Projets
        'work.proj.github': 'Retrouvez l\'ensemble de mes projets sur mon profil Github',
        'work.proj.github.link': 'Mon profil Github',

        'work.proj1.title': 'Blockchain BTC',
        'work.proj1.desc': 'Le projet Blockchain_BTC est un simulateur de minage de Bitcoin développé en PHP. Il integre des fonctionnalités avancées telles que la gestion des transactions, la simulation de la difficulté de minage.',
        'work.proj1.link': 'Voir le projet',

        'work.proj2.title': 'Pole IT',
        'work.proj2.desc': 'Le projet Pole IT est le site web du centre d\'astronomie PoleIT-VAL. Il utilise des outils DevOps modernes et des meilleures pratiques pour assurer un déploiement efficace et automatisé.',
        'work.proj2.link': 'Voir le projet',

        // Certifications
        'work.cert1.title': 'SecNumAcademie - ANSSI',
        'work.cert1.date': 'Juillet 2025',
        'work.cert1.desc': 'Formation en cybersécurité proposée par l\'ANSSI, abordant les fondamentaux de la sécurité numérique.',
        'work.cert1.link': 'Voir la certification',

        'work.cert2.title': 'Atelier RGPD – CNIL',
        'work.cert2.date': 'Mai 2025',
        'work.cert2.desc': 'Sensibilisation au Règlement Général sur la Protection des Données (RGPD) via l\'atelier pédagogique de la CNIL.',
        'work.cert2.link': 'Voir la certification',

        'work.cert3.title': 'L\'IA et moi : Usage éthique et raisonné',
        'work.cert3.date': 'juin 2025',
        'work.cert3.desc': 'intégrer les outils d\'IA générative dans mes pratiques" et de l\'acquisition de la compétence "Intégrer les outils de l\'IA générative dans les pratiques étudiantes.',
        'work.cert3.link': 'Voir la certification'
    },

    en: {
        // Navigation et Menu
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.other': 'Other',
        'nav.contact': 'Contact',

        // Page d'accueil (index.html)
        'hero.name': 'LOIC Y. NGASSA',
        'hero.description': 'Future ML Engineer / Data scientist, passionate about new technologies.',
        'footer.copyright': '© 2025 — Designed with intention',

        // Page À propos (about me.html)
        'about.title': 'About me',
        'about.subtitle': 'Computer Engineering Student',
        'about.description1': 'Passionate about artificial intelligence and its concrete applications, I dedicate my time to exploring the fields of Machine Learning, Deep Learning and Data Science. My goal is to develop intelligent solutions that improve our daily lives.',
        'about.description2': 'Convinced that AI represents one of the most important technological revolutions of our century, I constantly train myself in the latest advances in this field, from language models to convolutional neural networks, including recommendation systems.',
        'about.description3': 'Alongside my studies, I work on various personal projects combining AI and web development, with particular attention paid to user experience and cloud architectures.',

        // Sections À propos
        'about.philosophy': 'Philosophy',
        'about.quote': '"Artificial intelligence is an extension of human intelligence, not a threat."',
        'about.journey': 'Journey',
        'about.skills': 'Skills',
        'about.other-skills': 'Other Skills',

        // Timeline
        'timeline.present': '2023 - Present',
        'timeline.engineering': 'Computer Engineering · INSA HdF',
        'timeline.prep': '2020 - 2023',
        'timeline.prep-desc': 'Preparatory classes · IUCSJD',
        'timeline.bac': '- 2020',
        'timeline.bac-desc': 'Scientific Baccalaureate · LBNB',

        // Compétences
        'skills.languages': 'Languages: Python (pandas, Matplotlib, scikit-learn, PyTorch/TensorFlow), SQL',
        'skills.stats': 'Statistics, Probabilities',
        'skills.modeling': 'Modeling (regression, clustering, trees, etc.)',
        'skills.mlops': 'MLOps: MLflow, TensorFlow Serving, Kubernetes, Docker, Git',
        'skills.viz': 'Visualization: Power BI, Tableau',
        'skills.cloud': 'Cloud computing: AWS, Azure',
        'skills.web': 'Web development: PHP, JavaScript, HTML/CSS',
        'skills.devops': 'DevOps: CI/CD, Kubernetes, Docker',
        'skills.blockchain': 'Blockchain/Web3',

        // Page Contact (contact.html)
        'contact.connection': 'Connection',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.twitter': 'Twitter',
        'contact.email': 'Email',

        // Page Autres (other.html)
        'other.commitments': 'Commitments',
        'other.exhibitions': 'Exhibitions',
        'other.sports': 'Sports/Other',

        // Engagements
        'engagement.civic': 'Civic Service',
        'engagement.civic-org': 'EA Le Sextant',
        'engagement.civic-desc': 'Act for people with disabilities, seniors and their caregivers, by facilitating their access and autonomy in the use of digital tools and computing.',
        'engagement.civic-date': 'April 2025-September 2025',

        'engagement.mentoring': 'Mentoring',
        'engagement.mentoring-org': 'AFEV',
        'engagement.mentoring-desc': 'Support a young person through regular exchanges and educational or cultural activities. Mentoring aims to fight against inequalities, encourage everyone\'s success and build a more supportive society.',
        'engagement.mentoring-date': '2023-2024',

        'engagement.volunteer': 'Volunteering',
        'engagement.volunteer-org': 'MBOA PARIS',
        'engagement.volunteer-desc': 'Participate as a volunteer in the organization and smooth running of cultural and artistic activities.',
        'engagement.volunteer-date': 'May 2024',

        // Salons
        'salon.vivatech': 'VivaTech 2025',
        'salon.vivatech-loc': 'Paris, France',
        'salon.vivatech-desc': 'Annual exhibition dedicated to innovation and technology. It brings together the major players in tech in Paris every year, from large companies to startups.',
        'salon.vivatech-date': '2025',

        'salon.icmaie': 'ICMAIE',
        'salon.icmaie-loc': 'Valenciennes, France',
        'salon.icmaie-desc': 'International conference on AI and metaverse in education for a sustainable society',
        'salon.icmaie-date': '2025',

        // Sports
        'sport.basketball': 'Basketball',
        'sport.basketball-desc': 'Regular practice for 10 years. Passion that combines dynamism, teamwork and strategy.',
        'sport.basketball-date': '2013-Present',

        'sport.running': 'Walking/Running',
        'sport.running-desc': 'I regularly practice walking and running. These activities are not just physical exercises for me, but also moments of reflection and connection with nature.',
        'sport.running-date': '2021-Present',

        // Page Work (work.html)
        'work.experiences': 'Experiences',
        'work.certifications': 'Certifications',
        'work.projects': 'Projects',

        // Expériences
        'work.exp1.title': 'Junior BI Analyst - BICEC',
        'work.exp1.date': 'March - August 2023',
        'work.exp1.desc': 'responsible for designing a management dashboard to monitor the performance of digital platforms (mobile applications, online services) and payment services (ATMs, bank cards, payments) of the bank.',

        'work.exp2.title': 'Junior Data Analyst - BICEC',
        'work.exp2.date': 'February - June 2022',
        'work.exp2.desc': 'Development of a BI reporting solution with Talend and Power BI design and development of a complete solution for monitoring and reporting teller and cash operations, using Talend tools for data integration and Power BI for visualization.',

        'work.exp3.title': 'Junior Web Developer - SCI Real Immovable',
        'work.exp3.date': 'February - May 2021',
        'work.exp3.desc': 'Development of a real estate website with Symfony the objective was to digitize the company\'s showcase by allowing the publication and management of real estate ads, as well as interaction with customers via a contact form and a secure administration space.',

        // Projets
        'work.proj.github': 'Find all my projects on my Github profile',
        'work.proj.github.link': 'My Github profile',

        'work.proj1.title': 'Blockchain BTC',
        'work.proj1.desc': 'The Blockchain_BTC project is a Bitcoin mining simulator developed in PHP. It integrates advanced features such as transaction management, mining difficulty simulation.',
        'work.proj1.link': 'View project',

        'work.proj2.title': 'Pole IT',
        'work.proj2.desc': 'The Pole IT project is the website of the PoleIT-VAL astronomy center. It uses modern DevOps tools and best practices to ensure efficient and automated deployment.',
        'work.proj2.link': 'View project',

        // Certifications
        'work.cert1.title': 'SecNumAcademie - ANSSI',
        'work.cert1.date': 'July 2025',
        'work.cert1.desc': 'Cybersecurity training offered by ANSSI, covering the fundamentals of digital security.',
        'work.cert1.link': 'View certification',

        'work.cert2.title': 'GDPR Workshop – CNIL',
        'work.cert2.date': 'May 2025',
        'work.cert2.desc': 'Awareness of the General Data Protection Regulation (GDPR) via the CNIL\'s educational workshop.',
        'work.cert2.link': 'View certification',

        'work.cert3.title': 'AI and me: Ethical and reasoned use',
        'work.cert3.date': 'June 2025',
        'work.cert3.desc': 'integrate generative AI tools into my practices" and the acquisition of the skill "Integrate generative AI tools into student practices.',
        'work.cert3.link': 'View certification'
    }
};

// Variables globales
let currentLang = 'fr';
let menuLinksCreated = false;

// Fonction pour obtenir la langue actuelle
function getCurrentLang() {
    return localStorage.getItem('preferredLang') || 'fr';
}

// Fonction pour sauvegarder la langue
function setCurrentLang(lang) {
    localStorage.setItem('preferredLang', lang);
    currentLang = lang;
}

// Fonction pour mettre à jour le menu burger
function updateBurgerMenu(lang) {
    // Attendre que le menu soit créé par script.js
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-links a');
        const menuItems = [
            'nav.about',
            'nav.projects',
            'nav.other',
            'nav.contact'
        ];

        navLinks.forEach((link, index) => {
            if (menuItems[index] && translations[lang][menuItems[index]]) {
                link.textContent = translations[lang][menuItems[index]];
            }
        });
    }, 100);
}

// Fonction principale de mise à jour du contenu
function updateContent(lang) {
    console.log('Updating content to:', lang);

    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Sauvegarder la préférence
    setCurrentLang(lang);

    // Mettre à jour le menu burger
    updateBurgerMenu(lang);

    // Traductions spécifiques par page
    updatePageSpecificContent(lang);
}

// Fonction pour les traductions spécifiques à chaque page
// Remplace la fonction updatePageSpecificContent par celle-ci :
function updatePageSpecificContent(lang) {
    // Sur une Single Page App, on met tout à jour en même temps
    updateHomePage(lang);
    updateAboutPage(lang);
    updateWorkPage(lang);
    updateOtherPage(lang);
    updateContactPage(lang);
    updateGenericPage(lang);
}

// Mise à jour générique
function updateGenericPage(lang) {
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = translations[lang]['footer.copyright'];
}

// Mise à jour page d'accueil
function updateHomePage(lang) {
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero p');
    const footer = document.querySelector('footer p');

    if (heroTitle) heroTitle.textContent = translations[lang]['hero.name'];
    if (heroDesc) heroDesc.textContent = translations[lang]['hero.description'];
    if (footer) footer.textContent = translations[lang]['footer.copyright'];
}

// Mise à jour page à propos
function updateAboutPage(lang) {
    console.log('Updating about page');

    // Titre principal "À propos de moi"
    const aboutTitles = document.querySelectorAll('h2');
    aboutTitles.forEach(title => {
        if (title.textContent.includes('À propos de moi') || title.textContent.includes('About me')) {
            title.textContent = translations[lang]['about.title'];
        }
    });

    // Sous-titre
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = translations[lang]['about.subtitle'];

    // Descriptions dans la carte de profil
    const profileCard = document.querySelector('.profile-glass-card div[style*="flex: 2"]');
    if (profileCard) {
        const paragraphs = profileCard.querySelectorAll('p');

        // Nettoyer le contenu existant et restructurer
        if (paragraphs.length >= 3) {
            // Premier paragraphe - description complète
            paragraphs[0].textContent = translations[lang]['about.description1'];

            // Deuxième paragraphe
            paragraphs[1].textContent = translations[lang]['about.description2'];

            // Troisième paragraphe
            paragraphs[2].textContent = translations[lang]['about.description3'];

            // Supprimer les paragraphes supplémentaires s'ils existent
            for (let i = paragraphs.length - 1; i >= 3; i--) {
                paragraphs[i].remove();
            }
        } else {
            // Si la structure est différente, recréer les paragraphes
            profileCard.innerHTML = `
                <h2 style="margin-bottom: 20px; text-align: center;">${translations[lang]['about.title']}</h2>
                <p style="margin-bottom: 20px;">${translations[lang]['about.description1']}</p>
                <p style="margin-bottom: 20px;">${translations[lang]['about.description2']}</p>
                <p>${translations[lang]['about.description3']}</p>
            `;
        }
    }

    // Sections numérotées
    updateAboutSections(lang);

    // Citation
    const quote = document.querySelector('.about-glass-card p i');
    if (quote) quote.textContent = translations[lang]['about.quote'];

    // Timeline
    updateTimeline(lang);

    // Tags de compétences
    updateSkillsTags(lang);

    // Footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = translations[lang]['footer.copyright'];
}

// Mise à jour des sections à propos
function updateAboutSections(lang) {
    const sections = document.querySelectorAll('.about-glass-card h2');
    sections.forEach(section => {
        const text = section.textContent || section.innerHTML;

        if (text.includes('01')) {
            const sectionNumber = section.querySelector('.section-number');
            if (sectionNumber) {
                section.innerHTML = `<span class="section-number">01</span> ${translations[lang]['about.philosophy']}`;
            } else {
                section.innerHTML = section.innerHTML.replace(/Philosophie|Philosophy/, translations[lang]['about.philosophy']);
            }
        } else if (text.includes('02')) {
            const sectionNumber = section.querySelector('.section-number');
            if (sectionNumber) {
                section.innerHTML = `<span class="section-number">02</span> ${translations[lang]['about.journey']}`;
            } else {
                section.innerHTML = section.innerHTML.replace(/Parcours|Journey/, translations[lang]['about.journey']);
            }
        } else if (text.includes('03')) {
            const sectionNumber = section.querySelector('.section-number');
            if (sectionNumber) {
                section.innerHTML = `<span class="section-number">03</span>${translations[lang]['about.skills']}`;
            } else {
                section.innerHTML = section.innerHTML.replace(/Compétences|Skills/, translations[lang]['about.skills']);
            }
        } else if (text.includes('04')) {
            const sectionNumber = section.querySelector('.section-number');
            if (sectionNumber) {
                section.innerHTML = `<span class="section-number">04</span>${translations[lang]['about.other-skills']}`;
            } else {
                section.innerHTML = section.innerHTML.replace(/Autres Compétences|Other Skills/, translations[lang]['about.other-skills']);
            }
        }
    });
}

// Mise à jour timeline
function updateTimeline(lang) {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineData = [
        ['timeline.present', 'timeline.engineering'],
        ['timeline.prep', 'timeline.prep-desc'],
        ['timeline.bac', 'timeline.bac-desc']
    ];

    timelineItems.forEach((item, index) => {
        const title = item.querySelector('h3');
        const desc = item.querySelector('p');

        if (timelineData[index]) {
            if (title && translations[lang][timelineData[index][0]]) {
                title.textContent = translations[lang][timelineData[index][0]];
            }
            if (desc && translations[lang][timelineData[index][1]]) {
                desc.textContent = translations[lang][timelineData[index][1]];
            }
        }
    });
}

// Mise à jour des tags de compétences
function updateSkillsTags(lang) {
    const skillsContainers = document.querySelectorAll('.project-tags');

    skillsContainers.forEach(container => {
        const parentSection = container.closest('.about-glass-card');
        const sectionTitle = parentSection?.querySelector('h2')?.textContent || '';
        const tags = container.querySelectorAll('.tag');

        if (sectionTitle.includes('03')) {
            // Compétences principales
            const skillKeys = ['skills.languages', 'skills.stats', 'skills.modeling', 'skills.mlops', 'skills.viz'];
            tags.forEach((tag, index) => {
                if (skillKeys[index] && translations[lang][skillKeys[index]]) {
                    tag.textContent = translations[lang][skillKeys[index]];
                }
            });
        } else if (sectionTitle.includes('04')) {
            // Autres compétences
            const skillKeys = ['skills.cloud', 'skills.web', 'skills.devops', 'skills.blockchain'];
            tags.forEach((tag, index) => {
                if (skillKeys[index] && translations[lang][skillKeys[index]]) {
                    tag.textContent = translations[lang][skillKeys[index]];
                }
            });
        }
    });
}

// Mise à jour page contact
function updateContactPage(lang) {
    const socialTitle = document.querySelector('.social-title');
    if (socialTitle) socialTitle.textContent = translations[lang]['contact.connection'];

    const socialLinks = document.querySelectorAll('.social-link span');
    const linkKeys = ['contact.linkedin', 'contact.github', 'contact.twitter', 'contact.email'];

    socialLinks.forEach((span, index) => {
        if (linkKeys[index] && translations[lang][linkKeys[index]]) {
            span.textContent = translations[lang][linkKeys[index]];
        }
    });

    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = translations[lang]['footer.copyright'];
}

// Mise à jour page autres
function updateOtherPage(lang) {
    // Navigation secondaire
    const subNavLinks = document.querySelectorAll('.sub-nav-link');
    const navKeys = ['other.commitments', 'other.exhibitions', 'other.sports'];

    subNavLinks.forEach((link, index) => {
        if (navKeys[index] && translations[lang][navKeys[index]]) {
            link.textContent = translations[lang][navKeys[index]];
        }
    });

    // Contenu des onglets
    updateEngagementsContent(lang);
    updateSalonsContent(lang);
    updateSportsContent(lang);

    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = translations[lang]['footer.copyright'];
}

// Mise à jour contenu engagements
function updateEngagementsContent(lang) {
    const designContent = document.querySelector('#design-content');
    if (!designContent) return;

    const cards = designContent.querySelectorAll('.content-card');
    const engagementData = [
        ['engagement.civic', 'engagement.civic-org', 'engagement.civic-desc', 'engagement.civic-date'],
        ['engagement.mentoring', 'engagement.mentoring-org', 'engagement.mentoring-desc', 'engagement.mentoring-date'],
        ['engagement.volunteer', 'engagement.volunteer-org', 'engagement.volunteer-desc', 'engagement.volunteer-date']
    ];

    cards.forEach((card, index) => {
        const h3 = card.querySelector('h3');
        const h5 = card.querySelector('h5');
        const p = card.querySelector('p');
        const date = card.querySelector('.date');

        const data = engagementData[index];
        if (data) {
            if (h3 && translations[lang][data[0]]) h3.textContent = translations[lang][data[0]];
            if (h5 && translations[lang][data[1]]) h5.textContent = translations[lang][data[1]];
            if (p && translations[lang][data[2]]) p.textContent = translations[lang][data[2]];
            if (date && translations[lang][data[3]]) date.textContent = translations[lang][data[3]];
        }
    });
}

// Mise à jour contenu salons
function updateSalonsContent(lang) {
    const engineeringContent = document.querySelector('#engineering-content');
    if (!engineeringContent) return;

    const cards = engineeringContent.querySelectorAll('.content-card');
    const salonData = [
        ['salon.vivatech', 'salon.vivatech-loc', 'salon.vivatech-desc', 'salon.vivatech-date'],
        ['salon.icmaie', 'salon.icmaie-loc', 'salon.icmaie-desc', 'salon.icmaie-date']
    ];

    cards.forEach((card, index) => {
        const h3 = card.querySelector('h3');
        const h7 = card.querySelector('h7');
        const p = card.querySelector('p');
        const date = card.querySelector('.date');

        const data = salonData[index];
        if (data) {
            if (h3 && translations[lang][data[0]]) h3.textContent = translations[lang][data[0]];
            if (h7 && translations[lang][data[1]]) h7.textContent = translations[lang][data[1]];
            if (p && translations[lang][data[2]]) p.textContent = translations[lang][data[2]];
            if (date && translations[lang][data[3]]) date.textContent = translations[lang][data[3]];
        }
    });
}

// Mise à jour contenu sports
function updateSportsContent(lang) {
    const photographyContent = document.querySelector('#photography-content');
    if (!photographyContent) return;

    const cards = photographyContent.querySelectorAll('.content-card');
    const sportData = [
        ['sport.basketball', 'sport.basketball-desc', 'sport.basketball-date'],
        ['sport.running', 'sport.running-desc', 'sport.running-date']
    ];

    cards.forEach((card, index) => {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        const date = card.querySelector('.date');

        const data = sportData[index];
        if (data) {
            if (h3 && translations[lang][data[0]]) h3.textContent = translations[lang][data[0]];
            if (p && translations[lang][data[1]]) p.textContent = translations[lang][data[1]];
            if (date && translations[lang][data[2]]) date.textContent = translations[lang][data[2]];
        }
    });
}

// Mise à jour page work
function updateWorkPage(lang) {
    // Navigation des onglets
    const navButtons = document.querySelectorAll('.work-nav button');
    const navKeys = ['work.experiences', 'work.certifications', 'work.projects'];

    navButtons.forEach((button, index) => {
        if (navKeys[index] && translations[lang][navKeys[index]]) {
            button.textContent = translations[lang][navKeys[index]];
        }
    });

    // Section Expériences
    updateExperiencesContent(lang);

    // Section Projets
    updateProjectsContent(lang);

    // Section Certifications
    updateCertificationsContent(lang);

    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = translations[lang]['footer.copyright'];
}

// Mise à jour contenu expériences
function updateExperiencesContent(lang) {
    const stagesSection = document.querySelector('#stages');
    if (!stagesSection) return;

    const cards = stagesSection.querySelectorAll('.project-card');
    const expData = [
        ['work.exp1.title', 'work.exp1.date', 'work.exp1.desc'],
        ['work.exp2.title', 'work.exp2.date', 'work.exp2.desc'],
        ['work.exp3.title', 'work.exp3.date', 'work.exp3.desc']
    ];

    cards.forEach((card, index) => {
        const title = card.querySelector('.project-title');
        const date = card.querySelector('.project-date');
        const desc = card.querySelector('.project-description');

        const data = expData[index];
        if (data) {
            if (title && translations[lang][data[0]]) title.textContent = translations[lang][data[0]];
            if (date && translations[lang][data[1]]) date.textContent = translations[lang][data[1]];
            if (desc && translations[lang][data[2]]) desc.textContent = translations[lang][data[2]];
        }
    });
}

// Mise à jour contenu projets
function updateProjectsContent(lang) {
    const projetsSection = document.querySelector('#projets');
    if (!projetsSection) return;

    const cards = projetsSection.querySelectorAll('.project-card');

    // Premier projet (Github)
    const githubCard = cards[0];
    if (githubCard) {
        const desc = githubCard.querySelector('.project-description');
        const link = githubCard.querySelector('.cert-link');

        if (desc && translations[lang]['work.proj.github']) {
            desc.textContent = translations[lang]['work.proj.github'];
        }
        if (link && translations[lang]['work.proj.github.link']) {
            link.textContent = translations[lang]['work.proj.github.link'];
        }
    }

    // Autres projets
    const projData = [
        null, // Premier est Github
        ['work.proj1.title', 'work.proj1.desc', 'work.proj1.link'],
        ['work.proj2.title', 'work.proj2.desc', 'work.proj2.link']
    ];

    cards.forEach((card, index) => {
        if (index === 0) return; // Skip Github card

        const title = card.querySelector('.project-title');
        const desc = card.querySelector('.cert-text .project-description');
        const link = card.querySelector('.cert-link');

        const data = projData[index];
        if (data) {
            if (title && translations[lang][data[0]]) title.textContent = translations[lang][data[0]];
            if (desc && translations[lang][data[1]]) desc.textContent = translations[lang][data[1]];
            if (link && translations[lang][data[2]]) link.textContent = translations[lang][data[2]];
        }
    });
}

// Mise à jour contenu certifications
function updateCertificationsContent(lang) {
    const certificationsSection = document.querySelector('#certifications');
    if (!certificationsSection) return;

    const cards = certificationsSection.querySelectorAll('.project-card');
    const certData = [
        ['work.cert1.title', 'work.cert1.date', 'work.cert1.desc', 'work.cert1.link'],
        ['work.cert2.title', 'work.cert2.date', 'work.cert2.desc', 'work.cert2.link'],
        ['work.cert3.title', 'work.cert3.date', 'work.cert3.desc', 'work.cert3.link']
    ];

    cards.forEach((card, index) => {
        const title = card.querySelector('.project-title');
        const date = card.querySelector('.project-date');
        const desc = card.querySelector('.cert-text .project-description');
        const link = card.querySelector('.cert-link');

        const data = certData[index];
        if (data) {
            if (title && translations[lang][data[0]]) title.textContent = translations[lang][data[0]];
            if (date && translations[lang][data[1]]) date.textContent = translations[lang][data[1]];
            if (desc && translations[lang][data[2]]) desc.textContent = translations[lang][data[2]];
            if (link && translations[lang][data[3]]) link.textContent = translations[lang][data[3]];
        }
    });
}

// Fonction d'initialisation
function initTranslation() {
    const defaultLang = getCurrentLang();
    console.log('Initializing translation with lang:', defaultLang);

    // Mettre à jour le contenu immédiatement
    updateContent(defaultLang);

    // Réessayer après un délai pour s'assurer que tout est chargé
    setTimeout(() => {
        updateContent(defaultLang);
    }, 500);

    // Gestionnaire d'événements pour les boutons de langue
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('lang-btn')) {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            console.log('Language button clicked:', lang);
            updateContent(lang);
        }
    });
}

// Fonction pour être appelée depuis script.js
function setupLanguageSwitcher() {
    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTranslation);
    } else {
        initTranslation();
    }

    // Observer les changements dans le DOM pour le menu burger
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const addedNodes = Array.from(mutation.addedNodes);
                const hasNavLinks = addedNodes.some(node =>
                    node.nodeType === 1 && (
                        node.classList?.contains('fullscreen-menu') ||
                        node.querySelector?.('.nav-links')
                    )
                );

                if (hasNavLinks) {
                    setTimeout(() => {
                        updateBurgerMenu(currentLang);
                    }, 100);
                }
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Export pour utilisation dans d'autres scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateContent, setupLanguageSwitcher };
}
