
//開始時間設定
//var i = 60000*60;
var i = 10000;


// 一定時間後に処理を行う
const intervalId1 =setTimeout(timer1,i);
function timer1(){

     // スクリプト開始時の時間を取得
     var oldTime = Date.now();

     let intervalId2 = setInterval(timer,1000);

     function timer(){
         let currentTime = Date.now();
         // 経過したミリ秒を取得
         let diff = currentTime - oldTime;

         // 秒数を得る
         let sec = Math.floor(diff / 1000);

         //twitter用
         //  bodyにかけるブラーの値を経過時間で変更
        let reactRoot = document.querySelector('#react-root');

        if(sec==0){
            reactRoot.style.filter = `blur(0px)`;
        }else if(sec>0 && sec<2){
            reactRoot.style.filter = `blur(50px)`;
        }else if(sec>=2 && sec<4){
            reactRoot.style.filter = `blur(0px)`;
        }else if(sec>=5 && sec<7){
            reactRoot.style.filter = `blur(50px)`;
        }else if(sec>=7 && sec<9){
            reactRoot.style.filter = `blur(0px)`;
        }else if(sec>=11 && sec<14){
            reactRoot.style.filter = `blur(50px)`;
        }else if(sec>=14 && sec<15){
            reactRoot.style.filter = `blur(0px)`;
        }else if (sec>=18 && sec<20){
            reactRoot.style.filter = `blur(50px)`;
        }else if(sec>=20 && sec<21){
            reactRoot.style.filter = `blur(0px)`;
        }else if (sec>=22 && sec<24){
            reactRoot.style.filter = `blur(50px)`;
        }else if(sec>=24 && sec<25){
            reactRoot.style.filter = `blur(0px)`;
        }else if (sec>=30 && sec<31){
            reactRoot.style.filter = `blur(${sec*2}px)`;
        }else if(sec>=32 && sec<34){
            reactRoot.style.filter = `blur(0px)`;
        }else if (sec>=34 && sec<70){
            reactRoot.style.filter = `blur(${sec*2}px)`;
        }else if(sec>=70 && sec<75){
            reactRoot.style.filter = `blur(${75-sec}px)`;
        }else if(sec>=75 && sec <80 ){
            reactRoot.style.filter = `blur(0px)`;
        }else if(sec>=80){ 
            // 90秒以上は20秒ごとにブラーフィルターを交互にかける
            reactRoot.style.transition = `filter 10s ease`;
            let blurFilter = reactRoot.style.filter;
            setInterval(()=>{

                if(blurFilter == 'blur(0px)'){
                    reactRoot.style.filter = `blur(50px)`;
                }else if(blurFilter == 'blur(50px)'){
                    reactRoot.style.filter = `blur(0px)`;
                }

            },20000);      

        //  const blurDestloy = document.querySelector('body');
        //  blurDestloy.addEventListener('mousedown',()=>{
        //     clearInterval(intervalId2);
    
        // });
        }

     }
}

// 一定時間後に黒い背景用div要素配置
setTimeout(timer2,i);
function timer2(){
    // HTMLにdiv要素、アニメーションを追加
        $("body").prepend('<div class="anime"></div>');
        let anime = document.querySelector('.anime');
        setInterval(()=>{
            if(anime.style.opacity == 0 ){
                anime.style.opacity = 0.8;
            }
             else if(anime.style.opacity == 0.8){
                 anime.style.opacity = 0;
            }
            
        },45000);

}

// 一定時間後にlottie配置処理を行う
setTimeout(timer3,i+10000);
function timer3(){

    //lottieを配置
    const lottieURL = chrome.extension.getURL('eye.json');
    const lottieTag = `<script src="content.js" type="text/javascript"></script>`;
    $("body").prepend('<div id="lottie"></div>');
    $("body").prepend(`${lottieTag}`);

    //lottie設定
    lottie.loadAnimation({
        container: document.getElementById("lottie"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `${lottieURL}`
      });

    // マウスをクリックしたら解除
    // const destloy = document.querySelector('body');

    // destloy.addEventListener('mousedown',()=>{
    //     const childElement = document.querySelector('#lottie');
    //     const childElement2 = document.querySelector('.anime');

    //     childElement.remove();
    //     childElement2.remove();

    // });
}


