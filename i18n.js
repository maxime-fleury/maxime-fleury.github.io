(() => {
  const language = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'fr';
  const translations = {
    'Maxime Fleury, développeur fullstack & DevOps à Dijon. Développement web, infrastructure et réseau : découvrez mon parcours et mes réalisations.': 'Maxime Fleury, fullstack developer and DevOps practitioner in Dijon, France. Explore my web development, infrastructure and networking projects.',
    'Maxime Fleury · Développeur Fullstack & DevOps': 'Maxime Fleury · Fullstack Developer & DevOps',
    'Maxime Fleury · Développeur fullstack & DevOps': 'Maxime Fleury · Fullstack Developer & DevOps',
    'Plus de 4 ans en startup médicale. Développement web, infrastructure Linux et réseau : découvrez mon parcours et mes réalisations.': 'Over four years at a medical software startup. Web development, Linux infrastructure and networking: explore my experience and projects.',
    'Maxime Fleury, développeur fullstack, DevOps et réseau à Dijon. Du code à la production.': 'Maxime Fleury, fullstack development, DevOps and networking in Dijon, France. From code to production.',
    'Développement web, infrastructure et réseau. Mon parcours et mes réalisations.': 'Web development, infrastructure and networking. My experience and projects.',
    'Maxime Fleury · Développeur fullstack · DevOps & Réseau': 'Maxime Fleury · Fullstack Developer · DevOps & Networking',
    'Aller au contenu': 'Skip to content',
    'Maxime Fleury, accueil': 'Maxime Fleury, home',
    'Navigation principale': 'Main navigation',
    'Projets': 'Projects',
    'Parcours': 'Experience',
    'Discutons': 'Let’s talk',
    'DÉVELOPPEUR FULLSTACK · DEVOPS & RÉSEAU': 'FULLSTACK DEVELOPER · DEVOPS & NETWORKING',
    'Du code à la': 'From code',
    'mise en': 'to',
    'Plus de 4 ans en startup médicale, du développement web à l’administration des serveurs.': 'Over four years at a medical software startup, from web development to server administration.',
    'Basé à Dijon · Télétravail ou présentiel.': 'Based in Dijon, France · Remote or on-site.',
    'Explorer mes projets': 'Explore my projects',
    'Télécharger mon CV': 'Download my CV (French)',
    'Développement web': 'Web development',
    'Systèmes': 'Systems',
    'Réseau': 'Networking',
    'Du développement au déploiement, une expertise de bout en bout': 'From development to deployment, end-to-end expertise',
    'UNE VISION DE BOUT EN BOUT': 'AN END-TO-END PERSPECTIVE',
    'DU WEB À L’INFRASTRUCTURE': 'FROM WEB TO INFRASTRUCTURE',
    '01 / DÉVELOPPER': '01 / DEVELOP',
    '02 / DÉPLOYER': '02 / DEPLOY',
    '03 / CONNECTER': '03 / CONNECT',
    'Systèmes & réseau': 'Systems & networking',
    'ans': 'years',
    'en startup médicale': 'at a medical software startup',
    'une approche transversale': 'a cross-disciplinary approach',
    'Du besoin': 'From idea',
    'au déploiement': 'to deployment',
    'un projet suivi de bout en bout': 'ownership throughout the project',
    'Découvrir mon parcours': 'Explore my experience',
    '01 / RÉALISATIONS': '01 / SELECTED WORK',
    'Du concret,': 'Real work,',
    'derrière le code': 'behind the code',
    'Des projets professionnels et personnels.': 'Professional and personal projects.',
    'Des besoins différents, la même envie de construire.': 'Different needs, the same drive to build.',
    'Page d’accueil PACIFIC avec la présentation du projet et les partenaires du consortium': 'PACIFIC homepage presenting the research project and consortium partners',
    'CAPTURE DE L’APPLICATION': 'APPLICATION SCREENSHOT',
    'CASIS / CONSORTIUM DE RECHERCHE': 'CASIS / RESEARCH CONSORTIUM',
    'Présenter un projet de recherche cardiaque, rendre le consortium visible et publier ses actualités scientifiques.': 'Presenting a cardiac research project, introducing its consortium and publishing scientific updates.',
    'Un projet réalisé à deux chez CASIS, avec un alternant que je supervisais, et des échanges avec un interlocuteur chez Sanofi.': 'Built at CASIS with a work-study developer I supervised, including discussions with a contact at Sanofi.',
    'Backend éditorial': 'Publishing backend',
    'Encadrement': 'Mentoring',
    'Voir le site': 'Visit the website',
    'Mon rôle et les coulisses du projet': 'My role and the work behind the project',
    'Le point de départ': 'The starting point',
    'Des slides définissaient une première direction graphique. L’objectif : en faire un site présentant le projet et les partenaires, avec un moyen de contacter l’équipe.': 'A slide deck provided the initial visual direction. The goal was to turn it into a website presenting the project and its partners, with a way to contact the team.',
    'Ma contribution': 'My contribution',
    'J’ai amélioré le design proposé et participé à la réalisation du site avec mon alternant, en assurant sa supervision. J’ai également échangé avec un interlocuteur de Sanofi dans le cadre du projet.': 'I refined the proposed design and built the website with a work-study developer I supervised. I also discussed the project with a contact at Sanofi.',
    'Au-delà de la vitrine': 'Beyond the public website',
    'Le site comprend un backend pour ajouter des articles scientifiques et d’autres publications. Une partie du travail portait donc sur la gestion des contenus, en plus de leur présentation publique.': 'The site includes a backend for adding scientific articles and other publications. The work covered content management as well as its public presentation.',
    'CASIS / INFRASTRUCTURE & RÉSEAU': 'CASIS / INFRASTRUCTURE & NETWORKING',
    'Faire vivre les applications,': 'Keeping applications running,',
    'connecter les équipes.': 'connecting teams.',
    'En complément du développement, j’ai pris en charge des environnements de production, la virtualisation et les accès aux services internes.': 'Alongside development, I managed production environments, virtualisation and access to internal services.',
    'Trois domaines d’intervention chez CASIS': 'Three areas of responsibility at CASIS',
    'VIRTUALISER': 'VIRTUALISE',
    'Montage et configuration de serveurs Ubuntu Server, virtualisation de l’infrastructure.': 'Assembling and configuring Ubuntu Server machines and virtualising the infrastructure.',
    'DÉPLOYER': 'DEPLOY',
    'Déploiement et administration des environnements de production, gestion de VPS et certificats SSL.': 'Deploying and administering production environments, managing VPS instances and SSL certificates.',
    'SÉCURISER LES ACCÈS': 'SECURE ACCESS',
    'Mise en place du pare-feu et du VPN pour donner aux postes un accès sécurisé aux services internes.': 'Setting up the firewall and VPN to provide workstations with secure access to internal services.',
    'Le besoin et mon intervention': 'The need and my contribution',
    'Le besoin': 'The need',
    'Faire fonctionner les applications de la startup et permettre aux équipes d’utiliser les services internes, tout en gérant les serveurs et les accès réseau.': 'Keeping the startup’s applications running and enabling teams to use internal services while managing servers and network access.',
    'Mon intervention': 'My contribution',
    'Administration système et réseau, configuration des environnements, certificats et VPN. Ces missions s’accompagnaient de documentation technique et de support aux utilisateurs.': 'System and network administration, environment configuration, certificates and VPN access, alongside technical documentation and user support.',
    'Interface ArXivSearch avec recherche et choix du format d’export': 'ArXivSearch interface with search and export format selection',
    'ArXivSearch · interface de recherche': 'ArXivSearch · search interface',
    'PROJET PERSONNEL / OPEN SOURCE': 'PERSONAL PROJECT / OPEN SOURCE',
    'Code source d’ArXivSearch': 'ArXivSearch source code',
    'Un outil pour rechercher des publications sur arXiv et récupérer les résultats dans un format réutilisable : Markdown, XML, YAML ou HTML.': 'A tool to search arXiv publications and retrieve results in a reusable format: Markdown, XML, YAML or HTML.',
    'API arXiv': 'arXiv API',
    'Version alpha': 'Alpha version',
    'Ce que fait l’application': 'What the application does',
    'Recherche de publications, choix du format d’export, import de fichiers et recherche dans les résultats affichés. Le projet combine manipulation de données et interactions dans le navigateur.': 'Publication search, export format selection, file import and search within displayed results. The project combines data processing with browser interactions.',
    'Ouvrir la démo': 'Open the demo',
    'Interface random-list avec treize joueurs répartis en cinq équipes': 'random-list interface with thirteen players assigned to five teams',
    'random-list · génération d’équipes': 'random-list · team generation',
    'Code source de random-list': 'random-list source code',
    'Constituer des équipes à partir d’une liste de joueurs : choisir le nombre d’équipes, ajuster les participants et générer une répartition aléatoire.': 'Build teams from a player list: choose the number of teams, adjust the participants and generate a random allocation.',
    'Interface dynamique': 'Dynamic interface',
    'Ajout, suppression et modification des joueurs, choix du nombre d’équipes et génération de la répartition. Les résultats s’affichent directement dans la page.': 'Add, remove and edit players, choose the number of teams and generate the allocation. Results appear directly on the page.',
    'Essayer l’outil': 'Try the tool',
    'D’autres explorations sur GitHub': 'More explorations on GitHub',
    'Une application.': 'One application.',
    'Tout son écosystème': 'Its entire ecosystem',
    'Comprendre toute la chaîne pour construire': 'Understanding the whole chain to build',
    'des solutions cohérentes et les maintenir.': 'coherent solutions and maintain them.',
    'Développement fullstack': 'Fullstack development',
    'Du front aux données : concevoir des interfaces, développer des API REST et faire évoluer les applications.': 'From frontend to data: designing interfaces, developing REST APIs and evolving applications.',
    'Déployer les applications, administrer les serveurs Linux et gérer les environnements virtualisés.': 'Deploying applications, administering Linux servers and managing virtualised environments.',
    'Réseau & sécurité': 'Networking & security',
    'Connecter les équipes aux services internes et sécuriser les accès comme les échanges.': 'Connecting teams to internal services and securing both access and communications.',
    'Certificats SSL · Administration réseau': 'SSL certificates · Network administration',
    '03 / PARCOURS': '03 / EXPERIENCE',
    'Apprendre.': 'Learn.',
    'Construire.': 'Build.',
    'Transmettre': 'Share',
    'Plus de quatre ans chez CASIS, une startup de l’imagerie cardiaque à Dijon. Un quotidien entre développement, infrastructure, accompagnement des équipes et support client.': 'Over four years at CASIS, a cardiac imaging startup in Dijon. My day-to-day work spanned development, infrastructure, mentoring and customer support.',
    'J’aime comprendre comment les choses fonctionnent, résoudre les problèmes et partager ce que j’apprends.': 'I enjoy understanding how things work, solving problems and sharing what I learn.',
    'Mon parcours en détail': 'Download my full CV (French)',
    'OCT. 2021 À MARS 2026': 'OCT. 2021 TO MARCH 2026',
    'Développeur Fullstack': 'Fullstack Developer',
    '& Administrateur Système / Réseau': '& System / Network Administrator',
    '· Dijon · Secteur médical': '· Dijon · Medical software',
    'Développement et maintenance d’applications web.': 'Development and maintenance of web applications.',
    'Déploiement, virtualisation et sécurisation de l’infrastructure.': 'Infrastructure deployment, virtualisation and security.',
    'Encadrement d’un alternant sur deux ans et d’un stagiaire.': 'Supervision of a work-study developer for two years and an intern.',
    'Support client et documentation technique en contexte réglementaire.': 'Customer support and technical documentation in a regulated environment.',
    'Titre professionnel': 'Professional qualification',
    'Développeur Web et Mobile': 'Web and Mobile Developer',
    '2015 À 2018': '2015 TO 2018',
    'Informatique & Électronique': 'Computer Science & Electronics',
    'Université de Bourgogne': 'University of Burgundy',
    '· Dijon · Niveau Bac+2': '· Dijon · Two years of undergraduate study',
    'Anglais C1 · Russe oral courant': 'English C1 · Fluent spoken Russian',
    'ET SI ON CONSTRUISAIT LA SUITE ?': 'LET’S BUILD WHAT COMES NEXT',
    'DIJON · TÉLÉTRAVAIL / PRÉSENTIEL': 'DIJON · REMOTE / ON-SITE',
    'Un projet, une équipe,': 'A project, a team,',
    'une': 'a',
    'Copier l’e-mail': 'Copy email',
    'Adresse e-mail copiée.': 'Email address copied.',
    'Adresse à copier : maxfdev@gmail.com': 'Address to copy: maxfdev@gmail.com',
    'Revenir en haut': 'Back to top',
    'Retour en haut ↑': 'Back to top ↑'
  };

  const t = (value) => language === 'en' ? (translations[value] ?? value) : value;
  window.portfolioI18n = { language, t };
  if (language === 'en') {
    document.documentElement.lang = 'en';
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement.closest('script, style')) nodes.push(node);
    }
    for (const node of nodes) {
      const key = node.nodeValue.trim();
      if (Object.hasOwn(translations, key)) node.nodeValue = node.nodeValue.replace(key, translations[key]);
    }
    for (const element of document.querySelectorAll('[aria-label], [alt], [title], meta[content]')) {
      for (const name of ['aria-label', 'alt', 'title', 'content']) {
        if (element.hasAttribute(name)) element.setAttribute(name, t(element.getAttribute(name)));
      }
    }
    document.querySelector('meta[property="og:locale"]').content = 'en_GB';
    document.querySelector('meta[property="og:url"]').content = 'https://maxime-fleury.is-a.dev/?lang=en';
    document.querySelector('link[rel="canonical"]').href = 'https://maxime-fleury.is-a.dev/?lang=en';
  }
  const switchLink = document.getElementById('language-switch');
  switchLink.textContent = language === 'en' ? 'FR' : 'EN';
  switchLink.href = language === 'en' ? '?lang=fr' : '?lang=en';
  switchLink.lang = language === 'en' ? 'fr' : 'en';
  switchLink.hreflang = switchLink.lang;
  switchLink.setAttribute('aria-label', language === 'en' ? 'Switch to French' : 'Passer en anglais');
})();
