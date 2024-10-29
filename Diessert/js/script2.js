$(document).ready(function() {
    
//    메뉴
  
      $('#gnb>li').hover(function(){
        $('.submenu', this).stop().slideDown();
    },function(){
        $('.submenu', this).stop().slideUp();
    });
    
        $('#gnb>li>.bar').hover(function(){
        $('.submenu, #mBack').stop().slideDown();
    },function(){
        $('.submenu, #mBack').stop().slideUp();
    });
    
    
//    슬라이드
    
     var idx = 0;
    setInterval(function(){
        $('#slide>.scene').eq(idx).fadeOut(800);
        idx==1?idx=0:idx++;
        $('#slide>.scene').eq(idx).delay(400).fadeIn(800);
    },3000);
    
    
     
    
//    섹션 슬라이드
    var imgW = $('#goods>a>img').width()+10;
    var imgC = $('#goods>a').length-1;
    $('#goods>a').each(function(idx) {
        $(this).css({left: idx*imgW});
    });
    
    goodsSlide();
    
    $('#goods').hover(function() {
        clearInterval(ls);
        $('#goods>i').fadeIn();
    }, function() {
        goodsSlide();
        $('#goods>i').fadeOut();
    });
    
    function goodsSlide() {
        ls = setInterval(function(){
            $('#goods>a').each(function(){
                $(this).animate({left: '-='+imgW});
                if($(this).css('left')=='0px'){
                    $(this).animate({left: imgW*imgC}, 0);
                }
            });
        }, 3000);
    }
    
    $('.arrowL').click(function(){//previous
        $('#goods>a').each(function(){
            $(this).stop(false, true);
            if($(this).css('left')==imgC*imgW+'px'){
                $(this).animate({left: -imgW}, 0);
            }
            $(this).animate({left: '+='+imgW});
        });
    });
    $('.arrowR').click(function(){//next
        $('#goods>a').each(function(){
            $(this).stop(false, true).animate({left: '-='+imgW});
            if($(this).css('left')=='0px'){
                $(this).animate({left: imgW*imgC}, 0);
            }
        });
    });
    
//    센션 베스트슬라이드
        
    var g2W = $('#goods2>a>img').width()+10;
    var g2C = $('#goods2>a').length-1;
    $('#goods2>a').each(function(idx) {
        $(this).css({left: idx*g2W});
    });
    
    goods2Slide();
    
    $('#goods2').hover(function() {
        clearInterval(gs);
        $('#goods2>i').fadeIn();
    }, function() {
        goods2Slide();
        $('#goods2>i').fadeOut();
    });
    
    function goods2Slide() {
        gs = setInterval(function(){
            $('#goods2>a').each(function(){
                $(this).animate({left: '-='+g2W});
                if($(this).css('left')=='0px'){
                    $(this).animate({left: g2W*g2C}, 0);
                }
            });
        }, 3000);
    }
    
    $('.prev').click(function(){//previous
        $('#goods2>a').each(function(){
            $(this).stop(false, true);
            if($(this).css('left')==g2C*g2W+'px'){
                $(this).animate({left: -g2W}, 0);
            }
            $(this).animate({left: '+='+g2W});
        });
    });
    $('.next').click(function(){//next
        $('#goods2>a').each(function(){
            $(this).stop(false, true).animate({left: '-='+g2W});
            if($(this).css('left')=='0px'){
                $(this).animate({left: g2W*g2C}, 0);
            }
        });
    });
    
//    섹션 새로운존
    
    var g3W = $('#goods3>a>img').width()+10;
    var g3C = $('#goods3>a').length-1;
    $('#goods3>a').each(function(idx) {
        $(this).css({left: idx*g3W});
    });

    goods3Slide();
    
    $('#goods3').hover(function() {
        clearInterval(ns);
        $('#goods3>i').fadeIn();
    }, function() {
        goods3Slide();
        $('#goods3>i').fadeOut();
    });
    
    function goods3Slide() {
        ns = setInterval(function(){
            $('#goods3>a').each(function(){
                $(this).animate({left: '-='+g3W});
                if($(this).css('left')=='0px'){
                    $(this).animate({left: g3W*g3C}, 0);
                }
            });
        }, 3000);
    }
     $('.arrowL3').click(function(){//previous
        $('#goods3>a').each(function(){
            $(this).stop(false, true);
            if($(this).css('left')==g3C*g3W+'px'){
                $(this).animate({left: -g3W}, 0);
            }
            $(this).animate({left: '+='+g3W});
        });
    });
    $('.arrowR3').click(function(){//next
        $('#goods3>a').each(function(){
            $(this).stop(false, true).animate({left: '-='+g3W});
            if($(this).css('left')=='0px'){
                $(this).animate({left: g3W*g3C}, 0);
            }
        });
    });
    
//    색션 무료배송존
     
    var g4W = $('#goods4>a>img').width()+10;
    var g4C = $('#goods4>a').length-1;
    $('#goods4>a').each(function(idx) {
        $(this).css({left: idx*g4W});
    });
    
    goods4Slide();
    
    $('#goods4').hover(function() {
        clearInterval(fs);
        $('#goods4>i').fadeIn();
    }, function() {
        goods4Slide();
        $('#goods4>i').fadeOut();
    });
    
    function goods4Slide() {
        fs = setInterval(function(){
            $('#goods4>a').each(function(){
                $(this).animate({left: '-='+g4W});
                if($(this).css('left')=='0px'){
                    $(this).animate({left: g4W*g4C}, 0);
                }
            });
        }, 3000);
    }
    
    $('arrowL4').click(function(){//previous
        $('#goods4>a').each(function(){
            $(this).stop(false, true);
            if($(this).css('left')==g4C*g4W+'px'){
                $(this).animate({left: -g4W}, 0);
            }
            $(this).animate({left: '+='+g4W});
        });
    });
    $('.arrowR4').click(function(){//next
        $('#goods4>a').each(function(){
            $(this).stop(false, true).animate({left: '-='+g4W});
            if($(this).css('left')=='0px'){
                $(this).animate({left: g4W*g4C}, 0);
            }
        });
    });
    
    
});