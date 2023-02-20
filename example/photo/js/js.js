$(document).ready(function(){


    // body 높이값과 section의 가로값 통일시키기 
    // article갯수를 구하고  article의 가로값을 구해서 두개를 
    // 곱한값을 section의 가로값으로 변환
    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width((a*(aWd+20))+600);
    $('body').height(a*(aWd+20));
    
    $('html,body').scrollTop(a*(aWd+20))





    $(window).resize(function(){



        //  화면이 리사이즈 될때마다, body 높이값과 section의 가로값 통일시키기 
    // article갯수를 구하고  article의 가로값을 구해서 두개를 
    // 곱한값을 section의 가로값으로 변환
    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width((a*(aWd+20))+600);
    $('body').height(a*(aWd+20));


    })








    // 화면에서 스크롤바가 움직일때 
    //상단의 위치값을 찾아라.

    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        $('h1').text(sc);
        $('section').stop().animate({'left':-sc},600)



    });


    $('.gnb li').click(function(){

        let i = $(this).index();

     $('html,body').scrollTop(1000*i)
    });




    //  article을 클릭했을때 내가 클릭한 
    //  그아이에게 addClass를 해라. 
    //  모든 article에겐 removeClass를 먼저해라.

    $('article h2').click(function(e){
        e.preventDefault(); //기존에 있었던 a의 이벤트값을 없애라.


        // 클릭한 나의 부모자의순번을 찾아라. 
        let id = $(this).parent().index();
        // 클릭한 나의 자손인 'a' 의 속성값
        let src = $(this).children('a').attr('href')
        $('article p img').attr({'src':''})

// 클릭한 나의 형제인 'p'의 자손인'img' 안에 속성명 src 안에 대입해라.
$(this).siblings('p').children('img').attr({'src':src})
        

$('article').removeClass('on')
        $(this).parent().addClass('on')




        $('html,body').scrollTop(200*id)


    });

    // span을 클릭했을때 article에 removeClass를 해라. 
    $('article span').click(function(){
       
        $(this).parent().removeClass('on')
        
        


    })



})