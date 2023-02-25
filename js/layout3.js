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

   //FAQ
    $(".txt_wrap dt").click(function(){
        $(this).toggleClass("open");
        if($(this).hasClass("open")){
            $(".txt_wrap dt").not(this).removeClass("open")
        }
    })

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
