module.exports = {
  headlines: {
    profileTitle: 'Hallo, ich bin Jan Müller',
    profileSubtitle: 'Medientechnologie Student und Web Developer',
    coverText: 'Neben meinem Studium der Medientechnologie, das ich Mitte 2016 mit dem Master Of Science (M. Sc.) abschließen werde, entwickle ich privat mit Freunden und Kommilitonen sowie bei meiner Tätigkeit als Werkstudent kleine Web-Applikationen. Bei der Entwicklung beteilige ich mich sowohl im Backend mit Node.js/Express und MongoDB, als auch im Frontend mit klassischem HTML/CSS und Frameworks, wie Angular.js.',
    skills: 'Fähigkeiten',
    education: 'Ausbildung',
    workExperience: 'Berufserfahrung',
    languages: 'Sprachen',
    contact: 'Kontakt',
    profile: 'Profil',
    cv: 'Lebenslauf',
    projects: 'Projekte',
    visitPage: 'Zur Website'
  },
  education: [
    {
      timeRange: '12/2014 - heute',
      title: 'Technische Universität Ilmenau',
      subtitle: 'Master of Science (M.Sc.), Medientechnologie'
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
      img: '../public/img/podcatcher.png',
      description: 'Web-App zum Abbonieren und Hören von Podcasts im Browser. Crawler Infrastrukur auf Node.js Basis.',
      keywords: ['Angular.js', 'Node.js/Express', 'mySQL', 'rabbitMQ']
    },
    {
      name: 'RC Freunde Teltow (Work in Progress)',
      url: 'https://github.com/gotschmarcel/rcft-hackathon',
      img: '../public/img/rcft.png',
      description: 'Simples Content Management System zum Verwalten von Blog, Terminen, Events und Bildern',
      keywords: ['Angular.js', 'Node.js/Express', 'MongoDB']
    }
  ],
  skills: ['HTML5', 'CSS3', 'LESS', 'Node.js/Express', 'MongoDB', 'Angular.js', 'Jade', 'Git', 'Linux', 'Gulp', 'Scrum'],
  languages: ['Deutsch - Muttersprache', 'Englisch - Gut'],
  contact: {
    email: 'jan.mue19@gmail.com',

  }
}
