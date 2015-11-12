function bindNavEvents() {
  $('nav a').each(function() {
    $(this).on('click', function() {
      var sectionId = $(this).data('section')
      var selectedSection = $('#' + sectionId)
      var clickedItem = $(this)

      if(clickedItem.hasClass('active')) {
        return;
      } else {
        $('nav .active').removeClass('active')
        clickedItem.addClass('active')
        $('section.content.active-section').removeClass('active-section').addClass('hidden')
        selectedSection.addClass('active-section').removeClass('hidden')
      }

    })
  })
}

$(document).ready(function() {
  bindNavEvents.call(this);
})
