$(function () {


    // Show overlay
    $('.to-overlay').click(function (e) { 
        e.preventDefault();
        $('.page-header .overlay-pop').toggleClass('show');
    });
    $('.page-header .overlay-pop').click(function (e) { 
        e.preventDefault();
        $(this).removeClass('show');
        $('.small-pop').removeClass('show')
    });

    // Language Button
    $('.navbar .left-btns #langDropdown').click(function (e) { 
        e.preventDefault();
        $('.page-header .navbar .left-btns .langs').toggleClass('active');
    });

    // Overflow for navbar
    $('.navbar-toggler').click(function (e) { 
        e.preventDefault();
        $('.page-header .navbar.navbar-expand-lg').toggleClass('over');
    });

    // Numbers in accordions
    var all_nums = $('.contact .btn-open .num');
    var i;
    for(i=0; i<all_nums.length; i++){
        all_nums[i].innerHTML = i+1
    };

    // Tabs in home page
    $(".header-sec .tabs .tab").click(function(){
        console.log("#" + $(this).data("target"));
        $(".tab-contents#" + $(this).data("target")).addClass('show').siblings('.tab-contents').removeClass('show');
        $(this).addClass('active').siblings('.tab').removeClass('active');
    });

    // Show Pop Up for Filters in Rhalati Page
    $('.travels-sec .top-tabs .to-overlay').click(function (e) { 
        e.preventDefault();
        $('.travels-sec .parent-div .top-tabs .small-pop').toggleClass('show');
    });

    // Show Pop Up for Menu of Travel Single Box
    $('.travels-sec .boxes .single-box .menu.to-overlay').click(function (e) { 
        e.preventDefault();
        $(this).siblings('.small-pop').toggleClass('show');
    });









    // Carousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 120,
        nav: false,
        // autoplay: true,
        // autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

});