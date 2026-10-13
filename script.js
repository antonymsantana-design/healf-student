const titleCard = ["Sono", "Alimentação", "Estudos", "Atividade Fisica"];
const pTitleCard = [
  "Dormir de 7 a 9 horas melhora a concentração e a memória.",
  "Uma alimentação saudável ajuda a manter o corpo e a mente em equilíbrio.",
  "Estabelecer uma rotina de estudos aumenta a produtividade e o aprendizado.",
  "Praticar atividade física regularmente melhora a saúde mental e física.",
];

const crdImage = [
  "./images/dormir.jpg",
  "./images/comer.jpg",
  "./images/estudar.jpg",
  "./images/exercicio.jpg",
];

const cardArea = document.getElementById("cards");

function createCard() {
  for (let i = 0; i < pTitleCard.length; i++) {
    cardArea.innerHTML += `<article class="card sono" id="card"  style="background-image: url('${crdImage[i]}'); background-size: cover; background-position: center;"> 
                    <h3 id="TC">${titleCard[i]}</h3>
                    <p id="PTC">${pTitleCard[i]}</p>
                </article>`;
  }
}

createCard();

const btn = document.getElementById("btn");
const a = document.getElementById("a");

btn.innerHTML = "Ver resultado";
btn.addEventListener("click", function (event) {
  event.preventDefault();
  const drm = document.querySelector('input[name="drm"]:checked');
  const ps = document.querySelector('input[name="ps"]:checked');
  const fs = document.querySelector('input[name="fs"]:checked');
  const cl = document.querySelector('input[name="cl"]:checked');
  if (drm == null || ps == null || fs == null || cl == null) {
    a.innerHTML = "Responda todas as perguntas!";
  } else if (
    drm.value == "sim" &&
    ps.value == "sim" &&
    fs.value == "sim" &&
    cl.value == "sim"
  ) {
    a.innerHTML = "Parabéns! Seus hábitos estão bons!";
  } else {
    a.innerHTML = "Você precisa melhorar alguns hábitos!";
  }
});
