const mainImage = document.querySelector('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click',   
 () => {
    mainImage.src = thumbnail.src;
  });
});

const mainImage2 = document.querySelector('.main-image2');
const thumbnails2 = document.querySelectorAll('.thumbnail2');

thumbnails2.forEach(thumbnail2 => {
  thumbnail2.addEventListener('click',   
 () => {
    mainImage2.src = thumbnail2.src;
  });
});

const btnScroll = document.getElementById('btn-scroll');
const secaoDestino = document.getElementById('galeria-tiamate-coffe-to-go');

btnScroll.addEventListener('click', () => {
  secaoDestino.scrollIntoView({ behavior: 'smooth' });
});