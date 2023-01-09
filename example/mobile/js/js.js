$(document).ready(function(){

    // 실행문

    // 시간정보찾기
    let now =new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();


    setInterval(function(){
        let now =new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();

        let hNum;
        let mNum;
        let sNum;


        if(sec>=10){

     sNum = sec
        }else{

            sNum= '0'+sec
        };

        if(min>=10){
            mNum = min
        }else{
            mNum= '0'+min
        }

        if(hr>=10){
            hNum = hr
        }else{
            hNum= '0'+hr
        }




    
        $('.phone span').eq(0).text(hNum);
        $('.phone span').eq(1).text(mNum);
        $('.phone span').eq(2).text(sNum);


        if(min>=30){
            $('#wrap').removeClass()
            $('#wrap').addClass('evening')
        }

    
    },1000);


$('nav li').click(function(){
    let txt= $(this).text()
    console.log(txt)
    $('#wrap').removeClass()
    $('#wrap').addClass(txt)



 
})





})