const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');
const result = document.querySelector('.result')
const yourScore = document.querySelector('.your-score span');
const machineScore = document.querySelector('.machine-score span');
const reset = document.querySelector('.reset');
const choices = ['rock', 'paper', 'scissor'];
const machineRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

rock.addEventListener('click', () => {
    const machineChoice = machineRandomChoice()
    switch (machineChoice) {
        case 'rock':
            result.placeholder = 'Empate'
            break;
        case 'paper':
            machineScore.textContent++
            result.placeholder = 'Derrota'
            break
        case 'scissor':
            yourScore.textContent++
            result.placeholder = 'Vitória'
            break
    }
})

paper.addEventListener('click', () => {
    const machineChoice = machineRandomChoice()
    switch (machineChoice) {
        case 'rock':
            yourScore.textContent++
            result.placeholder = 'Vitória'
            break
        case 'paper':
            result.placeholder = 'Empate'
            break
        case 'scissor':
            machineScore.textContent++
            result.placeholder = 'Derrota'
            break
    }

})

scissor.addEventListener('click', () => {
    const machineChoice = machineRandomChoice()
    switch (machineChoice) {
        case 'rock':
            machineScore.textContent++
            result.placeholder = 'Derrota'
            break
        case 'paper':
            yourScore.textContent++
            result.placeholder = 'Vitória'
            break
        case 'scissor':
            result.placeholder = 'Empate'
            break
    }
})

reset.addEventListener('click', () =>{
    yourScore.textContent = 0
    machineScore.textContent = 0
    result.placeholder = 'Resultado'
})