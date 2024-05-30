$(document).ready(function() {
  $('.tabs ul li').on('click', function() {
    $('.tabs ul li').removeClass('is-active');
    $(this).addClass('is-active');
    var selectedTab = $(this).data('tab');
    if (selectedTab === 'posts') {
      $('#posts-content').show();
      $('#comments-content').hide();
    } else {
      $('#posts-content').hide();
      $('#comments-content').show();
    }
  });
});
