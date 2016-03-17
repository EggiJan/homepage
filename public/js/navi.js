function bindNavEvents() {
  $('a.nav-link').each(function() {
    $(this).on('click', function() {
      var sectionId = $(this).data('section')
      var selectedSection = $('#' + sectionId)
      var clickedItem = $(this)

      if(clickedItem.hasClass('active')) {
        return;
      } else {

        // Switch nav state
        $('.nav-link.active').removeClass('active')
        clickedItem.addClass('active')

        // Switch content
        $('section.content.active-section').fadeTo('slow', 0).removeClass('active-section').addClass('hidden')
        selectedSection.addClass('active-section').fadeTo('slow', 1).removeClass('hidden')
      }
    })
  })
}

$(document).ready(function() {
  bindNavEvents.call(this);
})
