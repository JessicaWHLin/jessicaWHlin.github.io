$(function(){
    $(".question").click(function(){
        $(".answer").slideToggle("slow");
        $(".xs1").toggle();
        $(".xs2").toggle();
    });
});