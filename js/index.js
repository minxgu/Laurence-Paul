var $wish = null;
var $ColorList01 = null;
var $ColorList02 = null;
var $ColorList03 = null;
var $ColorList04 = null;
var $ColorList05 = null;
var $ColorList06 = null;
var $sort01 = null;
var $sort02 = null;
var $sort03 = null;


$(document).ready(function(){
    init();
    addremoveClass($wish);
    sortOpen($sort01);
    sortOpen($sort02);
    sortOpen($sort03);
    radioClass($ColorList01);
    radioClass($ColorList02);
    radioClass($ColorList03);
    radioClass($ColorList04);
    radioClass($ColorList05);
    radioClass($ColorList06);
    headerChange();
    loginOpen();
    loginClose();
    menuHamberg();
    goTop();
    liHeight02();
    toastUp();
    toastDown();
    infoUp();
    productChange();
    slider01();
    slider02();
    slider03();
    slider04();
});


function init(){
    $wish = $(".btn_wish");
    $ColorList01 = $(".list > .inner > ul > li:nth-of-type(2) > div ol li");
    $ColorList02 = $(".list > .inner > ul > li:nth-of-type(3) > div ol li");
    $ColorList03 = $(".list > .inner > ul > li:nth-of-type(4) > div ol li");
    $ColorList04 = $(".list > .inner > ul > li:nth-of-type(5) > div ol li");
    $ColorList05 = $(".list > .inner > ul > li:nth-of-type(6) > div ol li");
    $ColorList06 = $(".list > .inner > ul > li:last-of-type > div ol li");
    $sort01 = $(".sortby > ul > li:first-of-type > .btn_sort");
    $sort02 = $(".sortby > ul > li:nth-of-type(2) > .btn_sort");
    $sort03 = $(".sortby > ul > li:last-of-type > .btn_sort");
};

function addremoveClass(target){
    target.click(function () {
        if ($(this).hasClass("active") === true) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        };
    });
};

function sortOpen(sortby){
    sortby.click(function () {
        if ($(this).next("ol").is(":visible")) {
            $(this).next("ol").slideUp();
        } else {
            $(this).next("ol").slideDown();
        }
    });
    sortby.siblings().children().click(function () {
        if (sortby.siblings().is(":visible")) {
            sortby.siblings().slideUp();
        } else {
            sortby.siblings().slideDown();
        }
    });
};

function radioClass(color){
    color.on('mouseover', function () {
        color.removeClass("active");
        $(this).addClass("active");
    });
};

function headerChange(){
    $(document).scroll(function () {
        if ($(window).scrollTop() != 0) {
            $('header').addClass('headerChange');
        } else {
            $('header').removeClass('headerChange');
        };
    });
};

function loginOpen(){
    $("header > .inner > button:last-of-type").click(function () {
        $("header > .inner > div").addClass("open");
        $("header > .inner > .hamberg").removeClass("active");
        $("header > .inner > nav").removeClass("active");
        $("header > .inner > button:last-of-type").removeClass("active");
    });
};

function loginClose(){
    $("header > .inner .close").click(function () {
        $("header > .inner > div").removeClass("open");
    });
};

function menuHamberg(){
    $("header > .inner > .hamberg").click(function(){
        if ($(this).hasClass("active") === true) {
            $("header > .inner > .hamberg").removeClass("active");
            $("header > .inner > nav").removeClass("active");
            $("header > .inner > button:last-of-type").removeClass("active");
        } else {
            $("header > .inner > .hamberg").addClass("active");
            $("header > .inner > nav").addClass("active");
            $("header > .inner > button:last-of-type").addClass("active");
        };
    });
};

function goTop(){
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        };
    });
};

function liHeight02(){
    var li_h = $(".list .inner ul > li:last-of-type").height();
    $(".list .inner ul > li:first-of-type").height(li_h);
    $(window).resize(function () {
        li_h = $(".list .inner ul > li:last-of-type").height();
        setTimeout(function () {
            $(".list .inner ul > li:first-of-type").height(li_h);
        }, 0);
    });
};

function toastUp(){
    $(".detailview .detail_right_info button").click(function () {
        $(".toast").addClass("boxUp");
        setTimeout(function () {
            $(".toast").removeClass("boxUp");
        }, 3000);
    });
};

function toastDown(){
    $(".toast button").click(function () {
        $(".toast").removeClass("boxUp");
    });
};

function infoUp(){
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 3500) {
            $('.detailview .inner .detail_right_info').fadeOut();
        } else {
            $('.detailview .inner .detail_right_info').fadeIn();
        };
    });
};


