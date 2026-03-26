const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const contadorEl = document.getElementById("contador");

const inputTexto = document.getElementById("inputTexto");
const charCount = document.getElementById("charCount");
const mensagens = document.getElementById("mensagens");

const tipoLista = document.getElementById("tipoLista");
const addListaBtn = document.getElementById("addLista");
const listasDiv = document.getElementById("listas");

const resetBtn = document.getElementById("reset");

let contador = 0;

btnMais.addEventListener("click", () => {
  contador++;
  contadorEl.textContent = contador;
});

btnMenos.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
  } else {
    alert("O contador já está em zero!");
  }
  contadorEl.textContent = contador;
});

inputTexto.addEventListener("input", () => {
  let texto = inputTexto.value.replace(/\s/g, "");
  charCount.textContent = texto.length;
});

inputTexto.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputTexto.value.trim() !== "") {
    const p = document.createElement("p");
    p.textContent = inputTexto.value;
    mensagens.appendChild(p);

    inputTexto.value = "";
    charCount.textContent = 0;
  }
});

addListaBtn.addEventListener("click", () => {
  const tipo = tipoLista.value;
  const lista = document.createElement(tipo);

  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    lista.appendChild(li);
  }

  listasDiv.appendChild(lista);
});

resetBtn.addEventListener("click", () => {
  contador = 0;
  contadorEl.textContent = contador;

  mensagens.innerHTML = "";
  listasDiv.innerHTML = "";

  inputTexto.value = "";
  charCount.textContent = 0;
});
