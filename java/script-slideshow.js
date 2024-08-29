let slideIndex = 0;

function moveSlides(n) {
    slideIndex += n;
    let slides = document.querySelector('.slides');
    let totalSlides = slides.children.length;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = totalSlides - 1; }
    slides.style.transform = 'translateX(' + (-slideIndex * 100 / 3) + '%)';
    updateDots();
}

function currentSlide(n) {
    slideIndex = n;
    let slides = document.querySelector('.slides');
    slides.style.transform = 'translateX(' + (-slideIndex * 100 / 3) + '%)';
    updateDots();
}

function updateDots() {
    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[slideIndex].classList.add('active-dot');
}
