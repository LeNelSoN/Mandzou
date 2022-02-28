$(document).ready(function () {

  $("#close").hide();
  $("#burger").on("click", function () {
        $(this).fadeOut( function () {
          $("#close").fadeIn();
        });
  });
  $("#close").on("click", function () {
    $(this).fadeOut( function () {
      $("#burger").fadeIn();
    });
  });

  $("#retour").on("click", function () {
    $('html').animate({scrollTop:0}, 'slow');
  });

  $(".subNav1").hide();
  $(".accessories").on("click", function () {
    $(".subNav1").slideToggle();
    $(".subNav2").slideUp();
  });

  $(".subNav2").hide();
  $(".costume").on("click", function () {
    $(".subNav2").slideToggle();
    $(".subNav1").slideUp();
  });

  $("div").on("click", function () {
    $(".subNav1").slideUp();
    $(".subNav2").slideUp();
  });

  $(".subNav1, .subNav2").hover(function () {
    $(".accessories, .weding, .costume, .show, .propos, .all").stop(true).fadeTo(600, 0.4);
    }, function () {
    $(".accessories, .weding, .costume, .show, .propos, .all").stop(true).fadeTo(600, 1);
    });

function fadeOut(e) {
  $(e).stop(true).fadeTo(600, 0.2)
}

    $(".accessories").hover(function () {
      $(".weding, .costume, .show, .propos, .all").stop(true).fadeTo(600, 0.4);
      }, function () {
      $(".weding, .costume, .show, .propos, .all").stop(true).fadeTo(600, 1);
      });

    $(".weding").hover(
      function () {$(".accessories, .costume, .show, .propos, .all").stop(true).fadeTo(600, 0.4);
    }, 
      function () {$(".accessories, .costume, .show, .propos, .all").stop(true).fadeTo(600, 1);
      }
    );

    $(".costume").hover(function () {
      $(".weding, .accessories, .show, .propos, .all").stop(true).fadeTo(600, 0.4);
      }, function () {
      $(".weding, .accessories, .show, .propos, .all").stop(true).fadeTo(600, 1);
      }
    );

    $(".show").hover(function () {
      $(".weding, .costume, .accessories, .propos, .all").stop(true).fadeTo(600, 0.4);
      }, function () {
      $(".weding, .costume, .accessories, .propos, .all").stop(true).fadeTo(600, 1);
      }
    );

    $(".propos").hover(function () {
      $(".weding, .costume, .show, .accessories, .all").stop(true).fadeTo(600, 0.4);
      }, function () {
      $(".weding, .costume, .show, .accessories, .all").stop(true).fadeTo(600, 1);
      }
    );

$('#nav').hide();
$(".social").hide();

$(function(){
  //Au scroll dans la fenetre on déclenche la fonction
  $(window).scroll(function () {
  
  //si on a defile de plus de 150px du haut vers le bas
  if ($(this).scrollTop() > 700) {
  
  //on ajoute la classe "fixNavigation" a <div id="navigation">
  $("#nav").slideDown(function () {
    $(".social").fadeIn();
  });

  } else if ($(this).scrollTop() < 500) {
  
  //sinon on retire la classe "fixNavigation" a <div id="navigation">
  $('#nav').slideUp(function () {
    $(".social").fadeOut();
  });

  }
  });
});
});