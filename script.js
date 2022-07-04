const telaP = document.getElementById("pixel-board");
const pixeis = document.getElementsByClassName("pixel");
const paleta = document.querySelectorAll(".color");
const botaoLimpa = document.getElementById("clear-board");
const geraGrelha = document.getElementById("generate-board");
const linhas = document.getElementsByClassName("linha");
const randomCor = document.getElementsByClassName("rad");
const btnRan = document.getElementById("cores-random");
const botaoRGB  = document.getElementById("rgb-botao");
const rangeBtn  = document.getElementsByClassName("range");

botaoLimpa.addEventListener("click", resta);
geraGrelha.addEventListener("click", gerador);
btnRan.addEventListener("click", coresAlt);
botaoRGB.addEventListener("click",btnRbg);

function gerador() {
  pegaValor();
  renova();
  geraQuadrado(window.size);
  escolhepixeis();
}

function renova() {
  const escolhefilhos = document.querySelectorAll(".linha");
  for (let i = 0; i < escolhefilhos.length; i += 1) {
    telaP.removeChild(escolhefilhos[i]);
  }
}


function btnRbg() {
  const r = document.getElementById("red").value;
  const g = document.getElementById("green").value;
  const b = document.getElementById("blue").value;
  coresR = "rgb" + "(" + r + ", " + g + ", " + b + ")";
  window.cor2 = coresR;
  rangeBtn[0].style.backgroundColor = window.cor2 ;
  
}

function pegaValor() {
  let j = document.getElementById("board-size").value;
  window.size = j;
}

function geraQuadrado(n) {
  if (window.size < 5) {
    n = 5;
  } else if (window.size > 50) {
    n = 50;
  }
  for (let i = 0; i < n; i += 1) {
    let linha = document.createElement("div");
    linha.className = "linha";
    for (let x = 1; x <= n; x += 1) {
      let celula = document.createElement("div");
      celula.className = "pixel";
      celula.classList.add("dim");
      linha.appendChild(celula);
    }
    telaP.appendChild(linha);
  }
}

function escolhepaleta() {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].addEventListener("click", escolhecor);
  }
}

function escolhecor() {
  for (let i = 0; i < paleta.length; i += 1) {
    if (paleta[i] == this) {
      this.classList.add("selected");
      const cssObj = window.getComputedStyle(this, null);
      let bgColor = cssObj.getPropertyValue("background-color");
      window.cor1 = bgColor;
    } else {
      paleta[i].classList.remove("selected");
    }
  }
}

function escolhepixeis() {
  const pixeis1 = document.getElementsByClassName("pixel");
  for (let i = 0; i < pixeis1.length; i += 1) {
    pixeis1[i].addEventListener("click", escolheP);
  }
}

function escolheP() {
  this.style.backgroundColor = window.cor1;
  console.log(window.cor1)
}

function resta() {
  for (let i = 0; i < pixeis.length; i += 1) {
    pixeis[i].style.backgroundColor = "white";
  }
}

function getRandom() {
  let coresR = "";
  let r = Math.random() * (250 - 1) + 1;
  let g = Math.random() * (250 - 1) + 1;
  let b = Math.random() * (250 - 1) + 1;
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  coresR = "rgb" + "(" + r + ", " + g + ", " + b + ")";
  window.coresRan = coresR;
}

function coresAlt() {
  for (let i = 0; i < randomCor.length; i += 1) {
    getRandom();
    randomCor[i].style.backgroundColor = window.coresRan;
  }
}

geraQuadrado(5);
escolhepaleta();
escolhepixeis();
coresAlt();
btnRbg();
window.cor1 = "black"
