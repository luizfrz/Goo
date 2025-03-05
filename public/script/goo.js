let index = 0;

function moverSlide(direction) {
    const slides = document.querySelector('.Carrouselfilho');
    const totalSlides = slides.children.length;
    index = (index + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}