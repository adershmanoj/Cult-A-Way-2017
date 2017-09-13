function detectIE() {
var ua = window.navigator.userAgent;

var msie = ua.indexOf('MSIE ');
if (msie > 0) {
// IE 10 or older => return version number
return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
}

var trident = ua.indexOf('Trident/');
if (trident > 0) {
// IE 11 => return version number
var rv = ua.indexOf('rv:');
return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
}

var edge = ua.indexOf('Edge/');
if (edge > 0) {
// IE 12 => return version number
return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    
}
/* Open when someone clicks on the span element */

// other browser
return false;
}

function startDetect(){

}

startDetect();
checkMobile();
checkMenu();




          
function checkMenu(){
    if($(".pc").css("display") !=="none"){
    if($("body").hasClass("fp-viewing-cult-Home")){
        $("#HorizontalMenu").hide();
        buttoncheck();

    }else{
        $("#HorizontalMenu").show();
        buttoncheck();
    }
    
    
    }
}

setTimeout(checkMenu,500);

$(document).ready(function() {
    if($(".pc").css("display") === "none"){
       
        checkMobPages();
        $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['cult','home_mob','story_mob','proshow_mob','event_mob','room_mob','sponsors_mob','events_mob','contact_mob'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        scrollHorizontallyKey:'bWFkZ2lhbnQuY28uemFfcjhDYzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1cllL',
        interlockedSlides: false,
        resetSliders: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 1,
        responsiveHeight: 1,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
        
    }
    
});



    




function checkMobPages(){
    if($(".mobile_story_1").hasClass("active")){
        $("#Story1").show();
    }else if($(".mobile_story_2").hasClass("active")){
         $("#Story2").show();
    }else if($(".mobile_story_3").hasClass("active")){
         $("#Story3").show();
    }
    
    if($(".eat_mob").hasClass("active")){
        $("#EatMG, #EatUrban").show();
    }
    
    if($(".mob_taste").hasClass("active")){
        $("#TastingRoom").show();
    
    }
    
 
    
    
    
    
    
    
}
setTimeout(checkMobPages,2500);




function checkMobile(){
if($(".pc").css("display") =="none"){
    
$("#HomePage").appendTo(".home_mob"); 

$("#Story1").appendTo(".mobile_story_container1");
$("#Story2").appendTo(".mobile_story_container2");
$("#Story3").appendTo(".mobile_story_container3");
    
$(".eatUrban").appendTo(".eat");
$(".eatMG").appendTo(".eat");
$(".tasting_room_container").appendTo(".mob_taste");
    
$(".events_container").appendTo(".mobile_events");    
$(".contactHeading").appendTo(".mobile_contact");
$(".contact_container").appendTo(".mobile_contact");
$(".chimpopup").appendTo(".mobile_contact"); 
$(".appendToThis").appendTo(".eat");
    
$(".bookhide").appendTo(".mob_taste");    
$(".catcont").appendTo(".mob_store");  



$("#killer_bground").appendTo(".hop_mob_bground");
$("#guzzler_bground").appendTo(".guzzler_mob_bground");
$("#grit_bground").appendTo(".grit_mob_bground");
$("#electric_bground").appendTo(".electric_mob_bground");

$("#Bottle").appendTo(".hop_mob");
$("#Killer_Hop").appendTo(".hop_mob");
$("#beer_details #Beer_Categories").clone().appendTo(".mob_hop_details");
$("#beer_details #Killer_Hop_Details").appendTo(".mob_hop_details");
 
$("#Bottle").clone().appendTo(".guzzler_mob");
$("#The_Guzzler").appendTo(".guzzler_mob");
$("#beer_details #Beer_Categories").clone().appendTo(".mob_guzzler_details");
$("#beer_details #The_Guzzler_Details").appendTo(".mob_guzzler_details");
    
$("#Bottle").clone().appendTo(".grit_mob");
$("#True_Grit").appendTo(".grit_mob");
$("#beer_details #Beer_Categories").clone().appendTo(".mob_grit_details");
    $("#beer_details #True_Grit_Details").appendTo(".mob_grit_details");
    
$("#Bottle").clone().appendTo(".electric_mob");
$("#Electric_Light").appendTo(".electric_mob");
$("#beer_details #Beer_Categories").clone().appendTo(".mob_electric_details");
    $(" #beer_details #Electric_Details").appendTo(".mob_electric_details");
    
    
$(".home_cont").appendTo(".mobile_home");
    
$(".tasting_room_container").appendTo(".mobile_tastingRoom");
$("#Store_Giant").appendTo(".mob_store");
    
$("#Contact").appendTo(".mob_contact");
 

    
    
}
    
 $("#Bitter_Killer_Count").countTo({
            from: 0,
            to: 34,
            refreshInterval: 1,
            speed: 350,
          });
$(".Hop_Killer_Count").countTo({
            from: 0,
            to: 4,
            refreshInterval: 1,
            speed: 250,
          });
$("#Alc_Killer_Count").countTo({
            from: 0,
            to: 5,
            refreshInterval: 1,
            speed: 250,
          });




$("#Bitter_Guzzler_Count").countTo({
            from: 0,
            to: 26,
            refreshInterval: 1,
            speed: 350,
          });

$(".Hop_Guzzler_Count").countTo({
            from: 0,
            to: 4,
            refreshInterval: 1,
            speed: 250,
          });


$("#Alc_Guzzler_Count1").countTo({
            from: 0,
            to: 4,
            refreshInterval: 1,
            speed: 250,
          });

$("#Alc_Guzzler_Count2").countTo({
            from: 0,
            to: 8,
            refreshInterval: 1,
            speed: 300,
          });



$("#Bitter_Grit_Count").countTo({
            from: 0,
            to: 32,
            refreshInterval: 1,
            speed: 350,
          });

$("#Hop_Grit_Count").countTo({
            from: 0,
            to: 3,
            refreshInterval: 1,
            speed: 250,
          });

$("#Malts_Grit_Count").countTo({
            from: 0,
            to: 6,
            refreshInterval: 1,
            speed: 250,
          });

$("#Alc_Grit_Count").countTo({
            from: 0,
            to: 5,
            refreshInterval: 1,
            speed: 250,
          });


$("#Bitter_Elec_Count").countTo({
            from: 0,
            to: 13,
            refreshInterval: 1,
            speed: 350,
          });

$("#Hop_Elec_Count").countTo({
            from: 0,
            to: 3,
            refreshInterval: 1,
            speed: 150,
          });


$("#Malts_Elec_Count1").countTo({
            from: 0,
            to: 4,
            refreshInterval: 1,
            speed: 250,
          });
$("#Malts_Elec_Count2").countTo({
            from: 0,
            to: 40,
            refreshInterval: 1,
            speed: 350,
          });


$("#Alc_Elec_Count1").countTo({
            from: 0,
            to: 4,
            refreshInterval: 1,
            speed: 250,
          });

$("#Alc_Elec_Count2").countTo({
            from: 0,
            to: 5,
            refreshInterval: 1,
            speed: 300,
          }); 

}

$("#MenuIcon").click(function(){
    $(".mobilemenuslide").removeClass("mobilemenuslideout").addClass("mobilemenuslidein");
    $(".line1").removeClass("line1out").addClass("line1in");
    $(".line2").removeClass("line2out").addClass("line2in");
    
})

$(".exitmobmenu").click(function(){
    $(".mobilemenuslide").removeClass("mobilemenuslidein").addClass("mobilemenuslideout");
    $(".line1").removeClass("line1in").addClass("line1out");
    $(".line2").removeClass("line2in").addClass("line2out");
})


function menutoggle(){
    $(".mobilemenuslide").removeClass("mobilemenuslidein").addClass("mobilemenuslideout");
    $(".line1").removeClass("line1out").addClass("line1in");
    $(".line2").removeClass("line2out").addClass("line2in");
}


$("#HOMEMOBILE").click(function(){
    $.fn.fullpage.moveTo('home_mob');
    menutoggle();
})

$("#PROSHOWMOBILE_1_").click(function(){
    $.fn.fullpage.moveTo('proshow_mob');
    menutoggle();
})

$("#STORYMOBILE_1_").click(function(){
    $.fn.fullpage.moveTo('story_mob');
    menutoggle();
    if($(".mobile_story_1").hasClass("active")){
        $("#Story1").show();
    }else if($(".mobile_story_2").hasClass("active")){
         $("#Story2").show();
    }else if($(".mobile_story_3").hasClass("active")){
         $("#Story3").show();
    }

})

$("#EVENTMOBILE").click(function(){
    $.fn.fullpage.moveTo('event_mob');
    menutoggle();

    $("#EatMG, #EatUrban").show();
    
})

$("#TASTINGROOMMOBILE").click(function(){
    $.fn.fullpage.moveTo('room_mob');
    menutoggle();

    $("#TastingRoom").show();

})

$("#SPONSORSMOBILE").click(function(){
    $.fn.fullpage.moveTo('sponsors_mob');
    menutoggle();
})

$("#EVENTSMOBILE").click(function(){
    $.fn.fullpage.moveTo('events_mob');
    menutoggle();
})

$("#CONTACTMOBILE").click(function(){
    $.fn.fullpage.moveTo('contact_mob');
    menutoggle();
})

$(".eventdescription").text(function(index,currentText){
    return currentText.substr(0,303)
});
$("#d1").click(function(){
    $('#day1').modal();
});
$("#d2").click(function(){
    $('#day2').modal();
});
$("#d3").click(function(){
    $('#day3').modal();
});
$("#d4").click(function(){
    $('#day4').modal();
});
function NextMobStory(){
    if($(".mobile_story_1").hasClass("active")){
        $.fn.fullpage.moveTo('story_mob', '1');
        $("#Story2").show();
        $(".StoryPrevMob").show();
        $("#Story1").delay(550).fadeOut(5);
    }else if($(".mobile_story_2").hasClass("active")){
        $.fn.fullpage.moveTo('story_mob', '2');
        $("#Story3").show();
        $(".StoryNextMob").hide();
        $("#Story2").delay(550).fadeOut(5);
    }   
}

function PrevMobStory(){
    if($(".mobile_story_3").hasClass("active")){
        $.fn.fullpage.moveTo('story_mob', '1');
        $("#Story2").show();
        $(".StoryNextMob").show();
        $("#Story3").delay(550).fadeOut(5);
    }else if($(".mobile_story_2").hasClass("active")){
        $.fn.fullpage.moveTo('story_mob', '0');
        $("#Story1").show();
        $(".StoryPrevMob").hide();
        $("#Story2").delay(550).fadeOut(5);
    }   
}

$(".StoryNextMob").click(function(){
    NextMobStory();
})

$(".StoryPrevMob").click(function(){
    PrevMobStory();
})

function NextBeerMob(){
    if($(".mobile_proshow_1").hasClass("active")){
        $.fn.fullpage.moveTo('proshow_mob', '1');
        $(".PrevMob").show();

    }else if($(".mobile_proshow_2").hasClass("active")){
        $.fn.fullpage.moveTo('proshow_mob', '2');

    }else if($(".mobile_proshow_3").hasClass("active")){
        $.fn.fullpage.moveTo('proshow_mob', '3');
        $(".NextMob").hide();

    }   
}

function PrevBeerMob(){
    if($(".mobile_proshow_4").hasClass("active")){
        $.fn.fullpage.moveTo('proshow_mob', '2');
        $(".NextMob").show();

    }else if($(".mobile_proshow_3").hasClass("active")){
        $.fn.fullpage.moveTo('proshow_mob', '1');
   
    }else if($(".mobile_proshow_2").hasClass("active")){
        $.fn.fullpage.moveTo('proshow_mob', '0');
        $(".PrevMob").hide();

    }   
}



$(".NextMob").click(function(){
    NextBeerMob();
})

$(".PrevMob").click(function(){
    PrevBeerMob();
})

function poons(){
     $("#Alc_Killer_Count").val() = 50;
    
}








function scaledownstory1(){
  $("#BeerStand, #Giant1toggle, #cawtoggle").addClass("scaledownstory");
      $("#CloudsStory1, #Sun, #TextStory1, #Birds").addClass("opacitystory");
      $("#Cave, #CaveFloor, #FireGroup, #dudes1toggle").addClass("scaledownstoryd1");  
    
}

function removescaledownstory1(){
  $("#BeerStand, #Giant1toggle, #cawtoggle").removeClass("scaledownstory");
      $("#CloudsStory1, #Sun, #TextStory1, #Birds").removeClass("opacitystory");
      $("#Cave, #CaveFloor, #FireGroup, #dudes1toggle").removeClass("scaledownstoryd1");  
    
}

function scaledownstory2(){
    $("#toggleMountain1").addClass("scaledownstory");
        $("#toggleMountain2").addClass("scaledownstoryd1"); 
        $("#toggleMountain3").addClass("scaledownstoryd2"); 
        $("#toggleMountain4").addClass("scaledownstoryd1");
        $("#togglebikerig").addClass("scaledownstoryd2"); 
        $("#toggletrees").addClass("scaledownstory");
        $("#StreetlampsStory2").addClass("scaledownstoryd2");
        $("#MoonStory2, #TextStory2, #CloudsStory2, #Stars, #toggleplane").addClass("opacitystory"); 
    
}

function removescaledownstory2(){
    $("#toggleMountain1").removeClass("scaledownstory");
      $("#toggleMountain2").removeClass("scaledownstoryd1"); 
      $("#toggleMountain3").removeClass("scaledownstoryd2"); 
      $("#toggleMountain4").removeClass("scaledownstoryd1");
      $("#togglebikerig").removeClass("scaledownstoryd2"); 
      $("#toggletrees").removeClass("scaledownstory");
      $("#StreetlampsStory2").removeClass("scaledownstoryd2");
      $("#MoonStory2, #TextStory2, #CloudsStory2, #Stars, #toggleplane").removeClass("opacitystory"); 
    
}


function scaledownstory3(){
    $("#City3_1_, #Citytop, .giant3toggle").addClass("scaledownstory");
    $("#City3, #dudes3toggle, #MadGiantBuilding").addClass("scaledownstoryd1");
    $("#Lampposts, .togglecars, #City2").addClass("scaledownstoryd2");
    $("#CloudsStory3, #TextStory3, #SunStory3, #BirdsStory3").addClass("opacitystory");
    
    
}

function removescaledownstory3(){
    $("#City3_1_, #Citytop, .giant3toggle").removeClass("scaledownstory");
    $("#City3, #dudes3toggle, #MadGiantBuilding").removeClass("scaledownstoryd1");
    $("#Lampposts, .togglecars, #City2").removeClass("scaledownstoryd2");
    $("#CloudsStory3, #TextStory3, #SunStory3, #BirdsStory3").removeClass("opacitystory");
    
    
}




$(".StoryNext").click(function(){
  if($("#Story1").hasClass("selected")){
      scaledownstory1();
      removescaledownstory2();
      $("#Story1").delay(1000).fadeOut(1000);
      $("#Story2").delay(2000).fadeIn(1000);
      $("#Story1").removeClass("selected");
       $("#Story2").addClass("selected");
      $(".StoryPrev").fadeIn(300);
      $(".color2").delay(2000).fadeIn(1000);
      
  }else if($("#Story2").hasClass("selected")) { 
        scaledownstory2();
        removescaledownstory3();
        
        $("#Story2").delay(1000).fadeOut(1000);
        $("#Story3").delay(2000).fadeIn(1000);
        
        $("#Story2").removeClass("selected");
        $("#Story3").addClass("selected");
        $(".StoryNext").fadeOut(300);
        $(".color3").delay(2000).fadeIn(1000);
      
  }
})

$(".StoryPrev").click(function(){
  if($("#Story2").hasClass("selected")){
      scaledownstory2();
       removescaledownstory1();
      $("#Story2").delay(1000).fadeOut(1000);
      $("#Story2").removeClass("selected");
      $(".color2").delay(2000).fadeOut(1000);
      $("#Story1").delay(2000).fadeIn(1000);
      $("#Story1").addClass("selected");
      $(".StoryNext").fadeIn(300);
      $(".StoryPrev").fadeOut(300);
      
  }else if($("#Story3").hasClass("selected")) { 
     removescaledownstory2();
      scaledownstory3();
      $(".StoryNext").fadeIn(300);
      $(".color3").delay(2000).fadeOut(1000);
      $("#Story3").delay(1000).fadeOut(1000);
      $("#Story3").removeClass("selected");
      $("#Story2").delay(2000).fadeIn(1000);
      $("#Story2").addClass("selected");
  }
    
})






function checkArr($a, $b){

        $.fn.fullpage.moveTo('cult', $a);
        if($("body").hasClass("fp-viewing-cult-Home")){
            $("#HorizontalMenu").fadeOut(200);
        }else{
            $("#HorizontalMenu").fadeIn(200); 
        }
    
        if($("body").hasClass("fp-viewing-cult-event")){
            $(".logo").fadeOut(200);
        }else{
            $(".logo").fadeIn(200);
        }
    
      
}


function buttoncheck() {
    if(!$("body").hasClass("fp-viewing-cult-Home")){
        $(".home_cont").fadeOut(300);     
    }else{
        $(".home_cont").fadeIn(300);   
    }
    
    if(!$("body").hasClass("fp-viewing-cult-Story")){
        $(".story_full_container").fadeOut(300);
        $("#HorizontalMenu g:nth-of-type(7) polyline").css("stroke-dashoffset",""); 
    }else{
        $(".story_full_container").fadeIn(300);
        $("#HorizontalMenu g:nth-of-type(7) polyline").css("stroke-dashoffset","1");
        $("#HorizontalMenu g:nth-of-type(7) polyline").css("stroke-dashoffset","1"); 
    }
    
    if(!$("body").hasClass("fp-viewing-cult-proshow")){
        $(".proshow_container").fadeOut(300);
        $("#HorizontalMenu g:nth-of-type(6) polyline").css("stroke-dashoffset",""); 
    }else{
        $(".proshow_container").fadeIn(300);
        $("#HorizontalMenu g:nth-of-type(6) polyline").css("stroke-dashoffset","1"); 
    }
    
    if(!$("body").hasClass("fp-viewing-cult-event")){
        $("#EatMG, #EatUrban").fadeOut(300);
        $("#HorizontalMenu g:nth-of-type(5) polyline").css("stroke-dashoffset",""); 
    }else{
        $("#EatMG, #EatUrban").fadeIn(300);
        $("#HorizontalMenu g:nth-of-type(5) polyline").css("stroke-dashoffset","1"); 
    }
    
    if(!$("body").hasClass("fp-viewing-cult-Tasting_Room")){
        $(".tasting_room_container").fadeOut(300);
        $("#HorizontalMenu g:nth-of-type(4) polyline").css("stroke-dashoffset",""); 
    }else{
        $(".tasting_room_container").fadeIn(300);
        $("#HorizontalMenu g:nth-of-type(4) polyline").css("stroke-dashoffset","1"); 
        
    }
    
    if(!$("body").hasClass("fp-viewing-cult-sponsors")){
        $(".store_container").fadeOut(300);
        $("#HorizontalMenu g:nth-of-type(3) polyline").css("stroke-dashoffset",""); 
    }else{
        $(".store_container").fadeIn(300);
        $("#HorizontalMenu g:nth-of-type(3) polyline").css("stroke-dashoffset","1"); 
    }
    
    if(!$("body").hasClass("fp-viewing-cult-Events")){
        $(".events_container, #GiantEventDancing").fadeOut(300);
        $("#HorizontalMenu g:nth-of-type(2) polyline").css("stroke-dashoffset",""); 
    }else{
        $(".events_container, #GiantEventDancing").fadeIn(300);
        $("#HorizontalMenu g:nth-of-type(2) polyline").css("stroke-dashoffset","1"); 
    }
    
    if(!$("body").hasClass("fp-viewing-cult-Contact")){
        $(".contact_container").fadeOut(300);
        $("#HorizontalMenu g:nth-of-type(1) polyline").css("stroke-dashoffset",""); 
    }else{
        $(".contact_container").fadeIn(300);
        $("#HorizontalMenu g:nth-of-type(1) polyline").css("stroke-dashoffset","1"); 
    }
       
}

function selectedCheck($a){
  if($("body").hasClass("fp-viewing-cult-"+$a+"")){
        $(".home_story polyline").addClass("selectedMenu");
    }
}

$(".home_home").click(function(){
    checkArr("Home");
    buttoncheck();
    
    
})

$(".home_story").click(function(){
    checkArr("Story");
    buttoncheck();
    selectedCheck("Story","7");
})

$(".home_proshow").click(function(){
    checkArr("proshow");
    buttoncheck();
})

$(".home_event").click(function(){
    checkArr("event");
    buttoncheck();
})

$(".home_tasting").click(function(){
    checkArr("Tasting_Room");
    buttoncheck();
})

$(".home_sponsors").click(function(){
    checkArr("sponsors");
    buttoncheck();
})

$(".home_events").click(function(){
    checkArr("Events");
    buttoncheck();
})

$(".home_contact").click(function(){
    checkArr("Contact");
    buttoncheck();
})
$("#Shirt3").click(function(){
    $(".dude_shirt").css("fill","#FF7261").css("transition","fill 1s");
    $(".shirt_logo").css("fill","black").css("transition","fill 1s");  
})

$("#Shirt1, #Shirt2, #Shirt5").click(function(){
    $(".dude_shirt").css("fill","white").css("transition","fill 1s");
    $(".shirt_logo").css("fill","black").css("transition","fill 1s"); 
})

$("#Shirt4, #Shirt6").click(function(){
    $(".dude_shirt").css("fill","black").css("transition","fill 1s");
    $(".shirt_logo").css("fill","white").css("transition","fill 1s");   
})

$(".cap1").click(function(){
    $(".dude_hat").css("fill","white").css("transition","fill 1s");
    $(".caplogo path").css("fill","black").css("transition","fill 1s");
})

$(".cap2, .cap3").click(function(){
    $(".dude_hat").css("fill","black").css("transition","fill 1s");
    $(".caplogo path").css("fill","white").css("transition","fill 1s");
})


$(".subscribepopup").click(function(){
    $(".chimpopup").fadeIn(600);
    
})

$(".chimpexit").click(function(){
    $(".chimpopup").fadeOut(600);
    
})
$(".1_proshow").click(function(){
    if($(".guzzler_bground").hasClass("selected")){
        $(".guzzler_bground").fadeOut(300);
        $(".guzzler_bground").removeClass("selected");
        $(".proshow_info_container2").fadeOut(300);
        $("#The_Guzzler").fadeOut(300);
        $("#The_Guzzler_Details").fadeOut(300);
        $("#The_Guzzler_Details").removeClass("slide_right");
        $(".2_proshow").removeClass("proshow_menu_selected");
    }else if($(".grit_bground").hasClass("selected")){
        $(".grit_bground").fadeOut(300);
        $(".grit_bground").removeClass("selected");
        $(".proshow_info_container3").fadeOut(300);
        $("#True_Grit").fadeOut(300);
        $("#True_Grit_Details").fadeOut(300);
        $("#True_Grit_Details").removeClass("slide_right");
        $(".3_proshow").removeClass("proshow_menu_selected");   
    }else if($(".electric_bground").hasClass("selected")){
        $(".electric_bground").fadeOut(300);
        $(".electric_bground").removeClass("selected");
        $(".proshow_info_container4").fadeOut(300);
        $("#Electric_Light").fadeOut(300);
        $("#Electric_Details").fadeOut(300);
        $("#Electric_Details").removeClass("slide_right");
        $(".4_proshow").removeClass("proshow_menu_selected");   
    }
        
        $(".1_proshow").addClass("proshow_menu_selected");
        $("#Killer_Hop").delay(200).fadeIn(300);
        $(".killer_bground").delay(300).fadeIn(300);
        $(".killer_bground").addClass("selected");
        $("#Killer_Hop_Details").delay(300).fadeIn(300);
        $("#Killer_Hop_Details").addClass("slide_right");
        $(".proshow_info_container1").fadeIn(300);
        $("#Bitter_Killer_Count").countTo('restart');
        $(".Hop_Killer_Count").countTo('restart');
        $("#Alc_Killer_Count").countTo('restart');
        
    
});


$(".2_proshow").click(function(){
    if($(".killer_bground").hasClass("selected")){
        $(".killer_bground").fadeOut(300);
        $(".killer_bground").removeClass("selected");
        $(".proshow_info_container1").fadeOut(300);
        $("#Killer_Hop").fadeOut(300);
        $("#Killer_Hop_Details").fadeOut(300);
        $("#Killer_Hop_Details").removeClass("slide_right");
        $(".1_proshow").removeClass("proshow_menu_selected");
    }else if($(".grit_bground").hasClass("selected")){
        $(".grit_bground").fadeOut(300);
        $(".grit_bground").removeClass("selected");
        $(".proshow_info_container3").fadeOut(300);
        $("#True_Grit").fadeOut(300);
        $("#True_Grit_Details").fadeOut(300);
        $("#True_Grit_Details").removeClass("slide_right");
        $(".3_proshow").removeClass("proshow_menu_selected");   
    }else if($(".electric_bground").hasClass("selected")){
        $(".electric_bground").fadeOut(300);
        $(".electric_bground").removeClass("selected");
        $(".proshow_info_container4").fadeOut(300);
        $("#Electric_Light").fadeOut(300);
        $("#Electric_Details").fadeOut(300);
        $("#Electric_Details").removeClass("slide_right");
        $(".4_proshow").removeClass("proshow_menu_selected");   
    }
        
        $(".2_proshow").addClass("proshow_menu_selected");
        $("#The_Guzzler").delay(200).fadeIn(300);
        $(".guzzler_bground").delay(300).fadeIn(300);
        $(".guzzler_bground").addClass("selected");
        $("#The_Guzzler_Details").delay(300).fadeIn(300);
        $("#The_Guzzler_Details").addClass("slide_right");
        $(".proshow_info_container2").fadeIn(300);
        $("#Bitter_Guzzler_Count").countTo('restart');
        $(".Hop_Guzzler_Count").countTo('restart');
        $("#Alc_Guzzler_Count1").countTo('restart');
        $("#Alc_Guzzler_Count2").countTo('restart');
    
});




$(".3_proshow").click(function(){
    if($(".guzzler_bground").hasClass("selected")){
        $(".guzzler_bground").fadeOut(300);
        $(".guzzler_bground").removeClass("selected");
        $(".proshow_info_container2").fadeOut(300);
        $("#The_Guzzler").fadeOut(300);
        $("#The_Guzzler_Details").fadeOut(300);
        $("#The_Guzzler_Details").removeClass("slide_right");
        $(".2_proshow").removeClass("proshow_menu_selected");
    }if($(".killer_bground").hasClass("selected")){
        $(".killer_bground").fadeOut(300);
        $(".killer_bground").removeClass("selected");
        $(".proshow_info_container1").fadeOut(300);
        $("#Killer_Hop").fadeOut(300);
        $("#Killer_Hop_Details").fadeOut(300);
        $("#Killer_Hop_Details").removeClass("slide_right");
        $(".1_proshow").removeClass("proshow_menu_selected");
    }else if($(".electric_bground").hasClass("selected")){
        $(".electric_bground").fadeOut(300);
        $(".electric_bground").removeClass("selected");
        $(".proshow_info_container4").fadeOut(300);
        $("#Electric_Light").fadeOut(300);
        $("#Electric_Details").fadeOut(300);
        $("#Electric_Details").removeClass("slide_right");
        $(".4_proshow").removeClass("proshow_menu_selected");   
    }
        
        $(".3_proshow").addClass("proshow_menu_selected");
        $("#True_Grit").delay(200).fadeIn(300);
        $(".grit_bground").delay(300).fadeIn(300);
        $(".grit_bground").addClass("selected");
        $("#True_Grit_Details").delay(300).fadeIn(300);
        $("#True_Grit_Details").addClass("slide_right");
        $(".proshow_info_container3").fadeIn(300);
        $("#Bitter_Grit_Count").countTo('restart');
        $("#Hop_Grit_Count").countTo('restart');
        $("#Malts_Grit_Count").countTo('restart');
        $("#Alc_Grit_Count").countTo('restart');
 
});


$(".4_proshow").click(function(){
    if($(".guzzler_bground").hasClass("selected")){
        $(".guzzler_bground").fadeOut(300);
        $(".guzzler_bground").removeClass("selected");
        $(".proshow_info_container2").fadeOut(300);
        $("#The_Guzzler").fadeOut(300);
        $("#The_Guzzler_Details").fadeOut(300);
        $("#The_Guzzler_Details").removeClass("slide_right");
        $(".2_proshow").removeClass("proshow_menu_selected");
    }if($(".killer_bground").hasClass("selected")){
        $(".killer_bground").fadeOut(300);
        $(".killer_bground").removeClass("selected");
        $(".proshow_info_container1").fadeOut(300);
        $("#Killer_Hop").fadeOut(300);
        $("#Killer_Hop_Details").fadeOut(300);
        $("#Killer_Hop_Details").removeClass("slide_right");
        $(".1_proshow").removeClass("proshow_menu_selected");
    }else if($(".grit_bground").hasClass("selected")){
        $(".grit_bground").fadeOut(300);
        $(".grit_bground").removeClass("selected");
        $(".proshow_info_container3").fadeOut(300);
        $("#True_Grit").fadeOut(300);
        $("#True_Grit_Details").fadeOut(300);
        $("#True_Grit_Details").removeClass("slide_right");
        $(".3_proshow").removeClass("proshow_menu_selected");   
    }
        
        $(".4_proshow").addClass("proshow_menu_selected");
        $("#Electric_Light").delay(200).fadeIn(300);
        $(".electric_bground").delay(300).fadeIn(300);
        $(".electric_bground").addClass("selected");
        $("#Electric_Details").delay(300).fadeIn(300);
        $("#Electric_Details").addClass("slide_right");
        $(".proshow_info_container4").fadeIn(300);
        $("#Bitter_Elec_Count").countTo('restart');
        $("#Hop_Elec_Count").countTo('restart');
        $("#Malts_Elec_Count1").countTo('restart');
        $("#Malts_Elec_Count2").countTo('restart');
        $("#Alc_Elec_Count1").countTo('restart');
        $("#Alc_Elec_Count2").countTo('restart');

      
 
});

var $name = $("#name");
var $email = $("#email");
var $mobile = $("#mobile");
var $message = $("#message");

var inputarray = ["#name","#email","#mobile","#message"];

$.each(inputarray, function (index, value) {
  $(value).focusin(function(){
    
    $(this).css("background-color","#FF7D7D");
    $(this).css("color","white");
    $(this).css("transition","color .5s, background-color .5s");
    
}); 
});

$($name).focusout(function(){
    
if($name.val().length >= 3){
    ifformvalid($name);
}    
});

$($email).focusout(function(){
    
if($email.val().length >= 3 && $email.val().indexOf("@") > 0){
    ifformvalid($email);
}    
});

$($mobile).focusout(function(){
    
if($mobile.val().length >= 9 && $.isNumeric($mobile.val())){
    ifformvalid($mobile);
}    
});

$($message).focusout(function(){
    
if($message.val().length >= 10){
    ifformvalid($message);
    
}    
});

function finalCheck(){
if($message.val().length >= 10 && $mobile.val().length >= 9 && $.isNumeric($mobile.val()) && $email.val().length >= 3 && $email.val().indexOf("@") > 0 && $name.val().length >= 3){
    return true;
}
}

function ifformvalid($a){
    $a.css("background-color","#37B76B");
    $a.css("transition","background-color .5s");
}


   
  
$(".sendbutton").click(function(){
    finalCheck();
    if(finalCheck()){
      $("#Form").submit(function() {

        var url = "processing.php"; // the script where you handle the form input.

            $.ajax({
                type: "POST",
                url: url,
                                       
                data: $("#Form").serialize(), 
                success:function(data, textStatus, jqXHR) {
                jQuery(".successerror").html('<pre><code class="prettyprint">'+data+'</code></pre>');
        },
                error: function(jqXHR, textStatus, errorThrown){
                $(".successerror").html('<pre><code class="prettyprint">AJAX Request Failed<br/> textStatus='+textStatus+', errorThrown='+errorThrown+'</code></pre>');
        }
            });
                            
                return false;
            }); 
        
    $(".Sending").fadeIn(300);
    $(".Sending").delay(5000).fadeOut(300);
    }else{
        $(".Check").fadeIn(300);
        $(".Check").delay(3000).fadeOut(300);   
    }
    
    
})


var Stars = $("#Stars circle");

Stars.each(function(index, circle) {
    var cx = $(circle).attr('cx');
    var cy = $(circle).attr('cy');
    $(circle).css('-moz-transform-origin',''+cx+'px '+cy+'px');
});


var Taste = $(".bubbles circle");

Taste.each(function(index, circle) {
    var cx = $(circle).attr('cx');
    var cy = $(circle).attr('cy');
    $(circle).css('-moz-transform-origin',''+cx+'px '+cy+'px');
});



var MGbubb = $(".eatUrbanbubbles path, .eatUrbanbubbles circle");

MGbubb.each(function(index, circle) {
    var cx = $(circle).attr('cx');
    var cy = $(circle).attr('cy');
    $(circle).css('-moz-animation','eatMGbubbs 0s');
});

var Urbubb = $(".eatMGbubbles path, .eatMGbubbles circle");

Urbubb.each(function(index, circle) {
    var cx = $(circle).attr('cx');
    var cy = $(circle).attr('cy');
    $(circle).css('-moz-animation','eatMGbubbs 0s');
});






function detectswipe(el,func) {
      swipe_det = new Object();
      swipe_det.sX = 0;
      swipe_det.sY = 0;
      swipe_det.eX = 0;
      swipe_det.eY = 0;
      var min_x = 40;  //min x swipe for horizontal swipe
      var max_x = 80;  //max x difference for vertical swipe
      var min_y = 40;  //min y swipe for vertical swipe
      var max_y = 80;  //max y difference for horizontal swipe
      var direc = "";
      ele = document.getElementById(el);
      ele.addEventListener('touchstart',function(e){
        var t = e.touches[0];
        swipe_det.sX = t.screenX; 
        swipe_det.sY = t.screenY;
      },false);
      ele.addEventListener('touchmove',function(e){
        e.preventDefault();
        var t = e.touches[0];
        swipe_det.eX = t.screenX; 
        swipe_det.eY = t.screenY;    
      },false);
      ele.addEventListener('touchend',function(e){
        //horizontal detection
        if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
          if(swipe_det.eX > swipe_det.sX) direc = "r";
          else direc = "l";
        }
        //vertical detection
        if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
          if(swipe_det.eY > swipe_det.sY) direc = "d";
          else direc = "u";
        }
    
        if (direc != "") {
          if(typeof func == 'function') func(el,direc);
        }
        direc = "";
      },false);  
    }

    function OneRight(el,d) {
      if(d==="l" && $(".pc").css("display","none!important")===1){
          
          $("#Story2").show();
          $(".StoryPrevMob").show();
          $("#Story1").delay(550).fadeOut(5);
      }else if(d==="r" && $(".pc").css("display","none!important")===1){
          
          $("#Story3").show();
          $(".StoryNextMob").hide();
          $(".StoryPrevMob").show();
          $("#Story1").delay(550).fadeOut(5);
      }
        setTimeout(OneRight,50);
    }

     function TwoRight(el,d) {
      if(d==="l" && $(".pc").css("display","none!important")===1){
          
          $("#Story3").show();
          $(".StoryNextMob").hide();
          $("#Story2").delay(550).fadeOut(5);
      }else if(d==="r" && $(".pc").css("display","none!important")===1){
          
          $("#Story1").show();
          $(".StoryPrevMob").hide();
          $("#Story2").delay(550).fadeOut(5);
      }
         
setTimeout(TwoRight,50);
    }

     function ThreeRight(el,d) {
      if(d==="l" && $(".pc").css("display","none!important")===1){
          
          $("#Story1").show();
          $(".StoryPrevMob").hide();
          $(".StoryNextMob").show();
          $("#Story3").delay(550).fadeOut(5);
      }else if(d==="r" && $(".pc").css("display","none!important")===1){
          
          $("#Story2").show();
          $(".StoryNextMob").show();
          $("#Story3").delay(550).fadeOut(5);
      }
         
setTimeout(ThreeRight,50);
    }



    detectswipe('Story1',OneRight);
    
    detectswipe('Story2',TwoRight);

    detectswipe('Story3',ThreeRight);


    function MoboProshow(el,d) {
      if(d==="u"){
          $("#EatMG, #EatUrban").show();
      }     
setTimeout(MoboProshow,50);
    }

 detectswipe('MoboProshow',MoboProshow);


