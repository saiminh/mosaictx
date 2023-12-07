import gsap from "gsap";

export const nextSlide = (e) => {
  e.target.toggleAttribute('data-bg-white');
  const slider = e.target.closest('[data-slider]');
  const currentSlide = slider.querySelector('[data-current-news="true"]') ;
  const slides = slider.querySelectorAll('.work__news__item');
  const nextSlide = currentSlide.nextElementSibling || slides[0];

  const nextSlideImg = nextSlide.querySelector('img'),
        nextSlideText = nextSlide.querySelector('.work__news__text__inner');
  slides.forEach(slide => slide.style.zIndex = 0);
  currentSlide.setAttribute('data-current-news', 'false');
  currentSlide.style.zIndex = 1;
  nextSlide.setAttribute('data-current-news', 'true');
  nextSlide.style.zIndex = 2;
  gsap.fromTo( [nextSlideText, nextSlideImg], 
    { xPercent: 100 }, 
    { duration: .4, xPercent: 0, ease: 'back.out(1.2)', stagger: .025 })
}
export const prevSlide = () => {
  const slider = document.getElementById('news');
  const currentSlide = slider.querySelector('[data-current-news="true"]');
  const slides = slider.querySelectorAll('.work__news__item');
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

  const prevSlideImg = prevSlide.querySelector('img'),
        prevSlideText = prevSlide.querySelector('.work__news__text__inner');
  slides.forEach(slide => slide.style.zIndex = 0);
  currentSlide.setAttribute('data-current-news', 'false');
  currentSlide.style.zIndex = 1;
  prevSlide.setAttribute('data-current-news', 'true');
  prevSlide.style.zIndex = 2;
  gsap.fromTo( [prevSlideText, prevSlideImg], 
    { xPercent: -100 }, 
    { duration: .4, xPercent: 0, ease: 'back.out(1.2)', stagger: .025 })
}