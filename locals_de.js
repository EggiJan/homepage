module.exports = {
  lang: "de",
  headlines: {
    profileTitle: 'Hallo, ich bin Jan Müller',
    profileSubtitle: 'Senior Backend - Cloud Engineer @ Egoditor',
    coverText: 'Aktuell arbeite ich primär im Bereich Fullstack Web Development kümmere mich aber auch um die Betreuung der Production Infrastruktur auf AWS. Weitere Informationen zu Projekten, an denen ich in meiner Freizeit arbeite oder in meinem Nebenjob gearbeitet habe sind im Bereich Projekte zu finden.',
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
      timeRange: '12/2014 - 09/2016',
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
      timeRange: '10/2021 - heute',
      title: 'Egoditor GmbH, Remote',
      subtitle: 'Senior Backend - Cloud Engineer',
      link: 'https://www.egoditor.com',
      keywords: ['AWS', 'Node.js', 'TypeScript']
    },
    {
      timeRange: '11/2016 - 09/2021',
      title: 'meinUnterricht GmbH, Berlin',
      subtitle: 'FullStack Engineer, Senior Engineer (seit 10/2019)',
      link: 'https://meinunterricht.de',
      keywords: ['AWS', 'Node.js', 'React', 'Angular.js', 'MongoDB', 'MySQL', 'Docker', 'Serverless']
    },
    {
      timeRange: '06/2014 - 01/2017',
      title: 'ilmCon GmbH, Ilmenau',
      subtitle: 'Werkstudent Web-Entwicklung',
      link: 'http://ilmcon.de',
      keywords: ['HTML', 'CSS', 'JavaScript', 'Node.js/Express', 'MongoDB']
    },
    {
      timeRange: '04/2013 - 09/2013',
      title: 'ePages GmbH, Jena',
      link: 'http://epages.com',
      subtitle: 'R&D Frontend - Praktikant User Interface Design / Web Design',
      keywords: ['HTML', 'CSS', 'Agile/Scrum']
    }
  ],
  projects: [
    {
      name: 'SimpleMQTT für Slack',
      url: 'https://simplemqtt.theoi.de',
      img: '/img/simplemqtt.png',
      webp: '/img/simplemqtt.webp',
      description: 'Slack App zum Hinzufügen von Slash-Commands zur Kommunikation mit MQTT Brokern. Slash-Commands beinhalten das Speichern von Brokern, Targets und Topics sowie das Senden von Nachrichten.',
      keywords: ['JavaScript', 'DynamoDB', 'AWS Lambda', 'Serverless', 'S3']
    },
    {
      name: 'MQTT Dashboard',
      url: 'https://github.com/DirkHeinke/mqttDashboard',
      img: '/img/mqtt.png',
      webp: '/img/mqtt.webp',
      description: 'Web-basiertes Dashboard für die Verbindung mit MQTT Brokern und das Senden und Empfangen von Nachrichten mittels Button, Text oder Message-Log Widgets. Außerdem ermöglicht es die Verwaltung mehrerer Dashboards und Verbindungen. Das Projekt kommt ohne Framework aus und hält Daten im LocalStorage.',
      keywords: ['JavaScript', 'LocalStorage', 'mqtt']
    },
    {
      name: 'Podcatcher.de (eingstellt)',
      img: '/img/podcatcher.png',
      webp: '/img/podcatcher.webp',
      description: 'Web-App zum Abonnieren und Hören von Podcasts im Browser. Crawler Infrastrukur auf Node.js Basis und Anbindung an iTunes Podcast-Verzeichnis.',
      keywords: ['Angular.js', 'Node.js/Express', 'MySQL', 'rabbitMQ']
    },
    {
      name: 'Faircut.net (eingestellt)',
      img: '/img/faircut.png',
      webp: '/img/faircut.webp',
      description: 'Plattform zur Vermittlung von Haarschnitten in London. Während meiner Nebentätigkeit bei der ilmCon GmbH war ich für diese Plattform an der Planung und Konzeption neuer Features gemeinsam mit dem Kunden und deren Umsetzung beteiligt.',
      keywords: ['JavaScript', 'Jade', 'Node.js/Express', 'MongoDB']
    }
  ],
  skills: ['HTML5', 'CSS3', 'Node.js', 'JavaScript', 'MongoDB', 'Angular.js', 'React', 'Git', 'Linux', 'AWS', 'Docker', 'Serverless', 'Scrum'],
  languages: ['Deutsch - Muttersprache', 'Englisch - Gut'],
  footer: {
    imprint: {
      linkLabel: 'Impressum',
      legalDisclosure: {
        headline: 'Angaben gemäß § 5 TMG',
        contact: {
          name: 'Jan Müller',
          address: 'Grünberger Straße 68',
          zip: '10245',
          town: 'Berlin'
        }
      },
      contact: {
        headline: 'Kontakt'
      },
      disclaimer: {
        headline: 'Haftungsausschluss (Disclaimer)',
        accountabilityContent: {
          headline: 'Haftung für Inhalte',
          content: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
        },
        accountabilityLinks: {
          headline: 'Haftung für Links',
          content: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
        },
        copyright: {
          headline: 'Urheberrecht',
          content: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
        }
      }
    },
    privacy: {
      linkLabel: 'Datenschutz',
      piwik: {
        headline: 'Datenschutz für die Nutzung von Piwik',
        content: 'Diese Website benutzt Piwik, eine Open-Source-Software zur statistischen Auswertung der Besucherzugriffe. Piwik verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieses Internetangebotes werden auf dem Server des Anbieters in Deutschland gespeichert. Die IP-Adresse wird sofort nach der Verarbeitung und vor deren Speicherung anonymisiert. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können.'
      }
    }
  },
  contact: {
    text: 'Sende eine E-Mail',
    email: {
      name: 'hallo',
      domain: 'muellerjan.de'
    }
  },
  analytics: false,
  cookieMessage: 'Diese Website verwendet Cookies. Wenn Sie die Website weiter nutzen, stimmen Sie der Verwendung von Cookies zu.'
}
