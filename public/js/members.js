$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.username);
  });

  // $('.addbtn').on('click', function(event) {
  //     $('.application-form').toggleClass('hidden');
  //     $('.table').css('width','100%');
  //   });
});
