//const button = document.querySelector("#EB_ID1");
var button1 = document.getElementById("EB_ID1");
var button2 = document.getElementById("EB_ID2");

var blackButton = document.getElementById("BB_ID1");




but1 = null;
but2 = null;

butBlack = false;


  
if(but1, but2 == false){
    whiteGeometry1.style.animationPlayState = 'paused';
    whiteGeometry2.style.animationPlayState = 'paused';
    whiteGeometry3.style.animationPlayState = 'paused';
    whiteGeometry4.style.animationPlayState = 'paused';
    whiteGeometry5.style.animationPlayState = 'paused';
    whiteGeometry6.style.animationPlayState = 'paused';
    whiteGeometry7.style.animationPlayState = 'paused';
    whiteGeometry8.style.animationPlayState = 'paused';
    whiteGeometry9.style.animationPlayState = 'paused';
    whiteGeometry10.style.animationPlayState = 'paused';
    whiteGeometry11.style.animationPlayState = 'paused';
    whiteGeometry12.style.animationPlayState = 'paused';
    whiteGeometryA.style.animationPlayState = 'paused';
    whiteGeometryB.style.animationPlayState = 'paused';
    whiteGeometryC.style.animationPlayState = 'paused';
    whiteGeometryD.style.animationPlayState = 'paused';
    whiteGeometryE.style.animationPlayState = 'paused';
    whiteGeometryF.style.animationPlayState = 'paused';

    Phone.style.animationPlayState = 'paused';
    Mail.style.animationPlayState = 'paused';
    Linkedin.style.animationPlayState = 'paused';
    Youtube.style.animationPlayState = 'paused';
    Instagram.style.animationPlayState = 'paused';

    Loading.style.animationPlayState = 'paused';
    Loading1.style.animationPlayState = 'paused';

    MainTitle.style.animationPlayState = 'paused';
    TitleIntro.style.animationPlayState = 'paused';



}


if(but1 == true || but2 == true){
    whiteGeometry1.style.animationPlayState = 'running';
    whiteGeometry2.style.animationPlayState = 'running';
    whiteGeometry3.style.animationPlayState = 'running';
    whiteGeometry4.style.animationPlayState = 'running';
    whiteGeometry5.style.animationPlayState = 'running';
    whiteGeometry6.style.animationPlayState = 'running';
    whiteGeometry7.style.animationPlayState = 'running';
    whiteGeometry8.style.animationPlayState = 'running';
    whiteGeometry9.style.animationPlayState = 'running';
    whiteGeometry10.style.animationPlayState = 'running';
    whiteGeometry11.style.animationPlayState = 'running';
    whiteGeometry12.style.animationPlayState = 'running';
    whiteGeometryA.style.animationPlayState = 'running';
    whiteGeometryB.style.animationPlayState = 'running';
    whiteGeometryC.style.animationPlayState = 'running';
    whiteGeometryD.style.animationPlayState = 'running';
    whiteGeometryE.style.animationPlayState = 'running';
    whiteGeometryF.style.animationPlayState = 'running';

    Phone.style.animationPlayState = 'running';
    Mail.style.animationPlayState = 'running';
    Linkedin.style.animationPlayState = 'running';
    Youtube.style.animationPlayState = 'running';
    Instagram.style.animationPlayState = 'running';

    Loading.style.animationPlayState = 'running';
    Loading1.style.animationPlayState = 'running';

    MainTitle.style.animationPlayState = 'running';
    TitleIntro.style.animationPlayState = 'running';


}
















/*blackButton.addEventListener("click", function(){

    blackButton.classList.toggle("BB_OnClicked");


    document.querySelector(".headerID").classList.toggle("blackHeaderID");

    document.querySelector(".headerButton").classList.toggle("headerButtonBlack");

    document.querySelector(".galeryImage").classList.toggle("galeryImageBlack");

    document.querySelector(".mainImage").classList.toggle("mainImageBlack");

    document.querySelector(".leFooter").classList.toggle("leFooterBlack");

    document.querySelector(".generalParameters3").classList.toggle("generalParameters3Black");


    if(butBlack == false){
        document.getElementById("BlackButton1").innerHTML = "BLACK THEME";
        butBlack = true;
    }else{
        document.getElementById("BlackButton1").innerHTML = "ORIGINAL THEME";
        butBlack = false;
    }

    console.log("Spawn le message");


})*/
























