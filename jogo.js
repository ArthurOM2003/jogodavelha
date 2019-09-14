

var vez;
vez=true;
var jogador = document.getElementById('Jogador');
var tabuleiro = document.getElementById('tab');
var cont=0;
tabuleiro.addEventListener('click', function(e) {

  if(e.target.innerHTML==""){
  if(vez==true){
    e.target.innerHTML="X";
    vez=false;
    jogador.innerHTML="Vez do Jogador: 2";
    teste();

  }
  else{
    e.target.innerHTML="O";

    vez=true;
    jogador.innerHTML="Vez do Jogador: 1";
    teste();
  }
}
});


var tds = document.querySelectorAll("#tab td");
var values = [];
var tabela = document.querySelector("#tab");
var TDs1 = tabela.getElementsByTagName("td");
var ganhador;
var contador=0;

function teste(){
  contador++;
//                LINHAS
for (var i = 0; i < TDs1.length; i++) {
  if(TDs1[0].innerHTML=="X" && TDs1[1].innerHTML =="X" && TDs1[1].innerHTML== "X" && TDs1[2].innerHTML=="X"){
      alert("player 1 wins");
      Reset();
    i=11;
  }
  if(TDs1[3].innerHTML== "X" && TDs1[4].innerHTML == "X" && TDs1[4].innerHTML== "X" && TDs1[5].innerHTML=="X"){
      alert("player 1 wins");
      Reset();
    i=11;
  }
  if(TDs1[6].innerHTML== "X" && TDs1[7].innerHTML == "X" && TDs1[7].innerHTML== "X" && TDs1[8].innerHTML=="X"){
      alert("player 1 wins");
      Reset();
    i=11;
  }
//                                LINHAS

if(TDs1[0].innerHTML=="O" && TDs1[1].innerHTML =="O" && TDs1[1].innerHTML== "O" && TDs1[2].innerHTML=="O"){
    alert("player 2 wins");
    Reset();
  i=11;
}
if(TDs1[3].innerHTML== "O" && TDs1[4].innerHTML == "O" && TDs1[4].innerHTML== "O" && TDs1[5].innerHTML=="O"){
    alert("player 2 wins");
    Reset();
  i=11;
}
if(TDs1[6].innerHTML== "O" && TDs1[7].innerHTML == "O" && TDs1[7].innerHTML== "O" && TDs1[8].innerHTML=="O"){
    alert("player 2 wins");
    Reset();
  i=11;
}
//                                LINHAS

if(TDs1[0].innerHTML=="O" && TDs1[4].innerHTML =="O" && TDs1[4].innerHTML== "O" && TDs1[8].innerHTML=="O"){
  alert("player 2 wins");
  Reset();
i=11;
}
if(TDs1[2].innerHTML== "O" && TDs1[4].innerHTML == "O" && TDs1[4].innerHTML== "O" && TDs1[6].innerHTML=="O"){
  alert("player 2 wins");
  Reset();
i=11;
}


//                                        DIAGONAL
if(TDs1[0].innerHTML=="X" && TDs1[4].innerHTML =="X" && TDs1[4].innerHTML== "X" && TDs1[8].innerHTML=="X"){
    alert("player 1 wins");
    Reset();
  i=11;
}
if(TDs1[2].innerHTML== "X" && TDs1[4].innerHTML == "X" && TDs1[4].innerHTML== "X" && TDs1[6].innerHTML=="X"){
    alert("player 1 wins");
    Reset();
  i=11;
}
//                                        DIAGONAL
//                              COLUNAS

if(TDs1[0].innerHTML== "X" && TDs1[3].innerHTML == "X" && TDs1[3].innerHTML== "X" && TDs1[6].innerHTML=="X"){
    alert("player 1 wins");
    Reset();
    i=11;
}
if(TDs1[1].innerHTML== "X" && TDs1[4].innerHTML == "X" && TDs1[4].innerHTML== "X" && TDs1[7].innerHTML=="X"){
    alert("player 1 wins");
    Reset();
    i=11;
}
if(TDs1[2].innerHTML== "X" && TDs1[5].innerHTML == "X" && TDs1[5].innerHTML== "X" && TDs1[8].innerHTML=="X"){
    alert("player 1 wins");
    Reset();
    i=11;
}

if(TDs1[0].innerHTML== "O" && TDs1[3].innerHTML == "O" && TDs1[3].innerHTML== "O" && TDs1[6].innerHTML=="O"){
    alert("player 2 wins");
    Reset();
    i=11;
}
if(TDs1[1].innerHTML== "O" && TDs1[4].innerHTML == "O" && TDs1[4].innerHTML== "O" && TDs1[7].innerHTML=="O"){
    alert("player 2 wins");
    Reset();
    i=11;
}
if(TDs1[2].innerHTML== "O" && TDs1[5].innerHTML == "O" && TDs1[5].innerHTML== "O" && TDs1[8].innerHTML=="O"){
    alert("player 2 wins");
    Reset();
    i=11;

}

}
draw();           //            COLUNAS
}
function draw(){
  if(contador>8){
    alert("draw");
  }
}


function Reset(){
for (var i = 0; i < TDs1.length; i++) {
  TDs1[i].innerHTML="";
  jogador.innerHTML="Vez do Jogador: 1";
  vez=true;
}

}
