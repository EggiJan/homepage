const routie = require('routie-2');

function show(route) {
  const sectionId = '#section-' + route;
  const linkId = '#link-' + route;

  const activatedLink = document.querySelector(linkId);
  const activatedSection = document.querySelector(sectionId);

  if (activatedLink.classList.contains('active')) {
    return;
  }

  // Switch nav state
  const currentActiveNavItem = document.querySelector('.nav-link.active');
  currentActiveNavItem.classList.remove('active');
  activatedLink.classList.add('active');

  // Switch section
  const activeSec = document.querySelector('section.content.active-section');
  activeSec.classList.remove('active-section');
  activeSec.classList.add('hidden');

  activatedSection.classList.add('active-section');
  activatedSection.classList.remove('hidden');
}

function bindRouter() {
  routie({
    '': function () {
      show('me')
    },
    'me': function () {
      show('me')
    },
    'resume': function () {
      show('resume')
    },
    'projects': function () {
      show('projects')
    },
    'imprint': function () {
      show('imprint')
    },
    'privacy': function () {
      show('privacy')
    },
  });
}

module.exports = bindRouter;