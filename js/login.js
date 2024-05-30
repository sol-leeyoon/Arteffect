$(document).ready(function() {
  var isLoggedIn = false; // 로그인 여부
  var userInfo = {
    name: "John Doe",
    grade: "Gold",
    iconClass: "fas fa-user-circle" // FontAwesome 아이콘 클래스
  };

  function updateLoginStatus() {
    if (isLoggedIn) {
      $('#user-info').text(userInfo.name + " (" + userInfo.grade + ")");
      $('#login-button').hide();
      $('#logout-button').show();
      $('#profile-button').show();
      $('#user-icon').show();
      $('#user-icon i').attr('class', userInfo.iconClass);
    } else {
      $('#user-info').text("Not logged in");
      $('#login-button').show();
      $('#logout-button').hide();
      $('#profile-button').hide();
      $('#user-icon').hide();
    }
  }

  // 예제: 로그인 상태 변경
  $('#login-button').on('click', function() {
    isLoggedIn = true;
    updateLoginStatus();
  });

  $('#logout-button').on('click', function() {
    isLoggedIn = false;
    updateLoginStatus();
  });

  $('#profile-button').on('click', function() {
    window.location.href = 'profile.html';
  });

  updateLoginStatus(); // 초기 로그인 상태 업데이트
});
