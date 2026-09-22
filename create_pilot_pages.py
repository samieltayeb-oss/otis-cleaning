import os

os.makedirs('services', exist_ok=True)
os.makedirs('fr/services', exist_ok=True)

en_page = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Commercial Cleaning Services Montreal | OTIS</title>
<meta name="description" content="Professional commercial cleaning services in Greater Montreal. Reliable teams, transparent pricing, and standardized protocols. Request a free quote today.">
<link rel="canonical" href="https://otis-cleaning.vercel.app/services/commercial-cleaning">
<link rel="alternate" hreflang="en-CA" href="https://otis-cleaning.vercel.app/services/commercial-cleaning">
<link rel="alternate" hreflang="fr-CA" href="https://otis-cleaning.vercel.app/fr/services/entretien-commercial">
<link rel="alternate" hreflang="x-default" href="https://otis-cleaning.vercel.app/services/commercial-cleaning">
<meta property="og:url" content="https://otis-cleaning.vercel.app/services/commercial-cleaning">
<meta property="og:title" content="Commercial Cleaning Services Montreal | OTIS">
<meta property="og:description" content="Professional commercial cleaning services in Greater Montreal. Reliable teams, transparent pricing, and standardized protocols.">
<meta property="og:locale" content="en_CA">
<meta property="og:locale:alternate" content="fr_CA">

