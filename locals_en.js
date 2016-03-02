module.exports = {
  lang: "en",
  headlines: {
    profileTitle: 'Hi, I am Jan Mueller',
    profileSubtitle: 'Student of Media Technology and Web Developer',
    coverText: 'To give you an impression of what I am doing day to day, I created this website. When I am not busy with finishing my studies, I spend my time working on small web projects with friends and fellow students. Feel free to click around!',
    skills: 'Skills',
    education: 'Education',
    workExperience: 'Work Experience',
    languages: 'Languages',
    contact: 'Contact',
    profile: 'Profile',
    cv: 'Education & Work',
    projects: 'Projects',
    visitPage: 'Visit Website',
    alternateLangIcon: '/img/de.png',
    alternateLangLink: '/de/'
  },
  education: [
    {
      timeRange: '12/2014 - present',
      title: 'Technische Universität Ilmenau',
      subtitle: 'Master of Science (M.Sc.), Media Technology',
      subsubtitle: 'Expected graduation in Oktober 2016'
    },
    {
      timeRange: '10/2010 - 12/2014',
      title: 'Technische Universität Ilmenau',
      subtitle: 'Bachelor of Science (B.Sc.), Media Technology'
    }
  ],
  work_experience: [
    {
      timeRange: '6/2014 - present',
      title: 'ilmCon GmbH, Ilmenau',
      subtitle: 'Working student in Web Development',
      keywords: ['HTML', 'CSS', 'JavaScript', 'Node.js/Express', 'MongoDB']
    },
    {
      timeRange: '4/2013 - 9/2013',
      title: 'ePages GmbH, Jena',
      subtitle: 'R&D Frontend - Intern in User Interface Design / Web Design',
      keywords: ['HTML', 'CSS', 'Agile/Scrum']
    }
  ],
  projects: [
    {
      name: 'Podcatcher.de',
      url: 'http://podcatcher.de',
      img: '/img/podcatcher.png',
      description: 'Podcatcher.de is a small web application that allows you to subscribe and listen to podcasts right in your browser. We are using Node.js both for the backend, as well as for the crawler infrastructure to fetch podcasts from RSS-Feeds. The frontend is based on Angular.js.',
      keywords: ['Angular.js', 'Node.js/Express', 'mySQL', 'rabbitMQ']
    },
    {
      name: 'RC Freunde Teltow (Work in Progress)',
      url: 'https://rcft.gts.octans.uberspace.de',
      img: '/img/rcft.png',
      description: 'Simple CMS/Blog for the RC Freunde Teltow Club to manage their news, events and gallery. My work includes the development of the CMS-Backoffice using Angular.js.',
      keywords: ['Angular.js', 'Node.js/Express', 'MongoDB']
    },
    {
      name: 'Faircut.net',
      url: 'http://www.faircut.net',
      img: '/img/faircut.png',
      description: 'During my work at ilmCon GmbH I worked for the faircut.net platform where users can find and book London based haircuts. My work included planning and discussing new features with the client and the implementation of those features.',
      keywords: ['JavaScript', 'Jade', 'Node.js/Express', 'MongoDB']
    }
  ],
  skills: ['HTML5', 'CSS3', 'LESS', 'Node.js/Express', 'MongoDB', 'Angular.js', 'Jade', 'Git', 'Linux', 'Gulp', 'Scrum'],
  languages: ['German - Native', 'English - Good'],
  contact: {
    email: 'hallo@muellerjan.de',
  },
  analytics: false
}
