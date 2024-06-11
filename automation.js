var NAME = document.getElementById("nome")
var newNAME = ""
var LV = document.getElementById("nivel")
NAME.addEventListener("change", rembNAME)
LV.addEventListener("change", calcNAME)
var STR = document.getElementById("forca")
var ATK = document.getElementById("poder")
addEventListener("change", calcATK)
var AGI = document.getElementById("agilidade")
var ARM = document.getElementById("armadura")
var AC = document.getElementById("defesa")
addEventListener("change", calcAC)

function rembNAME(){

    newNAME = NAME.value
}

function calcNAME(){
    
    let LVnum = parseInt(LV.value)

    if(LVnum < 0){
        
        NAME.value =  newNAME + " [???]"  
    }

    if(LVnum == 0){
        NAME.value = newNAME + " [MUNDANO]"
    }

    if(LVnum > 0 && LVnum <= 5){
        NAME.value = newNAME + " [INICIANTE]"
    }

    if(LVnum > 5){
        NAME.value =  newNAME + " [VETERANO]"
    }

}

function calcATK() {

    var STRnum = parseInt(STR.value)
    var LVnum = parseInt(LV.value)

    ATK.value = Math.round((STRnum - 10)/2 + LVnum/2)

}

function calcAC(){

    var  AGInum = parseInt(AGI.value)
    var  ARMnum = parseInt(ARM.value)

    AC.value = (AGInum + ARMnum)
}