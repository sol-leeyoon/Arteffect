$(document).ready(function() {
  var dummyData = {
    music: [
      { title: "Music Card 1", author: "author1", posted: "2 hours ago", imageUrl: "https://via.placeholder.com/150", hashtags: ["#music", "#rock"] },
      { title: "Music Card 2", author: "author2", posted: "1 day ago", imageUrl: "https://via.placeholder.com/150", hashtags: ["#music", "#jazz"] }
    ],
    art: [
      { title: "Art Card 1", author: "author1", posted: "3 hours ago", imageUrl: "https://via.placeholder.com/150", hashtags: ["#art", "#painting"] },
      { title: "Art Card 2", author: "author2", posted: "2 days ago", imageUrl: "https://via.placeholder.com/150", hashtags: ["#art", "#sculpture"] }
    ],
    calligraphy: [
      { title: "Calligraphy Card 1", author: "author1", posted: "5 hours ago", imageUrl: "https://via.placeholder.com/150", hashtags: ["#calligraphy", "#handwriting"] },
      { title: "Calligraphy Card 2", author: "author2", posted: "3 days ago", imageUrl: "https://via.placeholder.com/150", hashtags: ["#calligraphy", "#art"] }
    ]
  };

  var currentCategory = 'music'; // Default category

  function loadCards(category) {
    updateCards(dummyData[category]);
  }

  function updateCards(data) {
    var cardContainer = $('#card-container');
    cardContainer.empty();

    data.forEach(function(card) {
      var cardHtml = `
        <div class="column is-one-third" data-author="${card.author}" data-hashtags="${card.hashtags.join(' ')}">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${card.imageUrl}" alt="Card Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">${card.title}</p>
                  <p class="subtitle is-6 author-link" data-author="${card.author}">${card.author}</p>
                </div>
              </div>
              <div class="content">
                Posted ${card.posted}
                <br>
                ${card.hashtags.join(' ')}
              </div>
            </div>
          </div>
        </div>`;
      cardContainer.append(cardHtml);
    });

    $('.author-link').on('click', function(event) {
      event.stopPropagation();
      var author = $(this).data('author');
      window.location.href = 'userhome.html?author=' + author;
    });

    $('.card').on('click', function() {
      window.location.href = 'detail.html';
    });
  }

  function searchCards(query) {
    var results = dummyData[currentCategory].filter(function(card) {
      return card.title.includes(query) || card.author.includes(query) || card.hashtags.some(tag => tag.includes(query));
    });
    updateCards(results);
  }

  $('#search-button').on('click', function() {
    var query = $('#search').val();
    if (query.trim() !== "") {
      $('#filter').val('all');
      searchCards(query);
      $('#clear-search-control').show();
    }
  });

  $('#search').on('keypress', function(e) {
    if (e.which === 13) {
      $('#search-button').click();
    }
  });

  $('#clear-search-button').on('click', function() {
    $('#search').val('');
    $('#clear-search-control').hide();
    loadCards(currentCategory);
  });

  $('#filter').on('change', function() {
    var selectedAuthor = $(this).val();
    if (selectedAuthor === 'all') {
      $('#card-container .column').show();
    } else {
      $('#card-container .column').hide();
      $('#card-container .column[data-author="' + selectedAuthor + '"]').show();
    }
  });

  $('.tabs ul li').on('click', function() {
    $('.tabs ul li').removeClass('is-active');
    $(this).addClass('is-active');
    currentCategory = $(this).data('category');
    loadCards(currentCategory);
    $('#search').val('');
    $('#clear-search-control').hide();
  });

  loadCards(currentCategory);
});
