jQuery (document).ready(function ($) {
  $("#tab-1").show();
  $("#tab-2").hide();
  $("#tab-3").hide();

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});

$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});

$("#ourworks").click(function(){

$("#tab-1").slideToggle("slow");
  $("#tab-2").hide();
  $("#tab-3").hide();
  
})
$("#opensource").click(function(){

  $("#tab-2").slideToggle("slow");
  $("#tab-1").hide();
  $("#tab-3").hide();
})
$("#aboutus").click(function(){

  $("#tab-3").slideToggle("slow");
  $("#tab-2").hide();
  $("#tab-1").hide()
})
   
   
});