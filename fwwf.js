$(document).ready(function() {

//Topmenu nav
  $('.nav-topmenu-col-1 a').on('mouseenter', function() { 
    $('.has-dropdown-col-1').slideDown(); 
  });
  $('.nav-topmenu-col-1 a').on('mouseleave', function() { 
    $('.has-dropdown-col-1').slideUp(); 
  });
  $('.nav-topmenu-col-2 a').on('mouseenter', function() { 
    $('.has-dropdown-col-2').slideDown(); 
  });
  $('.nav-topmenu-col-2 a').on('mouseleave', function() { 
    $('.has-dropdown-col-2').slideUp(); 
  });
  $('.nav-topmenu-col-3 a').on('mouseenter', function() { 
    $('.has-dropdown-col-3').slideDown(); 
  });
  $('.nav-topmenu-col-3 a').on('mouseleave', function() { 
    $('.has-dropdown-col-3').slideUp(); 
  });
  $('.nav-topmenu-col-4 a').on('mouseenter', function() { 
    $('.has-dropdown-col-4').slideDown(); 
  });
  $('.nav-topmenu-col-4 a').on('mouseleave', function() { 
    $('.has-dropdown-col-4').slideUp(); 
  });

  //Main image.

  // var image = $(".content-wrapper img");
  // var body = $("body")
  // $(document).scroll(function() {
  //   var top = body.scrollTop() / 2;
  //   image.css('transform', 'translate(0, ' + top + 'px)');
  //   if(top > 70) {
  //     image.css('opacity', (170-top)/100);
  //   }
  // });

  //Signup submit.

  


});



  //Instagram integration.
  // var tag = "wcbc";
  // var count = 10;
  // var access_token = "22033045.ea9028a.eec94286a2e049429fe51c3fbc95db20";
  // var access_parameters = {access_token: access_token};


//   function grabImages(access_parameters) {
//     var instagramUrl = "https://api.instagram.com/v1/tags/" + 
//       tag + 
//       "/media/recent?callback=?&count=" + 
//       count;
//     $.getJSON(instagramUrl, access_parameters, onDataLoaded);
//   }

//   // function onDataLoaded(instagram_data) {
//   //   if (instagram_data.meta.code == 200) {
//   //     var photos = instagram_data.data;
//   //     if (photos.length > 0) {
//   //       for (i = 0; i < photos.length; i++) {
//   //         var photo = photos[key];
//   //         $('#instagram-target').append('thumbnail_url');
//   //       }
//   //     }
//   //     else {
//   //       $('#instagram-target').append("No West Coast love to be found!");
//   //     }
//   //     else {
//   //       var errorMessage = data.meta.error_message;
//   //       $("#target").append("No West Coast love to be found. Instagram said: " + errorMessage);
//   //     }
//   //   }
//   }

//   // grabImages(access_parameters);

  
// });
