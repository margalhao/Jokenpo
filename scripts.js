const buttons = document.querySelectorAll('.choice');
const playerScore = document.querySelector('.your-score span');
const machineScore = document.querySelector('.machine-score span');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
const translate = {
    rock: 'pedra',
    paper: 'papel',
    scissor: 'tesoura'
}
const choices = ['rock', 'paper', 'scissor'];
const getMachineChoice = () => choices[Math.floor(Math.random() * choices.length)];

let playerPoints = 0
let machinePoints = 0
let message = 'Resultado'

const render = () => {
    playerScore.textContent = playerPoints
    machineScore.textContent = machinePoints
    result.innerHTML = message
}
render()

const play = (playerChoice) => {
    const machineChoice = getMachineChoice()
    if (playerChoice === machineChoice) {
        message = `Empate <br> A máquina escolheu ${translate[machineChoice]}!`
        render()
    } else if ((playerChoice === 'rock' && machineChoice === 'scissor') ||
              (playerChoice === 'paper' && machineChoice === 'rock') || 
              (playerChoice === 'scissor' && machineChoice === 'paper')) {
        playerPoints++
        message = `Vitória <br> A máquina escolheu ${translate[machineChoice]}!`
        render()
    } else {
        machinePoints++
        message = `Derrota <br> A máquina escolheu ${translate[machineChoice]}!`
        render()
    }
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        play(button.id)
    })
})
reset.addEventListener('click', () => {
    playerPoints = 0
    machinePoints = 0
    message = 'Resultado'
    render()
})
