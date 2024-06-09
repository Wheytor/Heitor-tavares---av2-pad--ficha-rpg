var oldNAME = "a"
var newNAME = "b"
var NAME = document.getElementById("nome")
var LV = document.getElementById("nivel")
LV.addEventListener("change", calcNAME)
var STR = document.getElementById("forca")
var ATK = document.getElementById("poder")
addEventListener("change", calcATK)
var AGI = document.getElementById("agilidade")
var ARM = document.getElementById("armadura")
var AC = document.getElementById("defesa")
addEventListener("change", calcAC)


function calcNAME(){

    var LVnum = parseInt(LV.value)

    
    if(LVnum < 0){
        
        newNAME =" [???]"
    }

    if(LVnum == 0){
        newNAME = " [MUNDANO]"
    }

    if(LVnum > 0 && LVnum <= 5){
        newNAME =" [INICIANTE]"
    }

    if(LVnum > 5){
        newNAME =" [VETERANO]"
    }

    if(newNAME != oldNAME){
    oldNAME = newNAME
    }

    NAME.value =+ newNAME
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