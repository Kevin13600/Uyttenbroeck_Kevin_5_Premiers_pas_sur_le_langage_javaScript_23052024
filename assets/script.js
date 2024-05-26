const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const dotsContainer = document.querySelector('.dots')
const imageElement = document.querySelector('.banner-img')
const taglineElement = document.querySelector('#banner p')

let i = 0


slides.forEach((slide, index) => {
    const dot = document.createElement('span')
    dot.classList.add('dot')
    if (index === 0) {
        dot.classList.add('dot_selected')
    }
    dot.addEventListener('click', () => {
        i = index
        updateSlide()
    })
    dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll('.dot')


arrowLeft.addEventListener("click", () => {
    decrementIndex();
    updateSlide();
});

arrowRight.addEventListener("click", () => {
    incrementIndex();
    updateSlide();
});

function updateSlide() {
    const currentSlide = slides[i];
    imageElement.src = `./assets/images/slideshow/${currentSlide.image}`
    taglineElement.innerHTML = currentSlide.tagLine
    dots.forEach(dot => dot.classList.remove('dot_selected'))
    dots[i].classList.add('dot_selected')
}

function incrementIndex() {
    i++;
    if (i >= slides.length) {
        i = 0;
    }
}

function decrementIndex() {
    i--;
    if (i < 0) {
        i = slides.length - 1
    }
}

updateSlide();

