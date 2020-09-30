$(document).ready(function(){
    /**************navbar*************/
    $(".items li").on({
        mouseenter: function(){
            var span = $(this).children("a").attr("data-span");
            $(this).children("a").html(`<span>${span}</span>`);
        },
        mouseleave: function(){
            var icon = $(this).children("a").attr("data-icon");
            $(this).children("a").html(`<i class="fa ${icon}" aria-hidden="true"></i>`);
        }
    })
    /**************end navbar*************/
 
    /**************main h1*************/
    var allElements = document.getElementsByClassName("letter");
    for(x=0 , y=0 , i=0 ; i < allElements.length ; i++){
      $(allElements[i]).css({
        "animation-delay":`${x}.${y++}s`
      })
      if(y ==  9){
        x++;
        y = 0;
      }
    }
    
    $(".info h1 span").on({
      mouseenter: function(){
        $(this).removeClass("animate__animated animate__bounceIn");
        $(this).css({
          "animation-delay":`0s`
        });
        $(this).addClass("animate__animated animate__rubberBand colored");
        var x = $(this);
        setTimeout(function(){
          x.removeClass("animate__animated animate__rubberBand colored");
        },500);
      }
    })

    var skills =$(".skills div");
    skills.addClass("animate__animated animate__bounceIn");
    for(x=0 , y=0 , i=0 ; i < skills.length ; i++){
      $(skills[i]).css({
        "animation-delay":`${x}.${y++}s`
      })
      if(y ==  9){
        x++;
        y = 0;
      }
    }
    var project =$(".projects");
    project.addClass("animate__animated animate__bounceIn");
    for(x=0 , y=0 , i=0 ; i < project.length ; i++){
      $(project[i]).css({
        "animation-delay":`${x}.${y++}s`
      })
    }
    /**************end main h1*************/
    /**************subnav in small devices*************/
    var checkNav = false;
    $(".menu-bar").click(function(){
      if(!checkNav){
        $(this).addClass("open");
        $(".subnav").css({
          "transform": "rotateY(0deg)",
          "transform-origin": "top center",
        });
        checkNav = true;
      }else{
        $(this).removeClass("open");
        $(".subnav").css({
          "transform": "rotateY(90deg)",
          "transform-origin": "top center",
        });
        checkNav = false;
      }
    })
    /**************end subnav*************/
    /**************end canvas*************/
    var makeItRain = function() {
        //clear out everything
        $('.rain').empty();
      
        var increment = 0;
        var drops = "";
        var backDrops = "";
      
        while (increment < 100) {
          //couple random numbers to use for various randomizations
          //random number between 98 and 1
          var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
          //random number between 5 and 2
          var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
          //increment
          increment += randoFiver;
          //add in a new raindrop with various randomizations to certain CSS properties
          drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
          backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        }
      
        $('.rain.front-row').append(drops);
        $('.rain.back-row').append(backDrops);
      }
      
      $('.splat-toggle.toggle').on('click', function() {
        $('body').toggleClass('splat-toggle');
        $('.splat-toggle.toggle').toggleClass('active');
        makeItRain();
      });
      
      $('.back-row-toggle.toggle').on('click', function() {
        $('body').toggleClass('back-row-toggle');
        $('.back-row-toggle.toggle').toggleClass('active');
        makeItRain();
      });
      
      $('.single-toggle.toggle').on('click', function() {
        $('body').toggleClass('single-toggle');
        $('.single-toggle.toggle').toggleClass('active');
        makeItRain();
      });
      
      makeItRain();
    /**************end canvas*************/

})