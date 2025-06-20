module.exports = {
  lang: "en",
  headlines: {
    profileTitle: 'Hi, I am Jan Mueller',
    profileSubtitle: 'Staff Engineer @ Bitly',
    coverText: 'I\'m mostly working in FullStack Web Development paired with some DevOps like maintaining infrastructure on AWS. If you\'re interested in some side-projects I am working on with friends, you can find them in the projects section. Feel free to click around!',
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
      timeRange: '12/2014 - 09/2016',
      title: 'Technische Universität Ilmenau',
      subtitle: 'Master of Science (M.Sc.), Media Technology'
    },
    {
      timeRange: '10/2010 - 12/2014',
      title: 'Technische Universität Ilmenau',
      subtitle: 'Bachelor of Science (B.Sc.), Media Technology'
    }
  ],
  work_experience: [
    {
      timeRange: '01/2023 - present',
      title: 'Bitly Europe GmbH, Remote',
      subtitle: 'Staff Engineer',
      link: 'https://bitly.com',
      keywords: ['TypeScript', 'Golang', 'React', 'AWS']
    },
    {
      timeRange: '10/2021 - 12/2022',
      title: 'Bitly Europe GmbH, Remote',
      subtitle: 'Senior Backend - Cloud Engineer',
      link: 'https://bitly.com',
      keywords: ['AWS', 'Node.js', 'TypeScript']
    },
    {
      timeRange: '11/2016 - 09/2021',
      title: 'meinUnterricht GmbH, Berlin',
      subtitle: 'FullStack Engineer, Senior Engineer (since 10/2019)',
      link: 'https://meinunterricht.de',
      keywords: ['AWS', 'Node.js', 'React', 'Angular.js', 'MongoDB', 'MySQL', 'Docker', 'Serverless']
    },
    {
      timeRange: '06/2014 - 01/2017',
      title: 'ilmCon GmbH, Ilmenau',
      link: 'http://ilmcon.de',
      subtitle: 'Working student in Web Development',
      keywords: ['HTML', 'CSS', 'JavaScript', 'Node.js/Express', 'MongoDB']
    },
    {
      timeRange: '04/2013 - 09/2013',
      title: 'ePages GmbH, Jena',
      link: 'http://epages.com',
      subtitle: 'R&D Frontend - Intern in User Interface Design / Web Design',
      keywords: ['HTML', 'CSS', 'Agile/Scrum']
    }
  ],
  projects: [
    {
      name: 'SimpleMQTT for Slack',
      url: 'https://simplemqtt.theoi.de',
      img: '/img/simplemqtt.png',
      webp: '/img/simplemqtt.webp',
      description: 'Slack App that adds slash-commands to communicate with MQTT brokers. Slash-commands can be used to add brokers, targets and topics and sending messages.',
      keywords: ['JavaScript', 'DynamoDB', 'AWS Lambda', 'Serverless', 'S3']
    },
    {
      name: 'MQTT Dashboard',
      url: 'https://github.com/DirkHeinke/mqttDashboard',
      img: '/img/mqtt.png',
      webp: '/img/mqtt.webp',
      description: 'Browser-based MQTT-Dashboard to connect to an MQTT Broker. The dashboard allows you to create different widgets to send or consume messages. The project does not use any frameworks and keeps all data in the localstorage of the browser.',
      keywords: ['JavaScript', 'LocalStorage', 'mqtt']
    },
    {
      name: 'Podcatcher.de (permanently closed)',
      img: '/img/podcatcher.png',
      webp: '/img/podcatcher.webp',
      description: 'Podcatcher.de is a web application that allows you to subscribe and listen to podcasts in your browser. We are using Node.js both for the backend, as well as for the crawler infrastructure to fetch podcasts from RSS-Feeds. The frontend is based on Angular.js.',
      keywords: ['Angular.js', 'Node.js/Express', 'MySQL', 'rabbitMQ']
    },
    {
      name: 'Faircut.net (permanently closed)',
      img: '/img/faircut.png',
      webp: '/img/faircut.webp',
      description: 'During my work at ilmCon GmbH I worked for the faircut.net platform where users can find and book London based haircuts. My work included planning and discussing new features with the client and the implementation of those features.',
      keywords: ['JavaScript', 'Jade', 'Node.js/Express', 'MongoDB']
    }
  ],
  skills: ['HTML5', 'CSS3', 'Node.js', 'JavaScript', 'MongoDB', 'Angular.js', 'React', 'Git', 'Linux', 'AWS', 'Docker', 'Serverless', 'Scrum'],
  languages: ['German - Native', 'English - Good'],
  footer: {
    imprint: {
      linkLabel: 'Imprint',
      legalDisclosure: {
        headline: 'Information in accordance with section 5 TMG',
        contact: {
          name: 'Jan Müller',
          address: 'Am Palstek 6',
          zip: '26122',
          town: 'Oldenburg'
        }
      },
      contact: {
        headline: 'Contact'
      },
      disclaimer: {
        headline: 'Disclaimer',
        accountabilityContent: {
          headline: 'Accountability for content',
          content: 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents\' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).'
        },
        accountabilityLinks: {
          headine: 'Accountability for links',
          content: 'Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.'
        },
        copyright: {
          headline: 'Copyright',
          content: 'Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).'
        }
      }
    },
    privacy: {
      linkLabel: 'Privacy',
      piwik: {
        headline: 'Piwik',
        content: 'This website uses Piwik, a web analytics open-source software. Piwik uses “cookies”, which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address anonymized prior to its storage) will be stored on the server of the service provider in Germany. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website.'
      }
    }
  },
  contact: {
    text: 'Send an email',
    email: {
      name: 'hallo',
      domain: 'muellerjan.de'
    }
  },
  analytics: false,
  cookieMessage: 'This website uses cookies. By closing this message, you consent to our cookies on this device in accordance with our cookie policy unless you have disabled them.'
}