function productChange(){
    // SUNGLASS 

    // target.1 .sunglass.list > .inner > ul > li:nth-of-type(2) > div ol li:first-of-type span
    /*
        a1 . .sunglass.list > .inner > ul > li:nth-of-type(2) > div ol li:first-of-type span

        for (var i = 2; i < 7; i++) {
            var mainList = $('.sunglass.list > .inner > ul > li:nth-of-type'+'('+i+')');
            for (var j = 1; j < 3; j++) {
                var subList = $('div ol'+'li:nth-of-type'+'('+j+')');
            }
            var listTarget =  mainList + subList;
            return listTarget;


            // array Data
            var glassArray = ['SOY c.03']
            text(glassArray[0]);
    */
    $(".sunglass.list > .inner > ul > li:nth-of-type(2) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(2) > div dl dt").text("SOY c.03");
        $(".list > .inner > ul > li:nth-of-type(2) > a").prop('href', "sundetailsoy03.html");
        $(".list > .inner > ul > li:nth-of-type(2) > a img").prop('src', "images/list/list_sun/soy03_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(2) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(2) > div dl dt").text("SOY c.02");
        $(".list > .inner > ul > li:nth-of-type(2) > a").prop('href', "sundetailsoy02.html");
        $(".list > .inner > ul > li:nth-of-type(2) > a img").prop('src', "images/list/list_sun/soy02_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(2) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(2) > div dl dt").text("SOY c.01");
        $(".list > .inner > ul > li:nth-of-type(2) > a").prop('href', "sundetailsoy01.html");
        $(".list > .inner > ul > li:nth-of-type(2) > a img").prop('src', "images/list/list_sun/soy01_01.png");
    });

    $(".sunglass.list > .inner > ul > li:nth-of-type(3) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dt").text("EDIT c.01");
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dd").text("SOLDOUT").addClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(3) > a").prop('href', "sundetailedit01.html");
        $(".list > .inner > ul > li:nth-of-type(3) > a img").prop('src', "images/list/list_sun/edit01_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(3) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dt").text("EDIT c.02");
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dd").text("USD 195.00").removeClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(3) > a").prop('href', "sundetailedit02.html");
        $(".list > .inner > ul > li:nth-of-type(3) > a img").prop('src', "images/list/list_sun/edit02_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(3) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dt").text("EDIT c.04");
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dd").text("USD 195.00").removeClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(3) > a").prop('href', "sundetailedit04.html");
        $(".list > .inner > ul > li:nth-of-type(3) > a img").prop('src', "images/list/list_sun/edit04_01.png");
    });

    $(".sunglass.list > .inner > ul > li:nth-of-type(4) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dt").text("TANGO c.02");
        $(".list > .inner > ul > li:nth-of-type(4) > a").prop('href', "sundetailtango02.html");
        $(".list > .inner > ul > li:nth-of-type(4) > a img").prop('src', "images/list/list_sun/tango02_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(4) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dt").text("TANGO c.03");
        $(".list > .inner > ul > li:nth-of-type(4) > a").prop('href', "sundetailtango03.html");
        $(".list > .inner > ul > li:nth-of-type(4) > a img").prop('src', "images/list/list_sun/tango03_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(4) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dt").text("TANGO c.04");
        $(".list > .inner > ul > li:nth-of-type(4) > a").prop('href', "sundetailtango04.html");
        $(".list > .inner > ul > li:nth-of-type(4) > a img").prop('src', "images/list/list_sun/tango04_01.png");
    });

    $(".sunglass.list > .inner > ul > li:nth-of-type(5) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dt").text("ARTY c.01");
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dd").text("USD 195.00").removeClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(5) > a").prop('href', "sundetailarty01.html");
        $(".list > .inner > ul > li:nth-of-type(5) > a img").prop('src', "images/list/list_sun/arty01_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(5) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dt").text("ARTY c.02");
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dd").text("USD 195.00").removeClass("soldOut");
        $(".list > .inner > ul > li:nth-of-type(5) > a").prop('href', "sundetailarty02.html");
        $(".list > .inner > ul > li:nth-of-type(5) > a img").prop('src', "images/list/list_sun/arty02_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(5) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dt").text("ARTY c.03");
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dd").text("SOLDOUT").addClass("soldOut");
        $(".list > .inner > ul > li:nth-of-type(5) > a").prop('href', "sundetailarty03.html");
        $(".list > .inner > ul > li:nth-of-type(5) > a img").prop('src', "images/list/list_sun/arty03_01.png");
    });

    $(".sunglass.list > .inner > ul > li:nth-of-type(6) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dt").text("SELECT c.04");
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dd").text("USD 195.00").removeClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(6) > a").prop('href', "sundetailselect04.html");
        $(".list > .inner > ul > li:nth-of-type(6) > a img").prop('src', "images/list/list_sun/select04_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(6) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dt").text("SELECT c.01");
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dd").text("SOLDOUT").addClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(6) > a").prop('href', "sundetailselect01.html");
        $(".list > .inner > ul > li:nth-of-type(6) > a img").prop('src', "images/list/list_sun/select01_01.png");
    });
    $(".sunglass.list > .inner > ul > li:nth-of-type(6) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dt").text("SELECT c.03");
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dd").text("USD 195.00").removeClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(6) > a").prop('href', "sundetailselect03.html");
        $(".list > .inner > ul > li:nth-of-type(6) > a img").prop('src', "images/list/list_sun/select03_01.png");
    });

    $(".sunglass.list > .inner > ul > li:last-of-type > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:last-of-type > div dl dt").text("PAUL02 c.01");
        $(".list > .inner > ul > li:last-of-type > a").prop('href', "sundetailpaul0201.html");
        $(".list > .inner > ul > li:last-of-type > a img").prop('src', "images/list/list_sun/paul02_01_01.png");
    });
    $(".sunglass.list > .inner > ul > li:last-of-type > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:last-of-type > div dl dt").text("PAUL02 c.02");
        $(".list > .inner > ul > li:last-of-type > a").prop('href', "sundetailpaul0202.html");
        $(".list > .inner > ul > li:last-of-type > a img").prop('src', "images/list/list_sun/paul02_02_01.png");
    });
    $(".sunglass.list > .inner > ul > li:last-of-type > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:last-of-type > div dl dt").text("PAUL02 c.03");
        $(".list > .inner > ul > li:last-of-type > a").prop('href', "sundetailpaul0203.html");
        $(".list > .inner > ul > li:last-of-type > a img").prop('src', "images/list/list_sun/paul02_03_01.png");
    });

    // GLASSES 
    $(".glasses.list > .inner > ul > li:nth-of-type(2) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(2) > div dl dt").text("SWAN c.05");
        $(".list > .inner > ul > li:nth-of-type(2) > a").prop('href', "optdetailswan05.html");
        $(".list > .inner > ul > li:nth-of-type(2) > a img").prop('src', "images/list/list_opt/swan05_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(2) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(2) > div dl dt").text("SWAN c.01-1");
        $(".list > .inner > ul > li:nth-of-type(2) > a").prop('href', "optdetailswan01.html");
        $(".list > .inner > ul > li:nth-of-type(2) > a img").prop('src', "images/list/list_opt/swan01_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(2) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(2) > div dl dt").text("SWAN c.06");
        $(".list > .inner > ul > li:nth-of-type(2) > a").prop('href', "optdetailswan06.html");
        $(".list > .inner > ul > li:nth-of-type(2) > a img").prop('src', "images/list/list_opt/swan06_01.png");
    });

    $(".glasses.list > .inner > ul > li:nth-of-type(3) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dt").text("NETTIE c.02");
        $(".list > .inner > ul > li:nth-of-type(3) > a").prop('href', "optdetailnettie02.html");
        $(".list > .inner > ul > li:nth-of-type(3) > a img").prop('src', "images/list/list_opt/nettie02_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(3) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dt").text("NETTIE c.03");
        $(".list > .inner > ul > li:nth-of-type(3) > a").prop('href', "optdetailnettie03.html");
        $(".list > .inner > ul > li:nth-of-type(3) > a img").prop('src', "images/list/list_opt/nettie03_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(3) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(3) > div dl dt").text("NETTIE c.04");
        $(".list > .inner > ul > li:nth-of-type(3) > a").prop('href', "optdetailnettie04.html");
        $(".list > .inner > ul > li:nth-of-type(3) > a img").prop('src', "images/list/list_opt/nettie04_01.png");
    });

    $(".glasses.list > .inner > ul > li:nth-of-type(4) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dt").text("ARGON c.03");
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dd").text("USD 240.00").removeClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(4) > a").prop('href', "optdetailargon03.html");
        $(".list > .inner > ul > li:nth-of-type(4) > a img").prop('src', "images/list/list_opt/argon03_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(4) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dt").text("ARGON c.01");
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dd").text("SOLDOUT").addClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(4) > a").prop('href', "optdetailargon01.html");
        $(".list > .inner > ul > li:nth-of-type(4) > a img").prop('src', "images/list/list_opt/argon01_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(4) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dt").text("ARGON c.02");
        $(".list > .inner > ul > li:nth-of-type(4) > div dl dd").text("USD 240.00").removeClass("soldOut");;
        $(".list > .inner > ul > li:nth-of-type(4) > a").prop('href', "optdetailargon02.html");
        $(".list > .inner > ul > li:nth-of-type(4) > a img").prop('src', "images/list/list_opt/argon02_01.png");
    });

    $(".glasses.list > .inner > ul > li:nth-of-type(5) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dt").text("OFFSET c.04");
        $(".list > .inner > ul > li:nth-of-type(5) > a").prop('href', "optdetailoffset04.html");
        $(".list > .inner > ul > li:nth-of-type(5) > a img").prop('src', "images/list/list_opt/offset04_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(5) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dt").text("OFFSET c.02");
        $(".list > .inner > ul > li:nth-of-type(5) > a").prop('href', "optdetailoffset02.html");
        $(".list > .inner > ul > li:nth-of-type(5) > a img").prop('src', "images/list/list_opt/offset02_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(5) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(5) > div dl dt").text("OFFSET c.01");
        $(".list > .inner > ul > li:nth-of-type(5) > a").prop('href', "optdetailoffset01.html");
        $(".list > .inner > ul > li:nth-of-type(5) > a img").prop('src', "images/list/list_opt/offset01_01.png");
    });

    $(".glasses.list > .inner > ul > li:nth-of-type(6) > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dt").text("KOO KOO c.01");
        $(".list > .inner > ul > li:nth-of-type(6) > a").prop('href', "optdetailkookoo01.html");
        $(".list > .inner > ul > li:nth-of-type(6) > a img").prop('src', "images/list/list_opt/kookoo01_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(6) > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dt").text("KOO KOO c.02");
        $(".list > .inner > ul > li:nth-of-type(6) > a").prop('href', "optdetailkookoo02.html");
        $(".list > .inner > ul > li:nth-of-type(6) > a img").prop('src', "images/list/list_opt/kookoo02_01.png");
    });
    $(".glasses.list > .inner > ul > li:nth-of-type(6) > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:nth-of-type(6) > div dl dt").text("KOO KOO c.03");
        $(".list > .inner > ul > li:nth-of-type(6) > a").prop('href', "optdetailkookoo03.html");
        $(".list > .inner > ul > li:nth-of-type(6) > a img").prop('src', "images/list/list_opt/kookoo03_01.png");
    });

    $(".glasses.list > .inner > ul > li:last-of-type > div ol li:first-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:last-of-type > div dl dt").text("COUVER02 c.02");
        $(".list > .inner > ul > li:last-of-type > a").prop('href', "optdetailcouver0202.html");
        $(".list > .inner > ul > li:last-of-type > a img").prop('src', "images/list/list_opt/couver02_02_01.png");
    });
    $(".glasses.list > .inner > ul > li:last-of-type > div ol li:nth-of-type(2) span").on('mouseover', function () {
        $(".list > .inner > ul > li:last-of-type > div dl dt").text("COUVER02 c.01");
        $(".list > .inner > ul > li:last-of-type > a").prop('href', "optdetailcouver0201.html");
        $(".list > .inner > ul > li:last-of-type > a img").prop('src', "images/list/list_opt/couver02_01_01.png");
    });
    $(".glasses.list > .inner > ul > li:last-of-type > div ol li:last-of-type span").on('mouseover', function () {
        $(".list > .inner > ul > li:last-of-type > div dl dt").text("COUVER02 c.04");
        $(".list > .inner > ul > li:last-of-type > a").prop('href', "optdetailcouver0204.html");
        $(".list > .inner > ul > li:last-of-type > a img").prop('src', "images/list/list_opt/couver02_04_01.png");
    });
};

