const emailInput = document.querySelector('#gmail_input')
const emailBtn = document.querySelector('#gmail_button')
const emailResult = document.querySelector('#gmail_result')

const regExs =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

emailBtn.onclick = () => {
    try {
        if (regExs.test(emailInput.value)) {
            emailResult.innerText = 'OK'
            emailResult.style.color = 'green'
        }else {
            emailResult.innerText ='ERROR'
            emailResult.style.color ='red'
        }
    }catch (error) {
        console.error(error)
    }
}
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0
let positionY = 0
let direction = 'right'

const offWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    try {
        if (direction === 'right') {
            if (positionX < offWidth) {
                positionX++
            } else {
                direction = 'down'
            }
        } else if (direction === 'down') {
            if (positionY < offHeight) {
                positionY++
            } else {
                direction = 'left'
            }
        } else if (direction === 'left') {
            if (positionX > 0) {
                positionX--
            } else {
                direction = 'up'
            }
        } else if (direction === 'up') {
            if (positionY > 0) {
                positionY--
            } else {
                direction = 'right'
            }
        }

        childBlock.style.left = `${positionX}px`
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }catch (error) {
        console.error(error)
    }
}

moveBlock();

const secondsEl = document.querySelector('#seconds')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let counter = 0
let inter
let isRunning = false
const startCount = () => {
    try {
        if (!isRunning) {
        inter = setInterval(() => {
            counter++;
            secondsEl.textContent = counter;
        }, 1000);
    }
    isRunning = true
    }catch (error){
        console.error(error)
    }
}
startBtn.onclick = () => startCount()

const stopCount = () => {
    try {
        isRunning = false
        clearInterval(inter)
    }catch (error) {
        console.error(error)
    }
};

stopBtn.onclick = () => stopCount()

const resetCount = () => {
    try {
        stopCount()
        counter = 0
        secondsEl.textContent = counter
    }catch (error) {
        console.error(error)
    }

};

resetBtn.onclick = () => resetCount()