function MoboEat(el,d) {
      if(d==="u"){
          $("#TastingRoom").show();
        /*  $("#EatMG, #EatUrban").delay(550).fadeOut(5);*/
  }else if(d==="d"){
   /* $("#EatMG, #EatUrban").delay(550).fadeOut(5);   */
  }     
setTimeout(MoboEat,50);
    }

 detectswipe('MoboEat',MoboEat);


function MoboTaste(el,d) {
      if(d==="u"){
      }else if(d==="d"){
          $("#EatMG, #EatUrban").show();
          $("#TastingRoom").delay(550).fadeOut(5);
      }     
setTimeout(MoboTaste,50);
    }

 detectswipe('MoboTaste',MoboTaste);

function MoboStore(el,d) {
     if(d==="d"){
          $("#TastingRoom").show();
      }     
setTimeout(MoboStore,50);
    }

 detectswipe('MoboStore',MoboStore);




function Storyini(el,d) {
     if(d==="u"){
         $("#Story1").hide();
         $("#Story1").show(50);
          
      }     
setTimeout(Storyini,50);
    }

 detectswipe('MoboHome',Storyini);

function OneRightBeer(el,d) {
      if(d==="l"){
          $(".PrevMob").show();
          $(".NextMob").show();
      }else if(d==="r"){
          $(".PrevMob").show();
          $(".NextMob").hide();
      }
         
setTimeout(OneRightBeer,50);
    }

