//criação de ficha
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

//dados
var d4 = document.querySelector("#d4")
var RSD4 = document.getElementById("RSd4")
d4.addEventListener("click", RollDice4)
var d6 = document.querySelector("#d6")
var RSD6 = document.getElementById("RSd6")
d6.addEventListener("click", RollDice6)
var d8 = document.querySelector("#d8")
var RSD8 = document.getElementById("RSd8")
d8.addEventListener("click", RollDice8)
var d10 = document.querySelector("#d10")
var RSD10 = document.getElementById("RSd10")
d10.addEventListener("click", RollDice10)
var d12 = document.querySelector("#d12")
var RSD12 = document.getElementById("RSd12")
d12.addEventListener("click", RollDice12)
var d20 = document.querySelector("#d20")
var RSD20 = document.getElementById("RSd20")
d20.addEventListener("click", RollDice20)
var d100 = document.querySelector("#d100")
var RSD100 = document.getElementById("RSd100")
d100.addEventListener("click", RollDice100)
var d1000 = document.querySelector("#d1000")
var RSD1000 = document.getElementById("RSd1000")
d1000.addEventListener("click", RollDice1000)


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

function RollDice4(){
    console.log("funcionou")
    RSD4.value = 1 + Math.floor(Math.random() *  4)
    console.log(RSD4)
}

function RollDice6(){
    RSD6.value = 1 + Math.floor(Math.random() *  6)
}

function RollDice8(){
    RSD8.value = 1 + Math.floor(Math.random() *  8)
}
function RollDice10(){
    RSD10.value = 1 + Math.floor(Math.random() *  10)
}

function RollDice12(){
    RSD12.value = 1 + Math.floor(Math.random() *  12)
}
function RollDice20(){
    RSD20.value = 1 + Math.floor(Math.random() *  20)
}

function RollDice100(){
    RSD100.value = 1 + Math.floor(Math.random() *  100)
}

function RollDice1000(){
    RSD1000.value = 1 + Math.floor(Math.random() *  1000)
}



