'use strict';
window.addEventListener("load", function() {
    if (document.getElementById("statistik")) {
     document.getElementById("statistik").addEventListener("click", statistik);
    }
    if(document.getElementById("absenz")){
       document.getElementById("absenz").addEventListener("click", absenz)
    }
    if(document.getElementById("arbeitszeit")){
        document.getElementById("arbeitszeit").addEventListener("click", arbeitszeit)
    }
    if (document.getElementById("userstatistik")) {
        document.getElementById("userstatistik").addEventListener("click", userstatistik);
    }
    if (document.getElementById("projekteverwalten")) {
        document.getElementById("projekteverwalten").addEventListener("click", projekteverwalten);
    }
    if (document.getElementById("benutzerverwalten")) {
        document.getElementById("benutzerverwalten").addEventListener("click", benutzerverwalten);
    }
   });
   function small(){
    //Schrumpft ein Div auf grösse 0 und lässt es verschwinden
    let divisions = ["div_userstat","div_benutzerver","div_absenz","div_statistik","div_projektver","div_arbeitszeit"];
    for(let i=0; i<6; i++){
        try{
            document.getElementById(divisions[i]).style.visibility = "hidden";
            document.getElementById(divisions[i]).style.height = "0px";
        }
        catch (error) {
        }
    }
}
function userstatistik(){
    /*small("div_projektver");
    small("div_benutzerver");
    small("div_absenz");
    small("div_statistik");
    small("div_arbeitszeit");*/
    small();
    document.getElementById("div_userstat").style.visibility = "visible"
}
function projekteverwalten(){
    /*small("div_userstat");
    small("div_benutzerver");
    small("div_absenz");
    small("div_statistik");
    small("div_arbeitszeit");*/
    small();
    document.getElementById("div_projektver").style.visibility = "visible"
}
function benutzerverwalten(){
    /*small("div_userstat");
    small("div_projektver");
    small("div_absenz");
    small("div_statistik");
    small("div_arbeitszeit");*/
    small();
    document.getElementById("div_benutzerver").style.visibility = "visible"
}
function statistik(){
    /*small("div_userstat");
    small("div_benutzerver");
    small("div_absenz");
    small("div_projektver");
    small("div_arbeitszeit");*/
    small();
    document.getElementById("div_statistik").style.visibility = "visible";
    //document.getElementById("div_statistik").style.height = "180px";
}
function absenz(){
    /*small("div_userstat");
    small("div_benutzerver");
    small("div_projektver");
    small("div_statistik");
    small("div_arbeitszeit");*/
    small();
    document.getElementById("div_absenz").style.visibility = "visible";
}
function arbeitszeit(){
    /*small("div_userstat");
    small("div_benutzerver");
    small("div_absenz");
    small("div_statistik");
    small("div_projektver");*/
    small();
    document.getElementById("div_arbeitszeit").style.visibility= "visible";
}
