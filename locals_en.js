module.exports = {
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
      subsubtitle: 'Expected graduation in June 2016'
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
      description: 'Podcatcher.de is a small web application that allws you to subscribe and listen to podcasts right in your browser. We are using Node.js both for the backend, as well as for the crawler infrstructure to fetch the podcasts from RSS-Feeds. The frontend is based on Angular.js.',
      keywords: ['Angular.js', 'Node.js/Express', 'mySQL', 'rabbitMQ']
    },
    {
      name: 'RC Freunde Teltow (Work in Progress)',
      url: 'https://github.com/gotschmarcel/rcft-hackathon',
      img: '/img/rcft.png',
      description: 'Simple CMS/Blog for the RC Freunde Teltow Club to manage their news, events and gallery.',
      keywords: ['Angular.js', 'Node.js/Express', 'MongoDB']
    }
  ],
  skills: ['HTML5', 'CSS3', 'LESS', 'Node.js/Express', 'MongoDB', 'Angular.js', 'Jade', 'Git', 'Linux', 'Gulp', 'Scrum'],
  languages: ['German - Native', 'English - Good'],
  contact: {
    email: 'jan.mue19@gmail.com',
  }
}
