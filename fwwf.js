var emailAddress;
var api_data;

$(document).ready(function() {

  var image1 = $('#section-surf');
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

  // Instagram feed
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'https://api.instagram.com/v1/users/419417011/media/recent?callback=?&access_token=419417011.cfa3287.2fd7043455f143dab131afb7fb6ce35e',
    success: function(response) {
      api_data = response;
      console.log(response)
      for (var i = 0; i < response.data.length; i++) {
        console.log(response.data[i].length);
        console.log(response.data[i].link);
        console.log(response.data[i].images.standard_resolution.url);
        $('#instafeed ul').append('<li><a target="_blank" href="' + response.data[i].link + '"><img src="' + response.data[i].images.standard_resolution.url + '"></img></a></li>');
      }
    }
  });

  // Email form
  var firebaseEmailAddresses = new Firebase('https://f5snupukwtz.firebaseio-demo.com/');
  $('.emailForm-submit').onclick(function () {
    var emailAddress = $('.newEmailAddress').val();
    firebaseEmailAddresses.push( {email: emailAddress} );
    $('.newEmailAddress').val("");
    return false;
  })
  emailAddresses.on('child_added', function(snapshot) {
    var emailAddress = snapshot.val();
    console.log(emailAddress);
  });

  // Photography gallery
  $('#filters').on('click', 'li.beach-filter', function() {
    console.log('Beach filter clicked!');
    $('img.beach-filter').show();
    $('img.cafe-filter').hide();
  });
  $('#filters').on('click', '.cafe-filter', function() {
    $('img.cafe-filter').show();
    $('img.beach-filter').hide();
  });
  $('#filters').on('click', '.australia-filter', function() {
    $('img.australia-filter').show();
    $('img.california-filter').hide();
  });
  $('#filters').on('click', '.california-filter', function() {
    $('img.california-filter').show();
    $('img.australia-filter').hide();
  });

  // Contact form
  var dataRef = new Firebase('https://rmhhct2pjdu.firebaseio-demo.com/');
  $('#contact-form').on('submit', function() {
    var name = $('#name').val();
    // var action = How do I choose the radio button checked?
    dataRef.push( {name: name, action: action} );
    $('#name').val("");
    return false;
  });
});