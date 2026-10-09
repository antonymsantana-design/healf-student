const titleCard = ["Sono", "Alimentação", "Estudos", "Atividade Fisica"];
const pTitleCard = ["Dormir de 7 a 9 horas melhora a concentração e a memória.", "Uma alimentação saudável ajuda a manter o corpo e a mente em equilíbrio.", "Estabelecer uma rotina de estudos aumenta a produtividade e o aprendizado.", "Praticar atividade física regularmente melhora a saúde mental e física."];

const crdImage = ["./images/dormir.jpg", "./images/comer.jpg", "./images/estudar.jpg", "./images/exercicio.jpg"];

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



const btn = document.getElementById("btn")
const a = document.getElementById("a")

btn.addEventListener("onclick", function () {
    const drm = document.querySelectorAll(".drm").value
    const ps = document.querySelectorAll(".ps").value
    const fs = document.querySelectorAll(".fs").value
    const cl = document.querySelectorAll(".cl").value

    if (drm === "sim" && ps === "sim" && fs === "sim" && cl === "sim") {
        
    }
})