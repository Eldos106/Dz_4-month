const  modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    try {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }catch (error) {
        console.error(error)
    }

}

const closeModal = () => {
    try {
        modal.style.display = 'none'
        document.body.style.overflow = ''
    }catch (error) {
        console.error(error)
    }

}
modalTrigger.onclick = openModal
modalCloseButton.onclick = closeModal
modal.onclick = (event) => {
    try {
         if (event.target === modal) {
            closeModal()
        }
    }catch (error) {
        console.error(error)
    }
}
const handleScroll = () => {
    try {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', handleScroll);
        }
    }catch (error) {
        console.error(error)
    }
};

window.addEventListener('scroll', handleScroll);
try {
    setTimeout(function() {
        document.querySelector('.modal').style.display = 'block';
    }, 10000);
}catch (error) {
    console.error(error)
}