detectswipe('B1',OneRightBeer);

function TwoRightBeer(el,d) {
      if(d==="l"){
          $(".PrevMob").show();
          $(".NextMob").show();
      }else if(d==="r"){
          $(".PrevMob").hide();
          $(".NextMob").show();
      }
         
setTimeout(TwoRightBeer,50);
    }

detectswipe('B2',TwoRightBeer);

function ThreeRightBeer(el,d) {
      if(d==="l"){
          $(".PrevMob").show();
          $(".NextMob").hide();
      }else if(d==="r"){
          $(".PrevMob").show();
          $(".NextMob").show();
      }
         
setTimeout(ThreeRightBeer,50);
    }

detectswipe('B3',ThreeRightBeer);

function FourRightBeer(el,d) {
      if(d==="l"){
          $(".PrevMob").hide();
          $(".NextMob").show();
      }else if(d==="r"){
          $(".PrevMob").show();
          $(".NextMob").show();
      }
         
setTimeout(FourRightBeer,50);
    }

detectswipe('B4',FourRightBeer);



function ipad(el,d) {
    if($(".pc").css("display") !=="none"){
     if(d==="d"){
         
          buttoncheck();
          checkMenu();
      }else if(d==="l"){
         buttoncheck(); 
         checkMenu();
      }else if(d==="r"){
         buttoncheck(); 
         checkMenu();
      }     
    }
    }

 detectswipe('ipadswipe',ipad);
