$(".nav-link").click(function(){
    var target = $(this).attr('href').replace("1","")
    //console.log(target);
    click_scroll(target);
});

function click_scroll(Name) {
    var scroll_offset = $(Name).offset();
    //console.log(scroll_offset.top);
    $("body,html").animate({
        scrollTop:scroll_offset.top
    },800);
}

var last_scroll_h = $(this).scrollTop();
var flyin_flag = false;
var rotate_flag = false;
$(window).ready(function(){
    scroll_h = $(this).scrollTop() + $(this).height() * 0.3;
    // Game finin animation
    if(!flyin_flag){
        if( scroll_h > $("#FlyinAnimeBlock").offset().top){
            $("#Game .left_block > .school_block").addClass("flyin_animation");
            $("#Game .right_block > .school_block").addClass("flyin_animation_r");
            // detect the end of animation
            $("#Game .right_block > .school_block").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                $("#Game .left_block > .school_block").removeClass("flyin_animation");
                $("#Game .right_block > .school_block").removeClass("flyin_animation_r");
            });
            flyin_flag = true;
        }
    }
    // research rotate animation
    if(!rotate_flag){
        if(scroll_h > $("#RotateAnimeBlock").offset().top){
            if($(".work_block.filled").length == 4){
                var i = 0;
                $("#Research .rotate_box").each(function(index){
                    if(index == i){
                        var delay = i * 0.2;
                        delay = delay.toString()+"s";
                        $(this).css("animation-delay",delay);
                        $(this).css("display","initial");
                        i += 1;
                    }
                });
                $("#Research .rotate_box").addClass("card_animation");
                rotate_flag = true;
            }
        }
    };
});