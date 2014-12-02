var emailAddress;
var api_data;

$(document).ready(function() {

  var image1 = $('#california-photo');
  var image2 = $('#section-coffee');
  var body = $('body')
  $(document).scroll(function() {
    var top1 = body.scrollTop() / 2;
    var top2 = body.scrollTop() / 4;
    image1.css('transform', 'translate(0, ' + top1 + 'px)');
    image2.css('transform', 'translate(0, ' + top2 + 'px)');
    if(top1 > 70) {
      image1.css('opacity', (280-top1)/100);
    }
    if(top2 > 20) {
      image2.css('opacity', (380-top2)/100);
    }
  });

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'https://api.instagram.com/v1/tags/westcoastbestcoast/media/recent?callback=?&count=36&access_token=419417011.cfa3287.2fd7043455f143dab131afb7fb6ce35e',
    success: function(response) {
      api_data = response,
      console.log(response)
    //   for (var i = 0; i < 36; i++) {
    //     $('#instafeed ul').append('<li><a target="_blank" href="' + response.data[i].link + '"><img scr="' + response.data[i].images.standard_resolution.url + '"></img></a></li>'),
    //   }
    }
  });

  // Email form
  var firebaseEmailAddresses = new Firebase('https://fewd-dev.firebaseio-demo.com/emailaddresses');
  emailAddresses.on('child_added', function(snapshot) {
    var emailAddress = snapshot.val();
    console.log(emailAddress);
  });

  $('.emailForm').submit(function() {
    var newEmailAddress = $('.newEmailAddress').val();
    var addedEmailAddress = { text: newEmailAddress };
    firebaseEmailAddresses.push(addedEmailAddress);
    $('.newEmailAddress').val("");
    return false;
  });

});