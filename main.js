const upBtn = document.querySelector('.down-button');
const downBtn = document.querySelector('.up-button');

const sidebar = document.querySelector('.sidebar');

const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

const container = document.querySelector('.container');

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', ()=> {
    chengeSlide('up');
})

downBtn.addEventListener('click', ()=> {
    chengeSlide('down');
})

// нажатие на кнопку
document.addEventListener('keydown',(e)=>{
    if(e.key === 'ArrowUp'){
        chengeSlide('up');
    }else if (e.key === 'ArrowDown'){
        chengeSlide('down');
    }
})

function chengeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    }else if (direction === 'down') {
        activeSlideIndex --
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    } 

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

