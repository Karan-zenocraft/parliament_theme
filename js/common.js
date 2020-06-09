function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
    var moreText2 = document.getElementById("more2");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    moreText2.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
      moreText2.style.display = "block";
  }
}







$(document).ready(function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        $('#scroll').fadeIn();
                    } else {
                        $('#scroll').fadeOut();
                    }
                });
                $('#scroll').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            });

        
         var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

$(document).ready(function() {
            $('.Menu1 ul li').click(function() {
                $('li').removeClass("active1");
                $(this).addClass("active1");
            });
        });



    $('ul li a').click( function(){
    if ( $(this).hasClass('current') ) {
        $(this).removeClass('current');
    } else {
        $('li a.current').removeClass('current');
        $(this).addClass('current');    
    }
});





        $(document).ready(function() {
            $('.DimmerBox').click(function() {
                $('.DimmerBox').removeClass("Dimmer");
                $(this).addClass("Dimmer");
               
                
            });
            
            
            
            $('.Icons i').click(function() {
                $('.Icons i').removeClass("ActiveIcon");
                $(this).addClass("ActiveIcon");
               
                
            });
            
            
             $('.Icons  .fa-bell').click(function() {
                $('.Icons .fa-bell').addClass("NotificationBadgeCircle");
                
               
                
            });
            
            
            
          
        });



//$(".MainCenter .Nav1 ul").removeClassClass("UlHome");


$(document).ready(function(){
  $('.FilterBar span:first-child').click(function() {
               
                $(".Icons i").removeClass("ActiveArrow");
                $(".MainCenter .Nav1 ul").removeClass("UlHome");
                $(".HeaderBottomCenter .Nav3").removeClass("UlNotification");
                $(".HeaderBottomCenter .Nav4").removeClass("UlSetting");
       $("header .HeaderBottomCenter .Search").removeClass("UlSearch"); /*Searchmobilemenu*/
                $(".MainCenter .Nav2 ul").toggleClass("UlFilter");
                $(".MainCenter .Nav6 ul").toggleClass("UlFilterCitizen");
                $(".FilterBar span:first-child i").toggleClass("Rotate");
                
            });
    
    
    $("body").click(function() {
        $(".MainCenter .Nav6 ul").removeClass("UlFilterCitizen");
                $(".MainCenter .Nav2 ul").removeClass("UlFilter");
                 $(".FilterBar span:first-child i").removeClass("Rotate");

            });


            $(".FilterBar span:first-child").click(function() {
                event.stopPropagation();
                
                
            });
    
    

        });

 

$(document).ready(function(){
$('.Nav1 .nav li').click(function() {
                $('.Nav1 .nav li').removeClass("BGList");
                $(this).addClass("BGList");
               
                
            });

});


$(document).ready(function(){
$('.Nav2 .nav li').click(function() {
                $('.Nav2 .nav li').removeClass("FilterActive");
                $(this).addClass("FilterActive");
               
                
            });

});










$(document).ready(function(){
    
    $('.Nav1 .nav li').click(function() {

$('.Icons .fa-rss-square').addClass("ActiveIcon");

 });
    
    });

$(document).ready(function(){
    
    $('.Nav1 .nav li:first-child').click(function() {
              
                $('.tab-content #home').addClass("Flex");
                
               
                
            });
    
$('.Nav1 .nav li:last-child, .Nav1 .nav li:nth-child(2), .Nav1 .nav li:nth-child(3)').click(function() {
              
                $('.tab-content #home').removeClass("Flex");
               
                
            });

});

//new js


$(document).ready(function(){
  $('.Icons .fa-cog').click(function() {
              $(".HeaderBottomCenter .Nav4").toggleClass("UlSetting");
                $(".HeaderBottomCenter .Nav3").removeClass("UlNotification");
       $(".MainCenter .Nav6 ul").removeClass("UlFilterCitizen");
       $("header .HeaderBottomCenter .Search").removeClass("UlSearch"); /*Searchmobilemenu*/
                $(".MainCenter .Nav2 ul").removeClass("UlFilter");
                $(".MainCenter .Nav1 ul").removeClass("UlHome");
            });
    
    
    $("body").click(function() {
                $(".HeaderBottomCenter .Nav4").removeClass("UlSetting");


            });


            $(".Icons .fa-cog").click(function() {
                event.stopPropagation();
            });
    
//     $(".HeaderBottomCenter .Nav3 li span:last-child").click(function() {
//                event.stopPropagation();
//            });
    
   

        });


$(document).ready(function(){
$('.Nav4 li').click(function() {
                $('.Nav4 li').removeClass("BGList");
                $(this).addClass("BGList");
               
                
            });

});





jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 992) {
      $('.Nav5').removeClass('Nav2');
    } else if (ww >= 992) {
     $('.Nav5').addClass('Nav2');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});



$(document).ready(function(){
$('.Nav5 .nav li').click(function() {
                $('.Nav5 .nav li').removeClass("FilterActive");
                $(this).addClass("FilterActive");
               
                
            });

});


$(document).ready(function(){
    $('.BlockCaption .Follow').click(function() {
        var $span = $(this).find("span:first-child");
        var $this = $(this);
    
    if($this.hasClass('Followed')){
      $this.removeClass("Followed");
       $this.addClass("Following");
        $span.text('Following');
         
   } else {
      $this.removeClass("Following");
       $this.addClass("Followed");
       
       $span.text('Follow');
   }
    
                           
                
});        

});




//end new js


