

const blackButton1 = document.getElementById("BB_ID1");

const LoadingID = document.getElementById("Loading");
const LoadingID1 = document.getElementById("Loading1");





but1 = null;
but2 = null;

butBlack = false;





blackButton1.addEventListener("click", function(){

    blackButton1.classList.toggle("BB_OnClicked");
    document.querySelector(".headerID").classList.toggle("blackHeaderID");
    document.querySelector(".headerButton").classList.toggle("headerButtonBlack");
    document.querySelector(".galeryImage").classList.toggle("galeryImageBlack");
    document.querySelector(".mainImage").classList.toggle("mainImageBlack");
    document.querySelector(".leFooter").classList.toggle("leFooterBlack");
    document.querySelector(".generalParameters3").classList.toggle("generalParameters3Black");



    if(butBlack == false){
        document.getElementById("BlackButton1").innerHTML = "BLACK THEME";
        butBlack = true;
        LoadingID.style.backgroundColor= "black";
        LoadingID1.style.backgroundColor= "black";


    }else{
        document.getElementById("BlackButton1").innerHTML = "ORIGINAL THEME";
        butBlack = false;
        LoadingID.style.backgroundColor= "white";
        LoadingID1.style.backgroundColor= "white";


    }

    console.log("Spawn le message");


})