$(".technical-btn").click(function(){
    event.stopPropagation();
    $('.technical').css({
        'display':'block'
    });
    $('.eatMG').css({
        'width':'10%'
    });
    $('.eatUrban').css({
        'width':'0'
    }); 
    $('#tech_close').css({
        'display':'block'
    });
})
$('.eatMG').click(function(){
    $('.technical').css({
        'display':'none'
    });
    $('.eatMG').css({
        'width':'50%'
    });
    $('.eatUrban').css({
        'width':'50%'
    });
    $('#tech_close').css({
        'display':'none'
    });
})
$(".appendToThis").click(function(){
    $(".appendToThis").fadeOut(200); 

})
$(".cultural-btn").click(function(){
     event.stopPropagation();
    console.log("clicked");
    $('.cultural').css({
        'display':'block'
    });
    $('.eatMG').css({
        'width':'0'
    });
    $('.eatUrban').css({
        'width':'10%'
    }); 
    $('#cult_close').css({
        'display':'block'
    });
    
});
$('.eatUrban').click(function(){
    $('.cultural').css({
        'display':'none'
    });
    $('.eatMG').css({
        'width':'50%'
    });
    $('.eatUrban').css({
        'width':'50%'
    });
    $('#cult_close').css({
        'display':'none'
    });
})
    
