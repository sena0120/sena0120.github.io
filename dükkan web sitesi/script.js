const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const auto = true;
const intervalTime = 3000;
let slideInterval;


const nextSlide = () => {
    const activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active');
    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add('active');
    }else{
        slides[0].classList.add('active');
    }
}

const prevSlide = () => {
    const activeSlide = document.querySelector('.active')
    activeSlide.classList.remove('active');
    if(activeSlide.previouseElementSibling){
        activeSlide.previouseElementSibling.classList.add('active');
    }else{
        slides[slides.length ].classList.add('active');
    }
}

next.addEventListener('click',() => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide , intervalTime);
    }
})

prev.addEventListener('click',() => {
    prevSlide();
})

if(auto) {
    slideInterval = setInterval(nextSlide , intervalTime);
}

