$(document).ready(function(){
  
    $(".burger-bt").click(function(){
        $($(this).children("i")).toggleClass("ri-menu-2-fill ri-close-line");
        $(".super-menu").toggleClass("active");
    });

    $(".src-button").click(function(){
        $(".src-form").addClass("show");
    });

});