$(document).ready(function(){
    $('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta > 50) {
            checkMenu();
    checkArr();
    buttoncheck();
        }
        else{
            checkMenu();
    checkArr();
    buttoncheck();
        }
    });
});




/***SHOP GALLERY***/

$(".spoilbtn").click(function(){
      $(".catcont").css("display","flex").fadeIn(300);
    
  })


    $("#item2").click(function(){
        if($("#item1").hasClass("selected")){
            console.log('working');
            $(".catflex1").fadeOut(500).css("display","none");
            $(".catflex2").fadeIn(500).css("display","flex");
            $("#item1").removeClass("selected");
            
        }else if($("#item3").hasClass("selected")){
            console.log('working');
            $(".catflex3").fadeOut(500).css("display","none");
            $(".catflex2").fadeIn(500).css("display","flex");
            $("#item3").removeClass("selected");
            
        }else if($("#item4").hasClass("selected")){
            console.log('working');
            $(".catflex4").fadeOut(500).css("display","none");
            $(".catflex2").fadeIn(500).css("display","flex");
            $("#item4").removeClass("selected");
            
        }else if($("#item5").hasClass("selected")){
            console.log('working');
            $(".catflex5").fadeOut(500).css("display","none");
            $(".catflex2").fadeIn(500).css("display","flex");
            $("#item5").removeClass("selected");
            
        }
        $("#item2").addClass("selected");
    })
    
      $("#item1").click(function(){
        if($("#item2").hasClass("selected")){
            console.log('working');
            $(".catflex2").fadeOut(500).css("display","none");
            $(".catflex1").fadeIn(500).css("display","flex");
            $("#item2").removeClass("selected");
            
        }else if($("#item3").hasClass("selected")){
            console.log('working');
            $(".catflex3").fadeOut(500).css("display","none");
            $(".catflex1").fadeIn(500).css("display","flex");
            $("#item3").removeClass("selected");
            
        }else if($("#item4").hasClass("selected")){
            console.log('working');
            $(".catflex4").fadeOut(500).css("display","none");
            $(".catflex1").fadeIn(500).css("display","flex");
            $("#item4").removeClass("selected");
            
        }else if($("#item5").hasClass("selected")){
            console.log('working');
            $(".catflex5").fadeOut(500).css("display","none");
            $(".catflex1").fadeIn(500).css("display","flex");
            $("#item5").removeClass("selected");
            
        }
        $("#item1").addClass("selected");
    })
      
      
        $("#item3").click(function(){
        if($("#item2").hasClass("selected")){
            console.log('working');
            $(".catflex2").fadeOut(500).css("display","none");
            $(".catflex3").fadeIn(500).css("display","flex");
            $("#item2").removeClass("selected");
            
        }else if($("#item1").hasClass("selected")){
            console.log('working');
            $(".catflex1").fadeOut(500).css("display","none");
            $(".catflex3").fadeIn(500).css("display","flex");
            $("#item1").removeClass("selected");
            
        }else if($("#item4").hasClass("selected")){
            console.log('working');
            $(".catflex4").fadeOut(500).css("display","none");
            $(".catflex3").fadeIn(500).css("display","flex");
            $("#item4").removeClass("selected");
            
        }else if($("#item5").hasClass("selected")){
            console.log('working');
            $(".catflex5").fadeOut(500).css("display","none");
            $(".catflex3").fadeIn(500).css("display","flex");
            $("#item5").removeClass("selected");
            
        }
        $("#item3").addClass("selected");
    })
      
          $("#item4").click(function(){
        if($("#item2").hasClass("selected")){
            console.log('working');
            $(".catflex2").fadeOut(500).css("display","none");
            $(".catflex4").fadeIn(500).css("display","flex");
            $("#item2").removeClass("selected");
            
        }else if($("#item3").hasClass("selected")){
            console.log('working');
            $(".catflex3").fadeOut(500).css("display","none");
            $(".catflex4").fadeIn(500).css("display","flex");
            $("#item3").removeClass("selected");
            
        }else if($("#item1").hasClass("selected")){
            console.log('working');
            $(".catflex1").fadeOut(500).css("display","none");
            $(".catflex4").fadeIn(500).css("display","flex");
            $("#item1").removeClass("selected");
            
        }else if($("#item5").hasClass("selected")){
            console.log('working');
            $(".catflex5").fadeOut(500).css("display","none");
            $(".catflex4").fadeIn(500).css("display","flex");
            $("#item5").removeClass("selected");
            
        }
        $("#item4").addClass("selected");
    })
    
    $("#item5").click(function(){
        if($("#item2").hasClass("selected")){
            console.log('working');
            $(".catflex2").fadeOut(500).css("display","none");
            $(".catflex5").fadeIn(500).css("display","flex");
            $("#item2").removeClass("selected");
            
        }else if($("#item3").hasClass("selected")){
            console.log('working');
            $(".catflex3").fadeOut(500).css("display","none");
            $(".catflex5").fadeIn(500).css("display","flex");
            $("#item3").removeClass("selected");
            
        }else if($("#item1").hasClass("selected")){
            console.log('working');
            $(".catflex1").fadeOut(500).css("display","none");
            $(".catflex5").fadeIn(500).css("display","flex");
            $("#item4").removeClass("selected");
            
        }else if($("#item4").hasClass("selected")){
            console.log('working');
            $(".catflex4").fadeOut(500).css("display","none");
            $(".catflex5").fadeIn(500).css("display","flex");
            $("#item4").removeClass("selected");
            
        }
        $("#item5").addClass("selected");
    })
     
    
  $(".catclose").click(function(){
      $(".catcont").fadeOut(300);
  })

    

  
