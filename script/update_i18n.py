import re
import sys

with open(r'Y:\loic_ngassa\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add translation attributes

# Autres Réalisations Title
content = re.sub(r'<h2>Autres R&eacute;alisations</h2>', r'<h2 data-i18n="others.title">Autres R&eacute;alisations</h2>', content)

# GPU Puzzle
content = re.sub(r'<p>Programmation parall&egrave;le CUDA &amp; optimisation GPU en Python</p>', r'<p data-i18n="gpu.desc">Programmation parall&egrave;le CUDA &amp; optimisation GPU en Python</p>', content)

# Uplift
content = re.sub(r'<h4> Uplift Modeling</h4>', r'<h4 data-i18n="uplift.title"> Uplift Modeling</h4>', content)
content = re.sub(r'<p>Mod&eacute;lisation causale T-Learner sur 64k clients \(dataset Hillstrom\)</p>', r'<p data-i18n="uplift.desc">Mod&eacute;lisation causale T-Learner sur 64k clients (dataset Hillstrom)</p>', content)

# Prestashop
content = re.sub(r'<p>D&eacute;ploiement d&apos;une boutique e-commerce sur cluster Kubernetes l&eacute;ger\s*\(K3S\)</p>', r'<p data-i18n="prestashop.desc">D&eacute;ploiement d&apos;une boutique e-commerce sur cluster Kubernetes l&eacute;ger (K3S)</p>', content)

# Immoscan
content = re.sub(r'<p>Application Android d&apos;&eacute;tats des lieux avec architecture MVVM</p>', r'<p data-i18n="immo.desc">Application Android d&apos;&eacute;tats des lieux avec architecture MVVM</p>', content)

# Blockchain
content = re.sub(r'<p>Simulateur de blockchain Bitcoin avec algorithme Proof of Work</p>', r'<p data-i18n="btc.desc">Simulateur de blockchain Bitcoin avec algorithme Proof of Work</p>', content)

# Crawlia
content = re.sub(r'<p>Crawler SEO automatique analyse &amp; rapport de pages web</p>', r'<p data-i18n="crawlia.desc">Crawler SEO automatique analyse &amp; rapport de pages web</p>', content)

# Escape Game 
content = re.sub(r'<p>Jeu d&apos;&eacute;vasion 3D en Unity avec m&eacute;caniques de puzzles</p>', r'<p data-i18n="escape.desc">Jeu d&apos;&eacute;vasion 3D en Unity avec m&eacute;caniques de puzzles</p>', content)

# Certifications
content = re.sub(r'<h2>Certifications</h2>', r'<h2 data-i18n="certs.title">Certifications</h2>', content)
content = re.sub(r'<p class="cert-desc">Fondamentaux de la cybers&eacute;curit&eacute; : hygi&egrave;ne\s*num&eacute;rique, cryptographie, s&eacute;curit&eacute; r&eacute;seau.</p>', r'<p class="cert-desc" data-i18n="cert.anssi.desc">Fondamentaux de la cybers&eacute;curit&eacute; : hygi&egrave;ne num&eacute;rique, cryptographie, s&eacute;curit&eacute; r&eacute;seau.</p>', content)
content = re.sub(r'<p class="cert-desc">Protection des donn&eacute;es personnelles, conformit&eacute; RGPD et\s*droits des utilisateurs.</p>', r'<p class="cert-desc" data-i18n="cert.cnil.desc">Protection des donn&eacute;es personnelles, conformit&eacute; RGPD et droits des utilisateurs.</p>', content)
content = re.sub(r'<p class="cert-desc">Enjeux &eacute;thiques de l\'IA, biais algorithmiques, IA responsable et\s*gouvernance.</p>', r'<p class="cert-desc" data-i18n="cert.ia.desc">Enjeux &eacute;thiques de l\'IA, biais algorithmiques, IA responsable et gouvernance.</p>', content)
content = re.sub(r'<span class="cert-date">Juil. 2025</span>', r'<span class="cert-date" data-i18n="cert.date.juil">Juil. 2025</span>', content)
content = re.sub(r'<span class="cert-date">Mai 2025</span>', r'<span class="cert-date" data-i18n="cert.date.mai">Mai 2025</span>', content)
content = re.sub(r'<span class="cert-date">Juin 2025</span>', r'<span class="cert-date" data-i18n="cert.date.juin">Juin 2025</span>', content)

# Other sections nav 
content = re.sub(r'<li><a href="#" class="sub-nav-link active" data-tab="design">Engagements</a></li>', r'<li><a href="#" class="sub-nav-link active" data-tab="design" data-i18n="other.nav.engagements">Engagements</a></li>', content)
content = re.sub(r'<li><a href="#" class="sub-nav-link" data-tab="engineering">Salon</a></li>', r'<li><a href="#" class="sub-nav-link" data-tab="engineering" data-i18n="other.nav.salon">Salon</a></li>', content)
content = re.sub(r'<li><a href="#" class="sub-nav-link" data-tab="photography">Sport/Autres</a></li>', r'<li><a href="#" class="sub-nav-link" data-tab="photography" data-i18n="other.nav.sport">Sport/Autres</a></li>', content)

# Engagements
content = re.sub(r'<h3>Service Civique</h3>', r'<h3 data-i18n="civic.title">Service Civique</h3>', content)
content = re.sub(r'<p>Agir pour les personnes en situation de handicap.</p>', r'<p data-i18n="civic.desc">Agir pour les personnes en situation de handicap.</p>', content)
content = re.sub(r'<span class="date">Avril - Sept\s*2025</span>', r'<span class="date" data-i18n="civic.date">Avril - Sept 2025</span>', content)

content = re.sub(r'<h3>Mentorat</h3>', r'<h3 data-i18n="mentor.title">Mentorat</h3>', content)
content = re.sub(r'<p>Accompagnement éducatif.</p>', r'<p data-i18n="mentor.desc">Accompagnement éducatif.</p>', content)

# Salon
content = re.sub(r'<h3>VivaTech 2025</h3>', r'<h3 data-i18n="viva.title">VivaTech 2025</h3>', content)
content = re.sub(r'<p>Salon innovation Paris.</p>', r'<p data-i18n="viva.desc">Salon innovation Paris.</p>', content)
content = re.sub(r'<span class="date">2025</span>', r'<span class="date" data-i18n="viva.date">2025</span>', content)

content = re.sub(r'<p>Conférence IA & Métavers.</p>', r'<p data-i18n="icmaie.desc">Conférence IA & Métavers.</p>', content)

# Sports
content = re.sub(r'<p>Passion et compétition.</p>', r'<p data-i18n="basket.desc">Passion et compétition.</p>', content)
content = re.sub(r'<span class="date">2013-Présent</span>', r'<span class="date" data-i18n="basket.date">2013-Présent</span>', content)

# Footer
content = re.sub(r'<p>© 2025 — Conçu avec intention</p>', r'<p data-i18n="footer">© 2025 — Conçu avec intention</p>', content)

with open(r'Y:\loic_ngassa\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done!")
