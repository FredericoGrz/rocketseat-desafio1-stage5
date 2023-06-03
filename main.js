const frasesBiscoitoDaSorte = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Acredite em milagres, mas não dependa deles.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Gente todo dia arruma os cabelos, por que não o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê mais às pessoas do que elas esperam e faça com alegria.",
  "O nosso primeiro e último amor é… o amor-próprio.",
  "Seja o seu próprio motor de ignição. Acredite em si mesmo.",
  "O amor está mais próximo do que você imagina."
];
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const mensagem = document.querySelector("#mensagem")
const btnNew = document.querySelector("#btnNew")

const biscoito = document.querySelector("#biscoito")

biscoito.addEventListener('click', handleImgClick)
btnNew.addEventListener('click', handleBtnClick)

function handleImgClick() {
  const index = Math.floor(Math.random() * 15)
  mensagem.textContent = frasesBiscoitoDaSorte[index]
  toggleScreen()
}

function handleBtnClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