/*
$(".catflex1 .flexItem:nth-of-type(1) img").click(function(){
    var imgsel = $(".catflex1 .flexItem:nth-of-type(1) img").attr('src');
    console.log(imgsel)
    $(".catcont").append("<div class='lightbox'><div class='lightwrap'><img src="+imgsel+"></div></div>");
    $(".lightbox").click(function(){
    $(".lightbox").fadeOut(500);
        function removal(){
    $(".lightbox").remove();
        }
        setTimeout(removal,300);
    })
})


*/
/*

    function Gallery($a,$b){
    var imgsel = $(".catflex"+$a+" .flexItem:nth-of-type("+$b+") img").attr('src');
    
    $(".catcont").append("<div class='lightbox'><div class='lightwrap'><img src="+imgsel+"></div></div>");
    $(".lightbox").click(function(){
    $(".lightbox").fadeOut(500);
        
        function removal(){
    $(".lightbox").remove();
        }
        setTimeout(removal,500);
    })}
                         


$(".catflex1 .flexItem:nth-of-type(1)").click(function(){
    Gallery(1,1);
})

$(".catflex1 .flexItem:nth-of-type(2)").click(function(){
    Gallery(1,2);
})

$(".catflex1 .flexItem:nth-of-type(3)").click(function(){
    Gallery(1,3);
})

$(".catflex1 .flexItem:nth-of-type(4)").click(function(){
    Gallery(1,4);
})

$(".catflex2 .flexItem:nth-of-type(1)").click(function(){
    Gallery(2,1);
})

$(".catflex2 .flexItem:nth-of-type(2)").click(function(){
    Gallery(2,2);
})

$(".catflex2 .flexItem:nth-of-type(3)").click(function(){
    Gallery(2,3);
})

$(".catflex2 .flexItem:nth-of-type(4)").click(function(){
    Gallery(2,4);
})

$(".catflex2 .flexItem:nth-of-type(5)").click(function(){
    Gallery(2,5);
})

$(".catflex2 .flexItem:nth-of-type(6)").click(function(){
    Gallery(2,6);
})

$(".catflex2 .flexItem:nth-of-type(7)").click(function(){
    Gallery(2,7);
})

$(".catflex2 .flexItem:nth-of-type(8)").click(function(){
    Gallery(2,8);
})

$(".catflex2 .flexItem:nth-of-type(9)").click(function(){
    Gallery(2,9);
})




$(".catflex3 .flexItem:nth-of-type(1)").click(function(){
    Gallery(3,1);
})

$(".catflex3 .flexItem:nth-of-type(2)").click(function(){
    Gallery(3,2);
})

$(".catflex3 .flexItem:nth-of-type(3)").click(function(){
    Gallery(3,3);
})

$(".catflex3 .flexItem:nth-of-type(4)").click(function(){
    Gallery(3,4);
})

$(".catflex3 .flexItem:nth-of-type(5)").click(function(){
    Gallery(3,5);
})

$(".catflex4 .flexItem:nth-of-type(1)").click(function(){
    Gallery(4,1);
})



$(".catflex5 .flexItem:nth-of-type(1)").click(function(){
    Gallery(5,1);
})

$(".catflex5 .flexItem:nth-of-type(2)").click(function(){
    Gallery(5,2);
})

$(".catflex5 .flexItem:nth-of-type(3)").click(function(){
    Gallery(5,3);
})

$(".catflex5 .flexItem:nth-of-type(4)").click(function(){
    Gallery(5,4);
})

$(".catflex5 .flexItem:nth-of-type(5)").click(function(){
    Gallery(5,5);
})


$(document).ready(function() {
    

    
});

*/


