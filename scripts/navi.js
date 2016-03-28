function show(route) {
  var sectionId = '#section-' + route;
  var linkId = '#link-' + route;

  var activatedlink = $(linkId);
  var activatedSection = $(sectionId);

  if(activatedlink.hasClass('active')) {
      return;
  } else {
    // Switch nav state
    $('.nav-link.active').removeClass('active');
    activatedlink.addClass('active');

    // Switch section
    $('section.content.active-section').fadeTo('fast', 0).removeClass('active-section').addClass('hidden');
    activatedSection.addClass('active-section').fadeTo('fast', 1).removeClass('hidden')
  }
}

function bindRouter() {
  routie({
    '': function() {
      show('me')
    },
    'me': function() {
      show('me')
    },
    'resume': function() {
      show('resume')
    },
    'projects': function() {
      show('projects')
    },
    'imprint': function() {
      show('imprint')
    },
    'privacy': function() {
      show('privacy')
    },
  });
}

$(document).ready(function() {
  bindRouter.call(this);
});
