const phoneInput = document.querySelector('#phone_input')
const phoneBtn = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')
const modal = document.querySelector('.modal');

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneBtn.onclick = () => {
        try {
            if (regExp.test(phoneInput.value)) {
                phoneResult.innerText = 'OK'
                phoneResult.style.color = 'green'
            }else {
                phoneResult.innerText = 'ERROR'
                phoneResult.style.color = 'red'
            }
    }catch (error) {
        console.error(error)
    }

}
let sliderInterval;

function startSlider() {
    if (sliderInterval) clearInterval(sliderInterval);

    sliderInterval = setInterval(() => {
        const tabs = document.querySelectorAll('.tab_content_item');
        const contents = document.querySelectorAll('.tab_content_block');
        let currentActive = 0;

        tabs.forEach((tab, index) => {
            if (tab.classList.contains('tab_content_item_active')) {
                currentActive = index;
            }
        });

        tabs[currentActive].classList.remove('tab_content_item_active');
        contents[currentActive].classList.remove('tab_content_block_active');

        const nextActive = (currentActive + 1) % tabs.length;
        setTimeout(() => {
            tabs[nextActive].classList.add('tab_content_item_active');
            contents[nextActive].classList.add('tab_content_block_active');
        }, 100); // Небольшая задержка для плавности
    }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
    startSlider();
    const tabItems = document.querySelectorAll('.tab_content_item');
    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            clearInterval(sliderInterval);
            document.querySelectorAll('.tab_content_item_active').forEach(item => {
                item.classList.remove('tab_content_item_active');
            });
            document.querySelectorAll('.tab_content_block_active').forEach(content => {
                content.classList.remove('tab_content_block_active');
            });

            tab.classList.add('tab_content_item_active');
            document.querySelectorAll('.tab_content_block')[index].classList.add('tab_content_block_active');

            setTimeout(startSlider, 5000);
        });
    });
});

const block = document.querySelectorAll(".tab_content_block")
const tabItems = document.querySelector(".tab_content_items")
const tabItem = document.querySelectorAll(".tab_content_item")
let currentI = 0

const hideTabContent = () => {
        try {
            block.forEach( item => {
            item.style.display = "none"
            })
            tabItem.forEach( item => {
                item.classList.remove("tab_content_item_active")
            })
    }catch (error) {
        console.error(error)
    }

}

const showTadContent = (i = 0) => {
    try {
        block[i].style.display = 'block'
        tabItem[i].classList.add('tab_content_item_active')
        currentI = i
    }catch (error) {
        console.error(error)
    }

}
hideTabContent()
showTadContent()

const autoTabSlider = () => {
    setInterval(() => {
        currentI++;
        if (currentI > block.length - 1) {
            currentI = 0;
        }
        hideTabContent();
        showTadContent(currentI);
    }, 3000);
};
autoTabSlider();


// CONVERTER
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const euroInput = document.querySelector('#eur');

const converter = async (element, targetElement, targetElement2) => {
    try {
        const response = await fetch('../data/converter.json');
        const data = await response.json();

        switch (element.id) {
            case 'som':
                targetElement.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value / data.eur).toFixed(2);
                break;
            case 'usd':
                targetElement.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = (element.value * data.usd / data.eur).toFixed(2);
                break;
            case 'eur':
                targetElement.value = (element.value * data.eur).toFixed(2);
                targetElement2.value = (element.value * data.eur / data.usd).toFixed(2);
                break;
        }

        if (element.value === '') {
            targetElement.value = '';
            targetElement2.value = '';
        }
    } catch (error) {
        console.error( error);
    }
};

somInput.addEventListener('input', () => converter(somInput, usdInput, euroInput));
usdInput.addEventListener('input', () => converter(usdInput, somInput, euroInput));
euroInput.addEventListener('input', () => converter(euroInput, somInput, usdInput));

/// CARD SWITCHER

const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
const cardBlock = document.querySelector('.card')
const maxId = 200
let cardId = 1

function fetchCard(cardId = 1) {
    try {
        fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
            .then(response => response.json())
            .then(data => {
                cardBlock.innerHTML = `
                      <p>${data.title}</p>
                      <p>${data.completed}</p>
                      <span>${data.id}</span>
                `;
            })
    }catch (error) {
        console.error(error)
    }
}
const upNext = () => {
    try {
        if (cardId >= maxId) {
            cardId = 1
        }else {
            cardId++
        }
        fetchCard(cardId)
    }catch (error) {
        console.error(error)
    }
}
const prev = () => {
    try {
        if (cardId <= 1) {
            cardId = maxId
        }else {
            cardId--
        }
        fetchCard(cardId)
    }catch (error) {
        console.error(error)
    }
}
btnNext.onclick = upNext
btnPrev.onclick = prev
fetchCard();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))