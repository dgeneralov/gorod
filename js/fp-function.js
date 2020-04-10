jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
   sectionsColor:['transporent'],
   anchors:['home','history','diskography','photo','video','contacts'],
   menu:'#menu',
   scrollBar:false,
   scrollOverflow:true,
   navigation:true,
   navigationTooltips:['Секция 1','Секция 2','Секция 3'],
   slidesNavigation:true,
   navigationPosition:'left',
   slidesNavPosition:'top',
   loopTop:true,
   loopBottom:true,
   loopHorizontal:false,
   
   //afterResize:function(link,index) {
   //alert('Hello');
   //},
   afterLoad:function(link,index) {
   
   if(index == 3) {
   $("#section2 img").delay(2000).animate({'left':'0%'},2000);
   }
   if(link == '3rdPage') {
   $("#section2 h1").fadeIn(1500,function() {
   $("#section2 p").css({'display':'block'}).animate({'fontSize':'8em'},1000)
   });
   }
   
   }
   
    });
   })