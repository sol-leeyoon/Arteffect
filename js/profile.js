$(document).ready(function() {
  $('#profile-picture').on('change', function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#profile-picture-preview').attr('src', e.target.result);
      $('#profile-picture-filename').text(file.name);
    };
    reader.readAsDataURL(file);
  });

  $('#save-button').on('click', function() {
    // Save the user information
    alert('Profile saved!');
  });

  $('#home-button').on('click', function() {
    window.location.href = 'userhome.html';
  });
});
