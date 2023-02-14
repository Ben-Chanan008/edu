const container = document.querySelector('.images');
const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');
const imagesContainer = document.querySelector('.image-container');
// const imgCls = document.querySelector('.images')
// console.log(imagesContainer)
let activeSlider = 0;
let slide = false;
let image = [];

image[0] = 'ben.jpg';
image[1] = 'bensla_logo.png';
image[2] = 'cafer.jpg';
image[3] = 'head.jpg';
image[4] = 'daniel.jpg';

document.slider.src = image[0];
left.addEventListener('click', () => slide('left'));
right.addEventListener('click', () => slide('right'));
slide = function(direction){
    const slidingAnimation = document.slider.src = image[activeSlider];
    if (direction === 'left')
        activeSlider = (activeSlider - 1 > -1) ? activeSlider -= 1 : image.length - 1;
    // image[0].style.transform = 'translateX(-100%)';
    // image[0].style.transition = 'translate';
    if (direction === 'right')
        activeSlider = (activeSlider < image.length - 1) ? activeSlider += 1 : 0;
    document.slider.src = image[activeSlider];
}
const second = document.querySelector('.second-nav');
let tops = 0;

const stats = document.querySelector('.stats');
stats.clientHeight = 100

// console.log(top)
// if(!slide()){
//     setInterval(() => {
//         setTimeout("slide()", 1500)
//     }, 10)
// }
// gsap.fromTo(slidingAnimation, {opacity: 0}, {opacity: 1}, {duration: 1});
// window.onload =     console.log(activeSlider, document.slider.src);
// window.onload = activeSlider