$(document).ready(function(){
  $('.Icons .fa-bell').click(function() {
              $(".HeaderBottomCenter .Nav3").toggleClass("UlNotification");
                $(".HeaderBottomCenter .Nav4").removeClass("UlSetting");
       $("header .HeaderBottomCenter .Search").removeClass("UlSearch"); /*Searchmobilemenu*/
       $(".MainCenter .Nav6 ul").removeClass("UlFilterCitizen");
                $(".MainCenter .Nav2 ul").removeClass("UlFilter");
                $(".MainCenter .Nav1 ul").removeClass("UlHome");
            });
    
    
    $("body").click(function() {
                $(".HeaderBottomCenter .Nav3").removeClass("UlNotification");


            });


            $(".Icons .fa-bell").click(function() {
                event.stopPropagation();
            });
    
     $(".HeaderBottomCenter .Nav3 li span:last-child").click(function() {
                event.stopPropagation();
            });
    
   

        });



$(document).ready(function(){
  $('.Icons .fa-bars').click(function() {
              $(".MainCenter .Nav1 ul").toggleClass("UlHome");
                $("header .HeaderBottomCenter .Search").removeClass("UlSearch"); /*Searchmobilemenu*/
                $(".HeaderBottomCenter .Nav4").removeClass("UlSetting");
                $(".MainCenter .Nav2 ul").removeClass("UlFilter");
       $(".MainCenter .Nav6 ul").removeClass("UlFilterCitizen");
            $(".HeaderBottomCenter .Nav3").removeClass("UlNotification");
            });
    
    
    $("body").click(function() {
                $(".MainCenter .Nav1 ul").removeClass("UlHome");


            });


            $(".Icons .fa-bars").click(function() {
                event.stopPropagation();
            });
    
    
   

        });




/*Searchmobilemenu*/



$(document).ready(function(){
  $('.Icons .fa-search').click(function() {
              $("header .HeaderBottomCenter .Search").toggleClass("UlSearch");
                $(".HeaderBottomCenter .Nav4").removeClass("UlSetting");
      $(".Main .MainCenter .Nav1 ul").removeClass("UlHome");
                $(".MainCenter .Nav2 ul").removeClass("UlFilter");
       $(".MainCenter .Nav6 ul").removeClass("UlFilterCitizen");
            $(".HeaderBottomCenter .Nav3").removeClass("UlNotification");
            });
    
    
    $("body").click(function() {
                $("header .HeaderBottomCenter .Search").removeClass("UlSearch");


            });


            $(".Icons .fa-search").click(function() {
                event.stopPropagation();
            });
    
    $(".UlSearch, .SearchInput").click(function() {
                event.stopPropagation();
            });
    
    
   

        });






$(document).ready(function(){
  $('.one').click(function() {
              $(".Menu1").addClass("Option1");
            });
    
    
    $("body").click(function() {
                $(".Menu1").removeClass("Option1");


            });


            $(".one").click(function() {
                event.stopPropagation();
            });

        });






$(document).ready(function(){
$(".OnhoverGroup").hover(function() {
      $(".OnhoverMP").show();
}).mouseleave(function() {
      $(".OnhoverMP").hide();
});
});


$(document).ready(function(){
  $("#Load1 a").click(function(){
    $("#Load1 a").toggleClass("MadeLouderBG");
  });
    
    $("#Load2").click(function(){
    $("#Load2").toggleClass("LoadBG");
  });
});


//$(document).ready(function() {
//            $('.Icons i').click(function() {
//                $('i').removeClass("ActiveIcon");
//                $(this).addClass("ActiveIcon");
//            });
//        });




//   give answer  ------new JS------------



$(document).ready(function(){
  $(".AskFollowUp").click(function(){
     $(".AnswerQuestionBox").removeClass("GiveAnswerBox");  
    $(".AskFollowUpBox").toggleClass("GiveAnswerBox");
  });
    
    
});


$(document).ready(function(){
  $(".AnswerQuestion .AnswerToggle").click(function(){
      $(".AskFollowUpBox").removeClass("GiveAnswerBox"); 
    $(".AnswerQuestionBox").toggleClass("GiveAnswerBox");
  });
    
    
});


$(document).ready(function() {
$('.Icons .fa-bell').click(function() {
    $(".Icons .fa-search").removeClass("ActiveArrow");
                $(".Icons .fa-bars").removeClass("ActiveArrow");
                $(".Icons .fa-cog").removeClass("ActiveArrow");
                $(this).toggleClass("ActiveArrow");
               
                
            });
    
        $("body").click(function() {
                $(".Icons .fa-bell").removeClass("ActiveArrow");


            });
    
    
    $('.Icons .fa-bars').click(function() {
        $(".Icons .fa-search").removeClass("ActiveArrow");
                 $(".Icons .fa-bell").removeClass("ActiveArrow");
                $(".Icons .fa-cog").removeClass("ActiveArrow");
                $(this).toggleClass("ActiveArrow");
               
                
            });
    
        $("body").click(function() {
                
                $(".Icons .fa-bars").removeClass("ActiveArrow");


            });


    
    $('.Icons .fa-cog').click(function() {
                $(".Icons .fa-search").removeClass("ActiveArrow");
                $(".Icons .fa-bars").removeClass("ActiveArrow");
                 $(".Icons .fa-bell").removeClass("ActiveArrow");
                $(this).toggleClass("ActiveArrow");
               
                
            });
    
        $("body").click(function() {
                
                $(".Icons .fa-cog").removeClass("ActiveArrow");


            });
            

    /*Searchmobilemenu*/
    
    
    $('.Icons .fa-search').click(function() {
                $(".Icons .fa-bars").removeClass("ActiveArrow");
                 $(".Icons .fa-bell").removeClass("ActiveArrow");
                $(".Icons .fa-cog").removeClass("ActiveArrow");
                $(this).toggleClass("ActiveArrow");
               
                
            });
    
        $("body").click(function() {
                
                $(".Icons .fa-search").removeClass("ActiveArrow");


            });
    
    
    });



//new js