function slider01(){
    $('.slider01').bxSlider({
        mode: 'fade',
        speed: 500,
        easing: 'ease-in-out',
        preloadImages: 'visible',
        adaptiveHeight: false,
        responsive: true,
        pagerType: 'short',
        shrinkItems: true,
        mouseDrag: false,
        touchEnabled: true,
    });
};

function slider02(){
    $('.slider02').bxSlider({
        mode: 'horizontal',
        speed: 500,
        easing: 'ease-in-out',
        minSlides: 2,
        maxSlides: 3,
        slideMargin: 0,
        moveSlides: 3,
        slideWidth: 430,
        shrinkItems: true,
        touchEnabled: false,
        pager: false,
    });
};

function slider03(){
    $('.slider03').bxSlider({
        mode: 'horizontal',
        speed: 500,
        easing: 'ease-in-out',
        minSlides: 2,
        maxSlides: 3,
        slideMargin: 0,
        moveSlides: 1,
        slideWidth: 430,
        shrinkItems: true,
        touchEnabled: false,
        pager: false,
    });
};

function slider04(){
    $('.slider04').bxSlider({
        mode: 'fade',
        speed: 500,
        easing: 'ease-in-out',
        preloadImages: 'visible',
        adaptiveHeight: false,
        responsive: true,
        pagerType: 'short',
        shrinkItems: true,
        mouseDrag: false,
        touchEnabled: true,
    });
};
