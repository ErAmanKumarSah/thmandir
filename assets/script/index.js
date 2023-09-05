$(document).ready(function () {


  /* resize section device height*/
  var wHeight = $(window).height();
  var mHeight = $(window).height() - 80 ;
  if ($(window).width() > 767) {
    $('#home-page, .item').css('height', wHeight);
  }
  
  if ($(window).width() < 767) {
    $('#home-page .item ,#home-page .item img').css('height', mHeight - 280);
    // $('.carousel-indicators li').hide();

    // $('.navbar-nav li').click(function () {
    //  $('.mobnavbar').slideToggle();
    // });
    // $('.mobnavbar-btn').click(function () {
    //  $('.mobnavbar').slideToggle();
    // });
    // setTimeout(function(){ $('.mobnavbar').css('display', 'block'); }, 1000);

    // $('.mainmenu li a').click(function () {
    //   $('.nav').slideUp();
    // });

  }
  $('.aatmjyoti-member-image, .navyuvasangh-member-image').mouseover(function () {
    $(this,'.aatmjyoti-member-image, .navyuvasangh-member-image').addClass('border-black');
  });
  $('.aatmjyoti-member-image, .navyuvasangh-member-image').mouseout(function () {
    $(this,'.aatmjyoti-member-image, .navyuvasangh-member-image').removeClass('border-black');
  });

  var aatmjyoti_member_count = $('.aatmjyoti-member').length;
  // console.log(aatmjyoti_member_count);
  // if (aatmjyoti_member_count > 5) {
  //  $( ".aatmjyoti-member:nth-child(5)" ).nextAll().css( "display", "none" );
  // }

  $('.ramnavmi_21').click(function(){
    $('#ramnavmi21').show();
  });
  $('.ramnavmi_22').click(function(){
    $('#ramnavmi22').show();
  });
  $('.ramnavmi_23').click(function(){
    $('#ramnavmi23').show();
  });
  // Mobile nav menu toggle
  $('.menuitem').click(function(){
    $('.hamburger-menu').trigger( "click" );
  });

  $('.aatmjyoti-member-list, .navyuvasangh-member-list, .tmDonationList123').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass: true,
    transitionStyle: "fade",
    nav: true,
    navText: ["<img src='http://thakurbarimandirfalka.netlify.com/assets/images/right-arrow.png'>","<img src='http://thakurbarimandirfalka.netlify.com/assets/images/left-arrow.png'>"],
    // stopOnHover: true,
    // autoplayHoverPause:true,
    slideBy: 1,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
        margin: 0
      },
      767: {
        items: 2,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        loop: false
      },
      1199: {
        items: 4,
        loop: true,
        nav: true
      }
    }
  });


  $('#dharamshala-booking-form-submit').click(function () {
    var dsbname = $("#dsbname").val();
    var dsbnumber = $("#dsbnumber").val();
    var dsbreason = $('#dsbreason').val();
    var dsbfromdate = $("#dsbfromdate").val();
    var dsbtodate = $("#dsbtodate").val();
    var dsbemail = $("#dsbemail").val();
    var dsbmessage = $("#dsbmessage").val();
    // console.log(dsbname);
    // console.log(dsbnumber);
    // console.log(dsbreason);
    // console.log(dsbfromdate);
    // console.log(dsbtodate);
    // console.log(dsbemail);
    // console.log(dsbmessage);
    //$('.success-message').show();
    //$('.contact-submitpartner .btn').prop('disabled', true);

    var datastr = JSON.stringify({ 'dsbname': dsbname, 'dsbreason': dsbreason, 'dsbfromdate': dsbfromdate, 'dsbtodate': dsbtodate, 'dsbemail': dsbemail, 'dsbmessage': dsbmessage });
    $.ajax({
      type: "POST",
      url: "https://dharamshala-booking-form.herokuapp.com/send",
      data: datastr,
      cache: false,
      success: function success(html) {
        $('.success-message').show();
        $('input').val('');
      }
    });

    // $('.contact-page-form').hide();
  });

  // $('.owl-next').val('');
  // $('.owl-prev').val('');



//Jquery ready function end here
});