<style>
  :root { --blue: #0a1f44; --light-blue: #143572; --gold: #cfa856; --gray: #4a4a4a; --light-gray: #f5f7fa; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; color: var(--gray); line-height: 1.6; }
  header { background: #fff; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
  .logo { font-size: 1.5rem; font-weight: 800; color: var(--blue); text-decoration: none; letter-spacing: 2px; }
  nav a { color: var(--gray); text-decoration: none; margin-left: 1.5rem; font-weight: 600; }
  .btn { background: var(--blue); color: white; padding: 0.6rem 1.2rem; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; }
  .btn:hover { background: var(--light-blue); }
  
  .hero { 
    background-image: linear-gradient(90deg, rgba(8,13,26,0.88) 0%, rgba(8,13,26,0.45) 45%, rgba(8,13,26,0) 100%), url('/imgs/otis-hero-commercial-cleaning.jpg');
    background-size: cover; background-position: center; color: white; padding: 6rem 2rem; min-height: 50vh; display: flex; flex-direction: column; justify-content: center;
  }
  .hero h1 { font-size: 3rem; margin-bottom: 1rem; max-width: 600px; line-height: 1.2; }
  .hero p { font-size: 1.2rem; max-width: 500px; margin-bottom: 2rem; opacity: 0.9; }
  
  .section { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
  h2 { color: var(--blue); font-size: 2rem; margin-bottom: 2rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
  .card { background: var(--light-gray); padding: 2rem; border-radius: 8px; }
  .card h3 { color: var(--blue); margin-top: 0; }
  
  .faq { margin-bottom: 1rem; border-bottom: 1px solid #ddd; padding-bottom: 1rem; }
  .faq h4 { color: var(--blue); margin: 0 0 0.5rem 0; font-size: 1.1rem; }
  
  footer { background: var(--blue); color: white; padding: 3rem 2rem 1rem; margin-top: 4rem; }
  .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
  .footer-grid a { color: #aaa; text-decoration: none; }
  .footer-bottom { text-align: center; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); color: #aaa; font-size: 0.9rem; }
  
  @media (max-width: 768px) {
    .hero h1 { font-size: 2rem; }
    header { padding: 1rem; }
    nav a.hide-mobile { display: none; }
  }
</style>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Cleaning",
  "provider": {
    "@type": "LocalBusiness",
    "name": "OTIS Commercial Cleaning",
    "telephone": "+1 (438) 935-9725",
    "areaServed": "Greater Montreal Area, Quebec",
    "url": "https://otis-cleaning.vercel.app/"
  },
  "areaServed": "Greater Montreal Area",
  "description": "Professional commercial cleaning and janitorial services for businesses in Greater Montreal."
}
</script>
</head>
<body>

<header>
  <a href="/" class="logo">OTIS</a>
  <nav>
    <a href="tel:+14389359725" class="hide-mobile">+1 (438) 935-9725</a>
    <a href="/fr/services/entretien-commercial" class="lang-switcher">FR</a>
    <a href="/#quote" class="btn" style="margin-left: 1rem;">Get a Quote</a>
  </nav>
</header>

<div class="hero">
  <h1>Reliable Commercial Cleaning for Montreal Businesses</h1>
  <p>Standardized protocols, dedicated cleaning teams, and transparent pricing. We elevate your corporate workspace so you can focus on your business.</p>
  <div>
    <a href="/#quote" class="btn" style="padding: 1rem 2rem; font-size: 1.1rem;">Request a Free Quote</a>
  </div>
</div>

<div class="section">
  <h2>The OTIS Standard</h2>
  <div class="grid">
    <div class="card">
      <h3>Consistent Quality</h3>
      <p>We deploy the same dedicated crew to your facility, ensuring they understand your building's specific requirements and security protocols.</p>
    </div>
    <div class="card">
      <h3>Commercial-Grade Equipment</h3>
      <p>Our teams use professional-grade mops, microfiber systems, and neutral-pH commercial cleaning agents that effectively remove dirt without damaging your surfaces.</p>
    </div>
    <div class="card">
      <h3>Transparent Communication</h3>
      <p>No hidden fees. You get clear, predictable per-square-foot pricing and responsive support from our local Montreal management team.</p>
    </div>
  </div>
</div>

<div class="section" style="background: var(--light-gray); max-width: none;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <h2>What's Included in Our Scope</h2>
    <div class="grid">
      <div>
        <ul style="line-height: 2;">
          <li>Daily, weekly, or custom frequency janitorial services</li>
          <li>High-touch surface sanitization</li>
          <li>Restroom detailing and consumable restocking</li>
          <li>Breakroom and kitchenette cleaning</li>
        </ul>
      </div>
      <div>
        <ul style="line-height: 2;">
          <li>Hard floor sweeping and damp mopping</li>
          <li>Carpet vacuuming and spot checking</li>
          <li>Trash and recycling removal</li>
          <li>Interior glass and partition detailing</li>
        </ul>
      </div>
    </div>
    <p style="margin-top: 2rem;"><strong>Related Add-ons:</strong> Professional auto-scrubbing for large hard floors, post-renovation cleanup, and move-in/move-out turnover services.</p>
  </div>
</div>

<div class="section">
  <h2>Frequently Asked Questions</h2>
  
  <div class="faq">
    <h4>Do you operate after business hours?</h4>
    <p>Yes. The majority of our commercial cleaning happens during evenings or weekends to ensure zero disruption to your daily operations. We maintain strict keyholder and security protocols.</p>
  </div>
  
  <div class="faq">
    <h4>Are your services available throughout Greater Montreal?</h4>
    <p>Absolutely. We serve corporate offices, clinics, and commercial facilities across the Greater Montreal Area.</p>
  </div>
  
  <div class="faq">
    <h4>Do I have to sign a long-term contract?</h4>
    <p>We offer flexible agreements based on your needs, typically standardizing on 6-month or 10-month service agreements to guarantee your spot in our route, but we pride ourselves on transparent, fair terms.</p>
  </div>
  
  <div class="faq">
    <h4>Are you ISSA Canada members?</h4>
    <p>Yes, OTIS is a proud member of ISSA Canada (#102438), adhering to industry-leading commercial cleaning standards.</p>
  </div>
</div>

<div class="section" style="text-align: center; padding-bottom: 6rem;">
  <h2>Ready to upgrade your facility maintenance?</h2>
  <p style="font-size: 1.2rem; margin-bottom: 2rem;">Schedule a brief on-site walkthrough and receive a transparent quote.</p>
  <a href="/#quote" class="btn" style="padding: 1rem 2rem; font-size: 1.1rem; margin-right: 1rem;">Get a Quote</a>
  <a href="tel:+14389359725" style="color: var(--blue); font-weight: 600; text-decoration: none;">or call +1 (438) 935-9725</a>
</div>

<footer>
  <div class="footer-grid">
    <div>
      <h3 style="margin-top: 0;">OTIS</h3>
      <p>Premium Commercial Cleaning<br>Serving Greater Montreal Area<br>Quebec, Canada</p>
    </div>
    <div>
      <h4 style="margin-bottom: 0.5rem;">Contact</h4>
      <p><a href="tel:+14389359725">+1 (438) 935-9725</a><br><a href="mailto:info@otiscc.ca">info@otiscc.ca</a></p>
    </div>
    <div>
      <h4 style="margin-bottom: 0.5rem;">Trust</h4>
      <p>ISSA Canada Member<br>Strict Protocol Standards</p>
    </div>
    <div>
      <h4 style="margin-bottom: 0.5rem;">Internal Access</h4>
      <p><a href="/internal/blueprint">Blueprint</a><br><a href="/internal/command-center">Command Center</a></p>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2026 OTIS Commercial Cleaning. All rights reserved.
  </div>
</footer>

</body>
</html>
"""

fr_page = """<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Services d'Entretien Ménager Commercial Montréal | OTIS</title>
<meta name="description" content="Services professionnels d'entretien ménager commercial dans le Grand Montréal. Équipes fiables, tarification transparente et protocoles rigoureux.">
<link rel="canonical" href="https://otis-cleaning.vercel.app/fr/services/entretien-commercial">
<link rel="alternate" hreflang="en-CA" href="https://otis-cleaning.vercel.app/services/commercial-cleaning">
<link rel="alternate" hreflang="fr-CA" href="https://otis-cleaning.vercel.app/fr/services/entretien-commercial">
<link rel="alternate" hreflang="x-default" href="https://otis-cleaning.vercel.app/services/commercial-cleaning">
<meta property="og:url" content="https://otis-cleaning.vercel.app/fr/services/entretien-commercial">
<meta property="og:title" content="Services d'Entretien Ménager Commercial Montréal | OTIS">
<meta property="og:description" content="Services professionnels d'entretien ménager commercial dans le Grand Montréal. Équipes fiables, tarification transparente et protocoles rigoureux.">
<meta property="og:locale" content="fr_CA">
<meta property="og:locale:alternate" content="en_CA">

<style>
  :root { --blue: #0a1f44; --light-blue: #143572; --gold: #cfa856; --gray: #4a4a4a; --light-gray: #f5f7fa; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; color: var(--gray); line-height: 1.6; }
  header { background: #fff; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
  .logo { font-size: 1.5rem; font-weight: 800; color: var(--blue); text-decoration: none; letter-spacing: 2px; }
  nav a { color: var(--gray); text-decoration: none; margin-left: 1.5rem; font-weight: 600; }
  .btn { background: var(--blue); color: white; padding: 0.6rem 1.2rem; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; }
  .btn:hover { background: var(--light-blue); }
  
  .hero { 
    background-image: linear-gradient(90deg, rgba(8,13,26,0.88) 0%, rgba(8,13,26,0.45) 45%, rgba(8,13,26,0) 100%), url('/imgs/otis-hero-commercial-cleaning.jpg');
    background-size: cover; background-position: center; color: white; padding: 6rem 2rem; min-height: 50vh; display: flex; flex-direction: column; justify-content: center;
  }
  .hero h1 { font-size: 3rem; margin-bottom: 1rem; max-width: 600px; line-height: 1.2; }
  .hero p { font-size: 1.2rem; max-width: 500px; margin-bottom: 2rem; opacity: 0.9; }
  
  .section { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
  h2 { color: var(--blue); font-size: 2rem; margin-bottom: 2rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
  .card { background: var(--light-gray); padding: 2rem; border-radius: 8px; }
  .card h3 { color: var(--blue); margin-top: 0; }
  
  .faq { margin-bottom: 1rem; border-bottom: 1px solid #ddd; padding-bottom: 1rem; }
  .faq h4 { color: var(--blue); margin: 0 0 0.5rem 0; font-size: 1.1rem; }
  
  footer { background: var(--blue); color: white; padding: 3rem 2rem 1rem; margin-top: 4rem; }
  .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
  .footer-grid a { color: #aaa; text-decoration: none; }
  .footer-bottom { text-align: center; margin-top: 3rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); color: #aaa; font-size: 0.9rem; }
  
  @media (max-width: 768px) {
    .hero h1 { font-size: 2rem; }
    header { padding: 1rem; }
    nav a.hide-mobile { display: none; }
  }
</style>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Entretien Ménager Commercial",
  "provider": {
    "@type": "LocalBusiness",
    "name": "OTIS Entretien Commercial",
    "telephone": "+1 (438) 935-9725",
    "areaServed": "Grande Région de Montréal, Québec",
    "url": "https://otis-cleaning.vercel.app/fr/"
  },
  "areaServed": "Grand Montréal",
  "description": "Services professionnels d'entretien ménager commercial et de conciergerie pour les entreprises du Grand Montréal."
}
</script>
</head>
<body>

<header>
  <a href="/fr/" class="logo">OTIS</a>
  <nav>
    <a href="tel:+14389359725" class="hide-mobile">+1 (438) 935-9725</a>
    <a href="/services/commercial-cleaning" class="lang-switcher">EN</a>
    <a href="/fr/#quote" class="btn" style="margin-left: 1rem;">Soumission</a>
  </nav>
</header>

<div class="hero">
  <h1>Entretien Ménager Commercial Fiable à Montréal</h1>
  <p>Protocoles rigoureux, équipes d'entretien dévouées et tarification transparente. Nous rehaussons votre espace de travail pour que vous puissiez vous concentrer sur vos affaires.</p>
  <div>
    <a href="/fr/#quote" class="btn" style="padding: 1rem 2rem; font-size: 1.1rem;">Demander une soumission gratuite</a>
  </div>
</div>

<div class="section">
  <h2>La Norme OTIS</h2>
  <div class="grid">
    <div class="card">
      <h3>Qualité Constante</h3>
      <p>Nous assignons la même équipe dédiée à vos locaux, garantissant ainsi une parfaite compréhension de vos exigences spécifiques et de vos protocoles de sécurité.</p>
    </div>
    <div class="card">
      <h3>Équipements de Qualité Commerciale</h3>
      <p>Nos équipes utilisent des vadrouilles professionnelles, des systèmes en microfibre et des agents nettoyants commerciaux à pH neutre qui éliminent efficacement la saleté sans endommager vos surfaces.</p>
    </div>
    <div class="card">
      <h3>Communication Transparente</h3>
      <p>Aucun frais caché. Vous bénéficiez d'une tarification claire au pied carré et d'un support réactif de la part de notre équipe de gestion locale à Montréal.</p>
    </div>
  </div>
</div>

<div class="section" style="background: var(--light-gray); max-width: none;">
  <div style="max-width: 1200px; margin: 0 auto;">
    <h2>Ce Qui Est Inclus Dans Notre Service</h2>
    <div class="grid">
      <div>
        <ul style="line-height: 2;">
          <li>Services de conciergerie quotidiens, hebdomadaires ou sur mesure</li>
          <li>Nettoyage des surfaces à contact élevé</li>
          <li>Entretien des toilettes et réapprovisionnement des consommables</li>
          <li>Nettoyage des salles de pause et cuisinettes</li>
        </ul>
      </div>
      <div>
        <ul style="line-height: 2;">
          <li>Balayage et lavage à la vadrouille humide des planchers durs</li>
          <li>Passage de l'aspirateur sur les tapis</li>
          <li>Collecte des déchets et du recyclage</li>
          <li>Lavage des vitres intérieures et cloisons vitrées</li>
        </ul>
      </div>
    </div>
    <p style="margin-top: 2rem;"><strong>Services Additionnels :</strong> Récurage professionnel (autolaveuse) pour grandes surfaces, nettoyage après rénovation et ménage fin de bail.</p>
  </div>
</div>

<div class="section">
  <h2>Foire Aux Questions</h2>
  
  <div class="faq">
    <h4>Opérez-vous en dehors des heures de bureau ?</h4>
    <p>Oui. La majorité de notre entretien commercial s'effectue le soir ou la fin de semaine pour assurer zéro perturbation de vos opérations quotidiennes. Nous maintenons des protocoles stricts de gestion des clés et de sécurité.</p>
  </div>
  
  <div class="faq">
    <h4>Desservez-vous toute la grande région de Montréal ?</h4>
    <p>Absolument. Nous desservons les bureaux corporatifs, les cliniques et les installations commerciales à travers la grande région de Montréal.</p>
  </div>
  
  <div class="faq">
    <h4>Dois-je signer un contrat à long terme ?</h4>
    <p>Nous proposons des accords flexibles selon vos besoins, généralement standardisés sur des ententes de service de 6 ou 10 mois afin de garantir votre place dans notre itinéraire, mais nous sommes fiers de nos conditions transparentes et équitables.</p>
  </div>
  
  <div class="faq">
    <h4>Êtes-vous membre de l'ISSA Canada ?</h4>
    <p>Oui, OTIS est un fier membre de l'ISSA Canada (#102438), respectant les normes de nettoyage commercial de premier plan de l'industrie.</p>
  </div>
</div>

<div class="section" style="text-align: center; padding-bottom: 6rem;">
  <h2>Prêt à optimiser l'entretien de vos installations ?</h2>
  <p style="font-size: 1.2rem; margin-bottom: 2rem;">Planifiez une brève visite d'évaluation sur place et recevez une soumission transparente.</p>
  <a href="/fr/#quote" class="btn" style="padding: 1rem 2rem; font-size: 1.1rem; margin-right: 1rem;">Obtenir une Soumission</a>
  <a href="tel:+14389359725" style="color: var(--blue); font-weight: 600; text-decoration: none;">ou appelez le +1 (438) 935-9725</a>
</div>

<footer>
  <div class="footer-grid">
    <div>
      <h3 style="margin-top: 0;">OTIS</h3>
      <p>Entretien Commercial Premium<br>Desservant la Grande Région de Montréal<br>Québec, Canada</p>
    </div>
    <div>
      <h4 style="margin-bottom: 0.5rem;">Contact</h4>
      <p><a href="tel:+14389359725">+1 (438) 935-9725</a><br><a href="mailto:info@otiscc.ca">info@otiscc.ca</a></p>
    </div>
    <div>
      <h4 style="margin-bottom: 0.5rem;">Confiance</h4>
      <p>Membre de ISSA Canada<br>Normes de Protocoles Strictes</p>
    </div>
    <div>
      <h4 style="margin-bottom: 0.5rem;">Accès Interne</h4>
      <p><a href="/internal/blueprint">Blueprint</a><br><a href="/internal/command-center">Command Center</a></p>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2026 OTIS Entretien Commercial. Tous droits réservés.
  </div>
</footer>

</body>
</html>
"""

with open('services/commercial-cleaning.html', 'w', encoding='utf-8') as f:
    f.write(en_page)

with open('fr/services/entretien-commercial.html', 'w', encoding='utf-8') as f:
    f.write(fr_page)

print("Created Commercial Cleaning Pilot pages.")
