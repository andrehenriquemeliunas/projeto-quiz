let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Onde foi a primeira Copa do Mundo?",
    alternativaA : "Uruguai",
    alternativaB : "Brasil",
    alternativaC : "Inglaterra",
    correta      : "Uruguai",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quem ganhou a Copa do Mundo de 2010?",
    alternativaA : "França",
    alternativaB : "Itália",
    alternativaC : "Espanha",
    correta      : "Espanha",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Em que time italiano Maradona jogou?",
    alternativaA : "Juventus",
    alternativaB : "Napoli",
    alternativaC : "Torino",
    correta      : "Napoli",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Por qual time CR7 atuou mais tempo?",
    alternativaA : "Manchester United",
    alternativaB : "Sporting",
    alternativaC : "Real Madrid",
    correta      : "Manchester United",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual o maior campeão da Champions League?",
    alternativaA : "Milan",
    alternativaB : "Real Madrid",
    alternativaC : "Liverpool",
    correta      : "Real Madrid",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual destes jogadores nunca ganhou a Bola de Ouro?",
    alternativaA : "Ronaldo Fenômeno",
    alternativaB : "Luka Modríc",
    alternativaC : "Robert Lewandowski",
    correta      : "Robert Lewandowski",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Em qual posição Neymar ficou no ranking de melhores do mundo em 2015?",
    alternativaA : "Quarto lugar",
    alternativaB : "Terceiro lugar",
    alternativaC : "Quinto lugar",
    correta      : "Terceiro lugar",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual a segunda maior torcida do Brasil?",
    alternativaA : "Flamengo",
    alternativaB : "Corinthians",
    alternativaC : "Atlético Mineiro",
    correta      : "Corinthians",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é o time brasileiro considerado o pior do mundo?",
    alternativaA : "Birigui",
    alternativaB : "Portuguesa Santista",
    alternativaC : "Íbis",
    correta      : "Íbis",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual foi o primeiro jogador a ganhar o Troféu Puskás?",
    alternativaA : "Fernando Torres",
    alternativaB : "Andrés Iniesta",
    alternativaC : "Cristiano Ronaldo",
    correta      : "Cristiano Ronaldo",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Você está fazendo " + placar + " pontos "
 
    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 6000)
}