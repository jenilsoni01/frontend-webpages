
const sliderList = document.querySelector('.slider-list');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function slideNext() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(slideNext, 3000);