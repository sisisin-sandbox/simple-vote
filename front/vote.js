import $ from 'jquery';

$(function () {
  $('.vote-button').on('click', function () {
    $.ajax({
      url: '/api/vote',
      method: 'POST',
    }).done(function (data) {
      console.log(data);
    });
  });
});
