const sliderInner = document.querySelector('.card-slider-inner');
let startX;
let scrollLeft;

const cardSlideControlPrev = document.getElementById('cardSlideControlPrev');
const cardSlideControlNext = document.getElementById('cardSlideControlNext');

sliderInner.addEventListener('mousedown', (e) => {
	startX = e.pageX - sliderInner.offsetLeft;
	scrollLeft = sliderInner.scrollLeft;
	sliderInner.addEventListener('mousemove', mouseMoveHandler);
});

document.addEventListener('mouseup', () => {
	sliderInner.removeEventListener('mousemove', mouseMoveHandler);
});

function mouseMoveHandler(e) {
	const x = e.pageX - sliderInner.offsetLeft;
	const walk = (x - startX) * 2;
	sliderInner.scrollLeft = scrollLeft - walk;
}

cardSlideControlNext.addEventListener('click', () => {
	sliderInner.scrollLeft += sliderInner.clientWidth * 0.3; 
});

cardSlideControlPrev.addEventListener('click', () => {
	sliderInner.scrollLeft -= sliderInner.clientWidth * 0.3;
});
