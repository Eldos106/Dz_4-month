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
document.addEventListener('DOMContentLoaded', function() {
    const childBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');
    const parentWidth = parentBlock.offsetWidth;
    const childWidth = childBlock.offsetWidth;
    const maxPosition = parentWidth - childWidth;
    let currentPosition = 0;
    function moveBlock() {
        if (currentPosition < maxPosition) {
            currentPosition += 1;
            childBlock.style.left = `${currentPosition}px`;
            requestAnimationFrame(moveBlock);
        }
    }

    moveBlock();
});