button1.addEventListener("click", function(){

        button1.classList.toggle("EB_ID1_OnClicked");

        if(but1 == null || but1 == true){
            document.getElementById("TextButton1").innerHTML = "SYSTEM OFF";
            but1 = false;
        }else{
            document.getElementById("TextButton1").innerHTML = "SYSTEM ON";
            but1 = true;
        }



        if(but1 == false){
            whiteGeometry1.style.animationPlayState = 'paused';
            whiteGeometry2.style.animationPlayState = 'paused';
            whiteGeometry3.style.animationPlayState = 'paused';
            whiteGeometry4.style.animationPlayState = 'paused';
            whiteGeometry5.style.animationPlayState = 'paused';
            whiteGeometry6.style.animationPlayState = 'paused';
            whiteGeometry7.style.animationPlayState = 'paused';
            whiteGeometry8.style.animationPlayState = 'paused';
            whiteGeometry9.style.animationPlayState = 'paused';
            whiteGeometry10.style.animationPlayState = 'paused';
            whiteGeometry11.style.animationPlayState = 'paused';
            whiteGeometry12.style.animationPlayState = 'paused';
            whiteGeometryA.style.animationPlayState = 'paused';
            whiteGeometryB.style.animationPlayState = 'paused';
            whiteGeometryC.style.animationPlayState = 'paused';
            whiteGeometryD.style.animationPlayState = 'paused';
            whiteGeometryE.style.animationPlayState = 'paused';
            whiteGeometryF.style.animationPlayState = 'paused';
        
            Phone.style.animationPlayState = 'paused';
            Mail.style.animationPlayState = 'paused';
            Linkedin.style.animationPlayState = 'paused';
            Youtube.style.animationPlayState = 'paused';
            Instagram.style.animationPlayState = 'paused';
        
            Loading.style.animationPlayState = 'paused';
            Loading1.style.animationPlayState = 'paused';
        
            MainTitle.style.animationPlayState = 'paused';
            TitleIntro.style.animationPlayState = 'paused';
        
        
        
        }
        
        
        if(but1 == true){
            whiteGeometry1.style.animationPlayState = 'running';
            whiteGeometry2.style.animationPlayState = 'running';
            whiteGeometry3.style.animationPlayState = 'running';
            whiteGeometry4.style.animationPlayState = 'running';
            whiteGeometry5.style.animationPlayState = 'running';
            whiteGeometry6.style.animationPlayState = 'running';
            whiteGeometry7.style.animationPlayState = 'running';
            whiteGeometry8.style.animationPlayState = 'running';
            whiteGeometry9.style.animationPlayState = 'running';
            whiteGeometry10.style.animationPlayState = 'running';
            whiteGeometry11.style.animationPlayState = 'running';
            whiteGeometry12.style.animationPlayState = 'running';
            whiteGeometryA.style.animationPlayState = 'running';
            whiteGeometryB.style.animationPlayState = 'running';
            whiteGeometryC.style.animationPlayState = 'running';
            whiteGeometryD.style.animationPlayState = 'running';
            whiteGeometryE.style.animationPlayState = 'running';
            whiteGeometryF.style.animationPlayState = 'running';
        
            Phone.style.animationPlayState = 'running';
            Mail.style.animationPlayState = 'running';
            Linkedin.style.animationPlayState = 'running';
            Youtube.style.animationPlayState = 'running';
            Instagram.style.animationPlayState = 'running';
        
            Loading.style.animationPlayState = 'running';
            Loading1.style.animationPlayState = 'running';
        
            MainTitle.style.animationPlayState = 'running';
            TitleIntro.style.animationPlayState = 'running';
        
        
        }

    console.log("Spawn le message");





})