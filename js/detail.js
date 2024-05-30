$(document).ready(function() {
  $('.author-link').on('click', function(event) {
    event.stopPropagation();
    var author = $(this).data('author');
    window.location.href = 'userhome.html?author=' + author;
  });

  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.glider-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
});
