module.exports = {
  lang: "de",
  headlines: {
    profileTitle: 'Hallo, ich bin Jan Müller',
    profileSubtitle: 'Medientechnologie Student und Web Developer',
    coverText: '\"Was macht Jan eigentlich den ganzen Tag?\" - Um diese Frage zu beantworten, habe ich diese Website erstellt. Relevante Informationen über mich sind hier zu finden. Viel Spaß beim Umsehen!',
    skills: 'Fähigkeiten',
    education: 'Ausbildung',
    workExperience: 'Berufserfahrung',
    languages: 'Sprachen',
    contact: 'Kontakt',
    profile: 'Profil',
    cv: 'Lebenslauf',
    projects: 'Projekte',
    visitPage: 'Zur Website',
    alternateLangIcon: '/img/en.png',
    alternateLangLink: '/en/'
  },
  education: [
    {
      timeRange: '12/2014 - heute',
      title: 'Technische Universität Ilmenau',
      subtitle: 'Master of Science (M.Sc.), Medientechnologie',
      subsubtitle: 'Voraussichtlicher Abschluss: Oktober 2016'
    },
    {
      timeRange: '10/2010 - 12/2014',
      title: 'Technische Universität Ilmenau',
      subtitle: 'Bachelor of Science (B.Sc.), Medientechnologie'
    }
  ],
  work_experience: [
    {
      timeRange: '6/2014 - heute',
      title: 'ilmCon GmbH, Ilmenau',
      subtitle: 'Werkstudent Web Entwicklung',
      keywords: ['HTML', 'CSS', 'JavaScript', 'Node.js/Express', 'MongoDB']
    },
    {
      timeRange: '4/2013 - 9/2013',
      title: 'ePages GmbH, Jena',
      subtitle: 'R&D Frontend - Praktikant User Interface Design / Web Design',
      keywords: ['HTML', 'CSS', 'Agile/Scrum']
    }
  ],
  projects: [
    {
      name: 'Podcatcher.de',
      url: 'http://podcatcher.de',
      img: '/img/podcatcher.png',
      description: 'Web-App zum Abonnieren und Hören von Podcasts im Browser. Crawler Infrastrukur auf Node.js Basis.',
      keywords: ['Angular.js', 'Node.js/Express', 'mySQL', 'rabbitMQ']
    },
    {
      name: 'RC Freunde Teltow (Work in Progress)',
      url: 'https://rcft.gts.octans.uberspace.de',
      img: '/img/rcft.png',
      description: 'Simples Content Management System für den RC Freunde Teltow e.V. zum Verwalten von Blog, Terminen, Events und Bildern. Meine Arbeit beinhaltet die Weiterentwicklung des CMS-Backoffice auf Basis von Angular.js',
      keywords: ['Angular.js', 'Node.js/Express', 'MongoDB']
    },
    {
      name: 'Faircut.net',
      url: 'http://www.faircut.net',
      img: '/img/faircut.png',
      description: 'Plattform zur Vermittlung von Haarschnitten in London. Während meiner Nebentätigkeit bei der ilmCon GmbH war ich für diese Plattform an der Planung und Konzeption neuer Features gemeinsam mit dem Kunden und deren Umsetzung beteiligt.',
      keywords: ['JavaScript', 'Jade', 'Node.js/Express', 'MongoDB']
    }
  ],
  skills: ['HTML5', 'CSS3', 'LESS', 'Node.js/Express', 'MongoDB', 'Angular.js', 'Jade', 'Git', 'Linux', 'Gulp', 'Scrum'],
  languages: ['Deutsch - Muttersprache', 'Englisch - Gut'],
  contact: {
    email: 'hallo@muellerjan.de'
  },
  analytics: false
}
