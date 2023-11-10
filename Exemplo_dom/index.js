const pai = document.getElementById("pai");
const btn = document.getElementById("btn");
btn.addEventListener("click", funcExecute);

function funcExecute() {

  const divConteiner = document.getElementById("conteiner")
  const divCriada = document.createElement("div");
  divCriada.innerHTML = "Div criada no html";

  const primeiroFilho = divConteiner.firstElementChild;
  const segundoFilho = primeiroFilho.nextElementSibling;

  //console.log(segundoFilho);

  //inserindo a div depois do filho 1 e antes do filho 2
  divConteiner.insertBefore(divCriada, segundoFilho);

  const terceiroFilho = divConteiner.lastElementChild;
  const divClone = divCriada.cloneNode(true);
  divClone.innerHTML = "Div clonada para substituir o 3 filho";

  divConteiner.replaceChild(divClone, terceiroFilho);

  divConteiner.removeChild(primeiroFilho);

  //divConteiner.appendChild(divCriada);
  //let divClone1 = divCriada.cloneNode(true);
  //divConteiner.appendChild(divClone1);
  // divConteiner.appendChild(divCriada.cloneNode(true));
  // divConteiner.appendChild(divCriada.cloneNode(true));
  // divConteiner.appendChild(divCriada.cloneNode(true));
  // divConteiner.appendChild(divCriada.cloneNode(true));

  //console.log(divCriada);

  // for (i = 0; i < 100; i++) {
  //   console.log("Função executada!" + i);
  //   const p = document.createElement("p");
  // }
}
