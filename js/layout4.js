$(function(){

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

    //filter click
    $(".fliter_tit div").click(function(){
        $(".fliter_tit div").removeClass("on"); //div.on 지우고
        $(this).addClass("on"); //div(this)에 on 추가
    
        if($(".fliter_tit div:nth-of-type(1)").hasClass("on")){
            $(".shop_2 .check_2").removeClass("on");
            $(".shop_2 .check_1").addClass("on");
        } else if($(".fliter_tit div:nth-of-type(2)").hasClass("on")){
            $(".shop_2 .check_1").removeClass("on");
            $(".shop_2 .check_2").addClass("on");
        }

    });

    // map
    $("#hand,#skin,#spar").change(function(){
       if(($("#hand").is(":checked") == true) && ($("#skin").is(":checked") == true) && ($("#spar").is(":checked") == true)){
           $(".shop_3 > div").removeClass("on");
        //    $(".store_1").addClass("on");
        //    $(".store_2").addClass("on");
        //    $(".store_3").addClass("on");
        //    $(".store_4").addClass("on");
        //    $(".store_5").addClass("on");
        //    $(".store_6").addClass("on");
        //    $(".store_7").addClass("on");
        //    $(".store_8").addClass("on");
       } else if(($("#hand").is(":checked") == true) && ($("#skin").is(":checked") == true) && ($("#spar").is(":checked") == false)){
           $(".shop_3 > div").removeClass("on");
           $(".store_1").addClass("on");
           $(".store_2").addClass("on");
           $(".store_3").addClass("on");
           $(".store_4").addClass("on");
           $(".store_8").addClass("on");
       } else if(($("#hand").is(":checked") == true) && ($("#skin").is(":checked") == false) && ($("#spar").is(":checked") == true)){
           $(".shop_3 > div").removeClass("on");
           $(".store_3").addClass("on");
           $(".store_4").addClass("on");
           $(".store_5").addClass("on");
           $(".store_6").addClass("on");
           $(".store_7").addClass("on");
       } else if(($("#hand").is(":checked") == false) && ($("#skin").is(":checked") == true) && ($("#spar").is(":checked") == true)){
           $(".shop_3 > div").removeClass("on");
           $(".store_1").addClass("on");
           $(".store_2").addClass("on");
           $(".store_5").addClass("on");
           $(".store_6").addClass("on");
           $(".store_7").addClass("on");
           $(".store_8").addClass("on");
       }else {
           $(".shop_3 > div").removeClass("on");
       }
       if(($("#hand").is(":checked") == true) && ($("#skin").is(":checked") == false) && ($("#spar").is(":checked") == false)){
           $(".store_3").addClass("on");
           $(".store_4").addClass("on");
       }
       if(($("#hand").is(":checked") == false) && ($("#skin").is(":checked") == true) && ($("#spar").is(":checked") == false)){
           $(".store_1").addClass("on");
           $(".store_2").addClass("on");
           $(".store_8").addClass("on");
       }
       if(($("#hand").is(":checked") == false) && ($("#skin").is(":checked") == false) && ($("#spar").is(":checked") == true)){
           $(".store_5").addClass("on");
           $(".store_6").addClass("on");
           $(".store_7").addClass("on");
       }
    });

    //footer
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
