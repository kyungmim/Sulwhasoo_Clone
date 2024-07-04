$(function(){


    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(".sub_bg").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
        $(".sub_bg").stop().slideUp();
    })// hover

    $(".view").slick({
        autoplay:true,
        autoplaySpeed:1000,
        fade : true,
        // vertical:true,
        dots: true,
        arrows:true,
        pauseOnHover: true
    })//

    $(".list").slick({
        autoplay: false,
        dots:true,
        arrows:true,
        slidesToShow : 4,
        slidesToScroll:4
    })//

    $(".with_list").slick({
        autoplay: false,
        dots:false,
        arrows:true,
        slidesToShow : 5,
        slidesToScroll:5
    })//

    $(".banner_list").slick({
        autoplay: true,
        autoplaySpeed:2000,
        dots:false,
        arrows:true
    })//

    $(".sec04_list").slick({
        autoplay: true,
        autoplaySpeed:2500,
        dots:true,
        arrows:true,
        fade:true
    })//

    $(".sec5_list").slick({
        autoplay: false,       
        dots:false,
        arrows:true        
    })//

    $(".sec07_list").slick({
        autoplay: false,       
        dots:true,
        arrows:true        
    })//


    $(".sec08_list").slick({
        autoplay: false,
        dots:false,
        arrows:true,
        slidesToShow :2,
        slidesToScroll:1
    })//





})//jquery