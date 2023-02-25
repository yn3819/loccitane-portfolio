$(function(){

    // scrolla
    $(".animate").scrolla({
        mobile:true,
        once: true,
        animateCssVersion: 3
    });

    // 사이드 gnb - click
    $(".gnb_bar_wrap .gnb_btn").click(function(){
        $("header").addClass("on");
        setTimeout(function(){
            $(".gnb_menu_wrap").addClass("on");
        },100);
    }); 
    $(".gnb_bar_wrap .gnb_close").click(function(){
        $("header").removeClass("on");
        $(".gnb_menu_wrap").removeClass("on");
    });



    // 로그인 모달 창 열기
    $(".side_link .login_icon img").click(function(){
       $(".modal_box_wrap").fadeIn(); 
       $(".modal_bg").fadeIn();
    });

    //모달 닫기 
    $("body").click(function(e){
        if(e.target.className === "close" || e.target.className === "modal_bg"){
            $(".modal_bg").hide();
            $(".modal_box_wrap").hide();
        }
    });
    $(".close").click(function(){
        $(".modal_bg").hide();
        $(".modal_box_wrap").hide();

    });



    // 슬라이드
    $(".slide_box .slide").slick({
        slide: "div",
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        draggable: true,
        prevArrow:(".slide_box .prev"),
        nextArrow:(".slide_box .next"),
        dots: true,
        appendDots:(".custom-slide-dots"),

    });


    $(document).change(function(){
        let lang_select = $("#lang_select_1 option:selected").val();

        if (lang_select === "Americas"){
            $(".footer .select_box .type2 select").removeClass("on");
            $(".footer .select_box .type2 select:nth-of-type(1)").addClass("on");

        } else if (lang_select === "Asia"){
            $(".footer .select_box .type2 select").removeClass("on");
            $(".footer .select_box .type2 select:nth-of-type(2)").addClass("on");
        }
        else if (lang_select === "Europe"){
            $(".footer .select_box .type2 select").removeClass("on");
            $(".footer .select_box .type2 select:nth-of-type(3)").addClass("on");
        }
        else if (lang_select === "Oceania"){
            $(".footer .select_box .type2 select").removeClass("on");
            $(".footer .select_box .type2 select:nth-of-type(4)").addClass("on");
        }
        else if (lang_select === "Africa"){
            $(".footer .select_box .type2 select").removeClass("on");
            $(".footer .select_box .type2 select:nth-of-type(5)").addClass("on");
        }
    });







});

//헤더 
// window.addEventListener("mousewheel", e=>{
//     if(e.deltaY > 0) $("header").addClass("up");
//     if(e.deltaY > 0) $("header").addClass("down");

//     if(e.deltaY < 0) $("header").removeClass("up");
//     if(e.deltaY <= 100 +"px") $("header").removeClass("down");
// });


/* 스크롤 탑
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    // $(".scroll_box").text(scrollTop);

    //홀리데이
    if( scrollTop >= 400) {
         // $(".text_box > h2").addClass("on");
         //$(".text_box > p").addClass("on");
         //$(".gift_box").addClass("on");
        //  $(".section02 .event_contents .event_txt").addClass("on");
     }
     if( scrollTop >= 500) {      
        // $(".photo_box div:nth-of-type(9)").addClass("on");
        // $(".photo_box div:nth-of-type(2)").addClass("on");
        // $(".photo_box div:nth-of-type(4)").addClass("on");
        // $(".photo_box div:nth-of-type(8)").addClass("on");
      
    }
    if( scrollTop >= 500){
        // $(".photo_box div:nth-of-type(1)").addClass("on");
    }
    if( scrollTop >= 800){
        // $(".photo_box div:nth-of-type(3)").addClass("on");
        // $(".photo_box div:nth-of-type(11)").addClass("on");
    }
    if( scrollTop >= 1000) {  
        // $(".photo_box div:nth-of-type(5)").addClass("on");
        // $(".photo_box div:nth-of-type(10)").addClass("on");
        // $(".photo_box div:nth-of-type(6)").addClass("on");
        // $(".photo_box div:nth-of-type(7)").addClass("on");
    }
});

*/