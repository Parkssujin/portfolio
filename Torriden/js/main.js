$(document).ready(function() {
    var winH = $(window).height();
    var winW = $(window).width();
    
//    밑에 스크롤 이벤트 도큐먼트 아닌 윈도우로 해도 가능
//    css에서 먼저클래스를 선언 해줘야한다 css자체를 없애거나 생성하게 할 수 없기때문에 class를 사용함
    $(document).scroll(function(){
        if($(this).scrollTop()>=winH) {
            $('header').addClass('headerBack');
        } else{
            $('header').removeClass('headerBack');
        }
    });
    
//    scrollTop은 스크롤의 상하 이동거리를 구해주는 매서드    
        
    $('#slide').css('height', winH);
    $(window).resize(function() {
        winH = $(window).height();
        $('#slide').css('height', winH);
        $('#slide>i').css('top',(winH-$('#slide>i').height())/2);
    });
    
    if(winW>=1280) {
        $('#gnb>li').hover(function() {
            $('.submenu', this).stop().slideDown();
        }, function() {
            $('.submenu', this).stop().slideUp();
        });
        
        $('.item').hover(function(){
            $('i', this).stop().fadeIn();
        },function(){
            $('i', this).stop().fadeOut();
        }); 
    } else {
        $('.item').click(function(){
            $('i', this).stop().fadeToggle();
            $(this).siblings('.item').children('i').fadeOut();
        });
    }
//    siblings 는 형제를 뜻함
    //    this 는 하위 선택자에서만 가능 형제 관계에선 안된다
    
    $('#slide>i').css('top',(winH-$('#slide>i').height())/2);
   
    mainSlide();
    
    $('#slide').hover(function(){
        clearInterval(ms);
    },function(){
        mainSlide();
    });
    
    $('.prev').click(function(){
         $('.slideItem').eq(idx).stop(false, true).fadeOut(800);
         $('#indicator>li').eq(idx).removeClass('current');
        idx==0?idx=cnt:idx--;
        $('.slideItem').eq(idx).stop(false, true).fadeIn(800);
        $('#indicator>li').eq(idx).addClass('current');
    });
    $('.next').click(function(){
        $('.slideItem').eq(idx).stop(false, true).fadeOut(800);
         $('#indicator>li').eq(idx).removeClass('current');
        idx==cnt?idx=0:idx++;
        $('.slideItem').eq(idx).stop(false, true).fadeIn(800);
        $('#indicator>li').eq(idx).addClass('current');
    });
    
    $('.slideItem').each(function(index){
        if(index==0) {
            $('#indicator').append('<li class="current"></li>')
        } else{
            $('#indicator').append('<li ></li>');
        }
    });
//    index==0은 인덱스 번호의 첫번째 즉 슬라이드 첫번째 장
//    append는 객체에 다른 요소를 추가 하는 것 즉 li 를 추가
    
    
    var idx = 0;
    var cnt = $('.slideItem').length - 1;
    var ms;
    function mainSlide() {
        ms = setInterval(function() {
            $('.slideItem').eq(idx).fadeOut(800);
            $('#indicator>li').eq(idx).removeClass('current');
            idx==cnt?idx=0:idx++;
            $('.slideItem').eq(idx).fadeIn(800);
            $('#indicator>li').eq(idx).addClass('current');
        }, 4000);
    }
    
    $('.menu').click(function(){
        $('#innerHeader>nav').animate({left:0}, 800);
    });
    
     $('.menuClose').click(function(){
        $('#innerHeader>nav').animate({left:"-80%"}, 800);
        $('.menu').removeClass('rotate');
    });
    
    $('.mypage').click(function(){
        $('#mypage').animate({right:0}, 800);
    });
    
    $('.setClose').click(function(){
        $('#mypage').animate({right:"-80%"}, 800);
        $('.mypage').removeClass('rotate');
    });
    
    $('#innerHeader>i').click(function(){
        $(this).addClass('rotate');
    });
    
    
    
    
    
    // 모바일에서 best의  이미지 크기 정하기
    if(winW<768) {
        var itemCnt = $('#product>a').length;
        $('#product').width(winW*itemCnt);
        $('#product>a>img').width(winW);
        $('#box').height($('#product>a>img').height()+50);
    }    
        
    var start_x = 0;
    
    $('#product').on('touchstart', function(event) {
        start_x = event.originalEvent.touches[0].pageX;
    });
    
    $('#product').on('touchmove', function(event){ 
//        event.preventDefault();
        move_x = event.originalEvent.targetTouches[0].pageX; 
        var offset = start_x - move_x;
        var dist = Math.abs(offset);
        var minLeft = winW-$(this).width();
        if(offset > 0) {
            $(this).animate({left: '-='+dist}, 0);
            if(parseInt($(this).css('left'))-dist<=minLeft) {
                $(this).stop().animate({left: minLeft}, 400);
            }
            start_x -= dist;
        }
        
        if(offset < 0) {
            $(this).animate({left: '+='+dist}, 0);
            if(parseInt($(this).css('left'))+dist>=0) {
                $(this).stop().animate({left: 0}, 400);
            }
            start_x += dist;
        }
    });
    
    $('#product').on('mousedown', function(event) {
        event.preventDefault();
        start_x = event.originalEvent.pageX;        
    });
    
    $('#product').on('mouseup', function(event){ 
        event.preventDefault();
        move_x = event.originalEvent.pageX;
        var offset = start_x - move_x;
        var dist = Math.abs(offset);
        var minLeft = $('#best').width()-$(this).width();

        if(offset > 0) {
            $(this).animate({left: '-='+dist}, 200);
            if(parseInt($(this).css('left'))-dist<=minLeft) {
                $(this).animate({left: minLeft}, 400);
            }
        }

        if(offset < 0) {
            $(this).animate({left: '+='+dist}, 200);
            if(parseInt($(this).css('left'))+dist>=0) {
                $(this).animate({left: 0}, 400);
            }
        }
    });
    
});