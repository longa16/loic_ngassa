const translations = {
    fr: {
        // Navigation (in JS script normally, but we can do it via i18n too)
        "nav.home": "Profil",
        "nav.work": "Projets",
        "nav.other": "Autres",
        "nav.contact": "Contact",

        // Hero
        "hero.location": "<i class=\"fas fa-map-marker-alt\"></i> France",
        "hero.title": "Ingénieur ML & IA",
        "hero.bio": "Ingénieur en informatique, je me spécialise en <strong>Machine Learning</strong> et <strong>Deep Learning</strong>. Je construis, déploie et monitore des modèles de machine learning et des solutions IA concrètes des pipelines RAG aux agents autonomes, en passant par la computer vision et l'optimisation de l'inférence des solutions.",
        "hero.btn.cv": "Télécharger mon CV",
        "hero.btn.contact": "Contactez-moi",
        "hero.quote": "<i>&ldquo;L'IA est une extension de l'intelligence humaine, pas une menace.&rdquo;</i><cite>— Yann LeCun</cite>",

        // Tech Stack
        "tech.title": "Stack Technique",

        // Projets
        "projects.title": "Projets",

        // CIMES
        "cimes.title": "CIMES Analyse Granulométrique IA",
        "cimes.desc": "Application industrielle d'analyse granulométrique par vision artificielle (flux RTSP temps réel). Segmentation YOLO-OBB sur GPU, analyse morphologique scikit-image, courbes interactives, rapports PDF et système de licence hors-ligne RSA. Utilisée en production pour l'analyse de ballast.",
        
        // Longa
        "longa.title": "Longa Assistant IA Recruiter",
        "longa.desc": "Assistant RAG conversationnel répondant aux questions des recruteurs à partir de mes documents personnels. Architecture hybride MMR + BM25 avec reranker cross-encoder MMarco. Génération via Gemini Flash et évaluation des perfommances avec RAGAS.",
        
        // Time Series
        "timeseries.title": "Sales Forecasting",
        "timeseries.desc": "Prévision des ventes sur 90 jours à partir d'une série temporelle quotidienne multi-magasins (dataset Kaggle). Analyse des tendances et saisonnalités, modélisation Prophet. Évaluation MAE & MAPE pour optimiser la planification logistique et les stocks.",
        
        // E-Agent
        "eagent.title": "E-Agent mon assistant Email IA",
        "eagent.desc": "Agent autonome connecté à Gmail via OAuth2 : résumés et classification avec Qwen 3.8 27B, dictée vocale Whisper, lecture TTS Orpheus. Contrôlable en langage naturel via Discord. Déployé sur Railway.",
        
        // NLP
        "nlp.title": "NLP Insight et Topic Mining",
        "nlp.desc": "Extraction automatique d'insights depuis des milliers d'avis clients e-commerce. Topic Modeling NMF + TF-IDF pour identifier les points de friction (ex. guide des tailles) sans lecture manuelle. Résultat : recommandation stratégique actionnables pour réduire le taux de retours.",
        
        // RFM
        "rfm.title": "Segmentation RFM",
        "rfm.desc": "Clustering client e-commerce (K-Means) sur le dataset Online Retail. Segmentation RFM (Recency, Frequency, Monetary) pour identifier les profils VIP, dormants et à risque, et orienter les actions marketing.",

        // Autres Réalisations
        "others.title": "Autres Réalisations",
        "gpu.desc": "Programmation parallèle CUDA & optimisation GPU en Python",
        "uplift.title": "Uplift Modeling",
        "uplift.desc": "Modélisation causale T-Learner sur 64k clients (dataset Hillstrom)",
        "prestashop.desc": "Déploiement d'une boutique e-commerce sur cluster Kubernetes léger (K3S)",
        "immo.desc": "Application Android d'états des lieux avec architecture MVVM",
        "btc.desc": "Simulateur de blockchain Bitcoin avec algorithme Proof of Work",
        "crawlia.desc": "Crawler SEO automatique analyse & rapport de pages web",
        "escape.desc": "Jeu d'évasion 3D en Unity avec mécaniques de puzzles",

        // Certifications
        "certs.title": "Certifications",
        "cert.anssi.desc": "Fondamentaux de la cybersécurité : hygiène numérique, cryptographie, sécurité réseau.",
        "cert.cnil.desc": "Protection des données personnelles, conformité RGPD et droits des utilisateurs.",
        "cert.ia.desc": "Enjeux éthiques de l'IA, biais algorithmiques, IA responsable et gouvernance.",
        "cert.date.juil": "Juil. 2025",
        "cert.date.mai": "Mai 2025",
        "cert.date.juin": "Juin 2025",

        // Other page
        "other.nav.engagements": "Engagements",
        "other.nav.salon": "Salon",
        "other.nav.sport": "Sport/Autres",

        "civic.title": "Service Civique",
        "civic.desc": "Agir pour les personnes en situation de handicap.",
        "civic.date": "Avril - Sept 2025",

        "mentor.title": "Mentorat",
        "mentor.desc": "Accompagnement éducatif.",
        "mentor.date": "2023-2024",

        "viva.title": "VivaTech 2025",
        "viva.desc": "Salon innovation Paris.",
        "viva.date": "2025",
        
        "icmaie.desc": "Conférence IA & Métavers.",

        "basket.desc": "Passion et compétition.",
        "basket.date": "2013-Présent",

        // Footer
        "footer": "© 2025 — Conçu avec intention"
    },
    en: {
        // Navigation
        "nav.home": "Profile",
        "nav.work": "Projects",
        "nav.other": "Other",
        "nav.contact": "Contact",

        // Hero
        "hero.location": "<i class=\"fas fa-map-marker-alt\"></i> France",
        "hero.title": "ML & AI Engineer",
        "hero.bio": "Computer engineer specializing in <strong>Machine Learning</strong> and <strong>Deep Learning</strong>. I build, deploy, and monitor machine learning models and concrete AI solutions—from RAG pipelines to autonomous agents, computer vision, and inference optimization.",
        "hero.btn.cv": "Download my Resume",
        "hero.btn.contact": "Contact Me",
        "hero.quote": "<i>&ldquo;AI is an extension of human intelligence, not a threat.&rdquo;</i><cite>— Yann LeCun</cite>",

        // Tech Stack
        "tech.title": "Tech Stack",

        // Projets
        "projects.title": "Projects",

        // CIMES
        "cimes.title": "CIMES AI Particle Analysis",
        "cimes.desc": "Industrial machine vision application for particle size analysis (real-time RTSP stream). GPU-accelerated YOLO-OBB segmentation, scikit-image morphological analysis, interactive plotting, PDF reports, and offline RSA licensing. Used in production for ballast analysis.",
        
        // Longa
        "longa.title": "Longa AI Recruiter Assistant",
        "longa.desc": "Conversational RAG assistant answering recruiter questions using my personal documents. Hybrid MMR + BM25 architecture with MMarco cross-encoder reranker. Generation via Gemini Flash and performance evaluation using RAGAS.",
        
        // Time Series
        "timeseries.title": "Sales Forecasting",
        "timeseries.desc": "90-day multi-store daily sales forecasting (Kaggle dataset). Trend and seasonality analysis, Prophet modeling. Evaluated via MAE & MAPE to optimize inventory and logistics planning.",
        
        // E-Agent
        "eagent.title": "E-Agent AI Email Assistant",
        "eagent.desc": "Autonomous agent connected to Gmail via OAuth2: summaries and classification powered by Qwen 3.8 27B, Whisper voice dictation, Orpheus TTS reading. Natural language control via Discord. Deployed on Railway.",
        
        // NLP
        "nlp.title": "NLP Insight & Topic Mining",
        "nlp.desc": "Automated insights extraction from thousands of e-commerce customer reviews. NMF + TF-IDF Topic Modeling to identify friction points (e.g., sizing guides) without manual reading. Result: actionable strategic recommendations to reduce return rates.",
        
        // RFM
        "rfm.title": "RFM Segmentation",
        "rfm.desc": "E-commerce customer clustering (K-Means) on the Online Retail dataset. RFM (Recency, Frequency, Monetary) segmentation to identify VIP, dormant, and at-risk profiles, guiding targeted marketing campaigns.",

        // Autres Réalisations
        "others.title": "Other Projects",
        "gpu.desc": "Parallel CUDA programming & GPU optimization in Python",
        "uplift.title": "Uplift Modeling",
        "uplift.desc": "Causal T-Learner modeling on 64k customers (Hillstrom dataset)",
        "prestashop.desc": "Deployment of an e-commerce store on a lightweight Kubernetes cluster (K3S)",
        "immo.desc": "Android property inspection application with MVVM architecture",
        "btc.desc": "Bitcoin blockchain simulator with Proof of Work algorithm",
        "crawlia.desc": "Automated SEO crawler for website analysis & reporting",
        "escape.desc": "3D Escape Game up in Unity with puzzle mechanics",

        // Certifications
        "certs.title": "Certifications",
        "cert.anssi.desc": "Cybersecurity fundamentals: digital hygiene, cryptography, network security.",
        "cert.cnil.desc": "Personal data protection, GDPR compliance, and user rights.",
        "cert.ia.desc": "Ethical challenges of AI, algorithmic biases, responsible AI, and governance.",
        "cert.date.juil": "Jul. 2025",
        "cert.date.mai": "May 2025",
        "cert.date.juin": "Jun. 2025",

        // Other page
        "other.nav.engagements": "Commitments",
        "other.nav.salon": "Events",
        "other.nav.sport": "Sports/Other",

        "civic.title": "Civic Service",
        "civic.desc": "Working for people with disabilities.",
        "civic.date": "Apr - Sep 2025",

        "mentor.title": "Mentoring",
        "mentor.desc": "Educational support.",
        "mentor.date": "2023-2024",

        "viva.title": "VivaTech 2025",
        "viva.desc": "Paris Innovation Event.",
        "viva.date": "2025",
        
        "icmaie.desc": "AI & Metaverse Conference.",

        "basket.desc": "Passion and competition.",
        "basket.date": "2013-Present",

        // Footer
        "footer": "© 2025 — Designed with intention"
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'fr';

function updateContent(lang) {
    if(!translations[lang]) return;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('preferredLang', lang);
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update dynamically created burger menu links
    setTimeout(() => {
        const links = document.querySelectorAll('.nav-links a');
        const map = ["nav.home", "nav.work", "nav.other", "nav.contact"];
        links.forEach((a, i) => {
            if(map[i]) a.innerHTML = translations[lang][map[i]];
        });
    }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);
});
