const characters ='0123456789abcdefghijklmnop';
const buttons = document.querySelector('.parent').querySelectorAll("div");
let cooldown = 1
let kolik = 0
let spravne = 0
let pole = [[0,0,0,0,0] ,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
 



 


function cyklus(cislo,delka) 
{ 


    if(cooldown === 1){
        setInterval(plus,10000)
        cooldown = 0
        
    for(let l = 0;l<delka;l++){
     
    switch(cislo[l]){
      case "1": document.getElementById('1').style.backgroundColor = "black"
      pole[0][0] = 1
      break;
      case "2": document.getElementById('2').style.backgroundColor = "black"
      pole[0][1] = 1
      break;
      case "3": document.getElementById('3').style.backgroundColor = "black"
      pole[0][2] = 1
      break;
      case "4": document.getElementById('4').style.backgroundColor = "black"
      pole[0][3] = 1
      break;
      case "5": document.getElementById('5').style.backgroundColor = "black"
      pole[0][4] = 1
      break;
      case "6": document.getElementById('6').style.backgroundColor = "black"
      pole[1][0] = 1
      break;  
      case "7": document.getElementById('7').style.backgroundColor = "black" 
      pole[1][1] = 1
      break;
      case "8": document.getElementById('8').style.backgroundColor = "black" 
      pole[1][2] = 1
      break;
      case "9": document.getElementById('9').style.backgroundColor = "black" 
      pole[1][3] = 1
      break;
      case "a": document.getElementById('a').style.backgroundColor = "black" 
      pole[1][4] = 1
      break;
      case "b": document.getElementById('b').style.backgroundColor = "black" 
      pole[2][0] = 1
      break;
      case "c": document.getElementById('c').style.backgroundColor = "black" 
      pole[2][1] = 1
      break;
      case "d": document.getElementById('d').style.backgroundColor = "black" 
      pole[2][2] = 1
      break;
      case "e": document.getElementById('e').style.backgroundColor = "black" 
      pole[2][3] = 1
      break;
      case "f": document.getElementById('f').style.backgroundColor = "black" 
      pole[2][4] = 1
      break;
      case "g": document.getElementById('g').style.backgroundColor = "black" 
      pole[3][0] = 1
      break;
      case "h": document.getElementById('h').style.backgroundColor = "black" 
      pole[3][1] = 1
      break;
      case "i": document.getElementById('i').style.backgroundColor = "black" 
      pole[3][2] = 1
      break;
      case "j": document.getElementById('j').style.backgroundColor = "black" 
      pole[3][3] = 1
      break;
      case "k": document.getElementById('k').style.backgroundColor = "black" 
      pole[3][4] = 1
      break;
      case "l": document.getElementById('l').style.backgroundColor = "black" 
      pole[4][0] = 1
      break;
      case "m": document.getElementById('m').style.backgroundColor = "black" 
      pole[4][1] = 1
      break;
      case "n": document.getElementById('n').style.backgroundColor = "black" 
      pole[4][2] = 1
      break;
      case "o": document.getElementById('o').style.backgroundColor = "black" 
      pole[4][3] = 1
      break;
      case "p": document.getElementById('p').style.backgroundColor = "black"  
      pole[4][4] = 1
      break;
      
     
    }
  } 
}
} 



function plus(){
    cooldown = 1
}


function button(){

    
    let number = generateString(Math.floor((Math.random() * 10) + 1))

    let x = number.toString().length

    cyklus(number,x)

    for(let m = 0;m<5;m++){

        for(let n = 0;n<5;n++){
          if(pole[m][n] === 1){
              kolik++
           
          }
          }
      
      }

   click()
    setInterval(white,5000)

}

function button2(){
    let number = generateString(Math.floor((Math.random() * 10) + 1))
    let x = number.toString().length

    cyklus(number,x)

    for(let m = 0;m<5;m++){

        for(let n = 0;n<5;n++){
          if(pole[m][n] === 1){
              kolik++
           
          }
          }
      
      }
    click()
    setInterval(white,4000)
}
function button3(){
    let number = generateString(Math.floor((Math.random() * 15) + 1))
    let x = number.toString().length
    cyklus(number,x)

    for(let m = 0;m<5;m++){

        for(let n = 0;n<5;n++){
          if(pole[m][n] === 1){
              kolik++
           
          }
          }
      
      }
  click()
    setInterval(white,3000)
}
function button4(){
    let number = generateString(Math.floor((Math.random() * 20) + 1))
    let x = number.toString().length
    cyklus(number,x)

    for(let m = 0;m<5;m++){

        for(let n = 0;n<5;n++){
          if(pole[m][n] === 1){
              kolik++
           
          }
          }
      
      }
    click()
    setInterval(white,3000)
}
function button5(){
    let number = generateString(Math.floor((Math.random() * 25) + 1))
    let x = number.toString().length

    cyklus(number,x)

    for(let m = 0;m<5;m++){

        for(let n = 0;n<5;n++){
          if(pole[m][n] === 1){
              kolik++
           
          }
          }
      
      }
      setInterval(white,2000)
     click()
  
   
}

function white(){
    if(document.getElementById('1').style.backgroundColor === "black"){document.getElementById('1').style.backgroundColor = "white"}
    if(document.getElementById('2').style.backgroundColor === "black"){document.getElementById('2').style.backgroundColor = "white"}
    if(document.getElementById('3').style.backgroundColor === "black"){document.getElementById('3').style.backgroundColor = "white"}
    if(document.getElementById('4').style.backgroundColor === "black"){document.getElementById('4').style.backgroundColor = "white"}
    if(document.getElementById('5').style.backgroundColor === "black"){document.getElementById('5').style.backgroundColor = "white"}

    if(document.getElementById('6').style.backgroundColor === "black"){document.getElementById('6').style.backgroundColor = "white"}
    if(document.getElementById('7').style.backgroundColor === "black"){document.getElementById('7').style.backgroundColor = "white"}
    if(document.getElementById('8').style.backgroundColor === "black"){document.getElementById('8').style.backgroundColor = "white"}
    if(document.getElementById('9').style.backgroundColor === "black"){document.getElementById('9').style.backgroundColor = "white"}
    if(document.getElementById('a').style.backgroundColor === "black"){document.getElementById('a').style.backgroundColor = "white"}

    if(document.getElementById('b').style.backgroundColor === "black"){document.getElementById('b').style.backgroundColor = "white"}
    if(document.getElementById('c').style.backgroundColor === "black"){document.getElementById('c').style.backgroundColor = "white"}
    if(document.getElementById('d').style.backgroundColor === "black"){document.getElementById('d').style.backgroundColor = "white"}
    if(document.getElementById('e').style.backgroundColor === "black"){document.getElementById('e').style.backgroundColor = "white"}
    if(document.getElementById('f').style.backgroundColor === "black"){document.getElementById('f').style.backgroundColor = "white"}

    if(document.getElementById('g').style.backgroundColor === "black"){document.getElementById('g').style.backgroundColor = "white"}
    if(document.getElementById('h').style.backgroundColor === "black"){document.getElementById('h').style.backgroundColor = "white"}
    if(document.getElementById('i').style.backgroundColor === "black"){document.getElementById('i').style.backgroundColor = "white"}
    if(document.getElementById('j').style.backgroundColor === "black"){document.getElementById('j').style.backgroundColor = "white"}
    if(document.getElementById('k').style.backgroundColor === "black"){document.getElementById('k').style.backgroundColor = "white"}

    if(document.getElementById('l').style.backgroundColor === "black"){document.getElementById('l').style.backgroundColor = "white"}
    if(document.getElementById('m').style.backgroundColor === "black"){document.getElementById('m').style.backgroundColor = "white"}
    if(document.getElementById('n').style.backgroundColor === "black"){document.getElementById('n').style.backgroundColor = "white"}
    if(document.getElementById('o').style.backgroundColor === "black"){document.getElementById('o').style.backgroundColor = "white"}
    if(document.getElementById('p').style.backgroundColor === "black"){document.getElementById('p').style.backgroundColor = "white"}
}

function click(){
for (let j = 0; j < 10; j++) {
    buttons[j].addEventListener("click", function () {checkN(j)})
}
document.getElementById('a').addEventListener("click", function () {check("a")})
document.getElementById('b').addEventListener("click", function () {check("b")})
document.getElementById('c').addEventListener("click", function () {check("c")})
document.getElementById('d').addEventListener("click", function () {check("d")})
document.getElementById('e').addEventListener("click", function () {check("e")})
document.getElementById('f').addEventListener("click", function () {check("f")})
document.getElementById('g').addEventListener("click", function () {check("g")})
document.getElementById('h').addEventListener("click", function () {check("h")})
document.getElementById('i').addEventListener("click", function () {check("i")})
document.getElementById('j').addEventListener("click", function () {check("j")})
document.getElementById('k').addEventListener("click", function () {check("k")})
document.getElementById('l').addEventListener("click", function () {check("l")})
document.getElementById('m').addEventListener("click", function () {check("m")})
document.getElementById('n').addEventListener("click", function () {check("n")})
document.getElementById('o').addEventListener("click", function () {check("o")})
document.getElementById('p').addEventListener("click", function () {check("p")})
}

function real(){
    if(spravne === kolik && spravne !==0){
        alert("VYHRALS")
       
       spravne = 0
       kolik = 0

        location.reload();
    }
}



function checkN(index){ 
    if(buttons[index].style.backgroundColor === "white"){
        spravne ++
        buttons[index].style.backgroundColor = "grey"
    }
    else if(buttons[index].style.backgroundColor === "grey"){
        alert("Neklikej na šedý")
        setInterval (restart,10)
       }
    else if(buttons[index].style.backgroundColor === "black"){
     alert("Neklikej na černý")
     setInterval (restart,10)
    }else if(buttons[index].style.backgroundColor !== "white"){
        alert("Prohrals Stránka se resetuje")
        setInterval (restart,10)
    }
    
    real()
  
 }


function restart(){
    location.reload();
}

 function check(index){ 
    if(document.getElementById(index).style.backgroundColor === "white"){
        spravne ++
    document.getElementById(index).style.backgroundColor = "grey"
    }
    else if(document.getElementById(index).style.backgroundColor === "grey"){
        alert("Neklikej na šedý")
        setInterval (restart,10)
       }
    else if(document.getElementById(index).style.backgroundColor === "black"){
        alert("Neklikej na černý")
        setInterval (restart,10)
       }else if(document.getElementById(index).style.backgroundColor !== "white"){
        alert("Prohrals Stránka se resetuje")
        setInterval (restart,10)
    }
    real()
 }