var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');

/*
$('input').focus(function() { $.fn.fullpage.destroy(); });
                 
$('input').focusout(function() {  $.fn.createFullpage();});


*/


$('input[type="text"]').blur(function() {
  setTimeout(function() {
    if (!$(document.activeElement).is('input[type="text"]')) {
      $(window).scrollTop(0,0);
    }
  }, 0);
});

$('textarea').blur(function() {
  setTimeout(function() {
    if (!$(document.activeElement).is('input[type="text"]')) {
      $(window).scrollTop(0,0);
    }
  }, 0);
});





 if ( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
     
 }else if($(".mobile").css("display","block") ){
     
     function form(){
         var height = $(window).height();
    var width = $(window).width();
     if(width < height){
         
  var $viewportMeta = $('meta[name="viewport"]');
$('input, select, textarea').bind('focus', function(event) {
$viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' +        (event.type == 'blur' ? 10 : 1));
});  
     }else{
         
     }
     }
     
    $('input').focusin(function() {
         var height = $(window).height();
    var width = $(window).width();
        if(width < height){
         form();
        }
        
     });
     
    
     
     
 }


var mql = window.matchMedia("(orientation: landscape)");


if(mql.matches) {  
	console.log(mql)
} else {  
	
}


mql.addListener(function(m) {
	if(m.matches ) {
		
         var $viewportMeta = $('meta[name="viewport"]');
        $viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no');
	}
	else {
		
	}
});




/*
$(window).on('resize load', function() {
    var height = $(window).height();
    var width = $(window).width();
    if (width > height) {
        //run landscape script
    } else {
        //run portrait script
    };
});

*/

























