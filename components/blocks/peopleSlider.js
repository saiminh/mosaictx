import gsap from "gsap"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

function isMobile() {
  return window.innerWidth < 640;
}

export const nextSlide = (e) => {
  const slidesPerView = isMobile() ? 2 : 3;
  const slider = e.target.closest('.slider');
  const items = slider.querySelectorAll('.item[data-hidden-by-filter="false"]');
  const sliderX = slider.getAttribute('data-slider-x');
  const maxSliderX = (items.length - slidesPerView) * 100;
  if (items.length <= slidesPerView) {
    return
  } 
  if (slider.getAttribute('data-sliding') === 'true') {
    return
  }
  slider.setAttribute('data-sliding', 'true');

  if ( sliderX >= (items.length - slidesPerView) * 100 ) {
    // move the first item to the end
    const firstItem = slider.querySelector('.item[data-hidden-by-filter="false"]');
    slider.querySelector('.rail').appendChild(firstItem);
    gsap.set( items, { xPercent: '+=100' } );
    gsap.to( items, { xPercent: '-=100', duration: .4, ease: 'back.out(1.7)', onComplete: () => {
      slider.setAttribute('data-sliding', 'false')
    } } );
  } 
  else {
    gsap.to( items, { xPercent: '-=100', duration: .4, ease: 'back.out(1.7)', onComplete: () => {
      slider.setAttribute('data-sliding', 'false')
    } } );
    sliderX <= maxSliderX && slider.setAttribute('data-slider-x', parseInt(sliderX) + 100);
  }

}
export const prevSlide = (e) => {
  const slidesPerView = isMobile() ? 2 : 3;
  const slider = e.target.closest('.slider');
  const sliderX = slider.getAttribute('data-slider-x');
  const items = slider.querySelectorAll('.item[data-hidden-by-filter="false"]');
  if (items.length <= slidesPerView) {
    return
  } 
  if (slider.getAttribute('data-sliding') === 'true') {
    return
  }
  slider.setAttribute('data-sliding', 'true');

  if ( sliderX == 0 ) {
    // move the last item to the front
    const lastItem = items[items.length - 1];
    slider.querySelector('.rail').prepend(lastItem); 
    gsap.set( items, { xPercent: '-=100' } );
    gsap.to( items, { xPercent: '+=100', duration: .4, ease: 'back.out(1.7)', onComplete: () => {
      slider.setAttribute('data-sliding', 'false')
   } } );
  } 
  else {
    gsap.to( items, { xPercent: '+=100', duration: .4, ease: 'back.out(1.7)', onComplete: () => {
      slider.setAttribute('data-sliding', 'false')
   } } );
    sliderX != 0 && slider.setAttribute('data-slider-x', parseInt(sliderX) - 100);
  }
}

export const mouseWheelHandler = (e) => {

  //throttle the mousewheel event
  if (e.target.getAttribute('data-mousewheeling') === 'true') {
    return
  }
  e.target.setAttribute('data-mousewheeling', 'true');
  setTimeout(() => {
    e.target.setAttribute('data-mousewheeling', 'false');
  }, 900);

  // if the mouseWheel event is scrolling right
  if ( Math.abs(e.deltaY) < Math.abs(e.deltaX) && Math.abs(e.deltaX) > 0.9 ) {

    if ( e.deltaX < -0.9 ) {
      e.preventDefault();
      prevSlide(e);
    }
    else if ( e.deltaX > 0.9 ) {
      e.preventDefault();
      nextSlide(e);
    }
  }
}

export const touchMoveHandler = (e) => {
  e.target.addEventListener('touchstart', handleTouchStart, false);        
  e.target.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;                                                        
  var yDown = null;

  function getTouches(evt) {
    return evt.touches;
  }                                                     
                                                                         
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                
                                                                         
  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
                                                                         
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
              /* right swipe */ 
              nextSlide(e);
          } else {
              /* left swipe */
              prevSlide(e);
          }                       
      } 
      /* reset values */
      xDown = null;
      yDown = null;                                             
  };
}

export const popupSlide = (e) => {
  const slider = e.target.closest('.slider');
  const items = slider.querySelectorAll('.item');
  const thisitem = e.target.closest('.item');
  const thisitemindex = thisitem.getAttribute('data-popup-index');
  // const popups = document.querySelectorAll('[data-element="popups"] [data-element="popupitem"]');
  const thispopup = document.querySelector('[data-element="popups"] [data-element="popupitem"][data-popup-index="' + thisitemindex + '"]');
  thispopup.setAttribute('data-active', 'true');
  gsap.set(thispopup, { yPercent: -100 });
  gsap.to(thispopup, { opacity: 1, duration: .2, ease: 'power3.inOut' })
  gsap.to(thispopup.querySelector('.people__popup__item__box'), {
    y: 0,
    duration: .5, 
    ease: 'back.out(1.1)', 
  })
}

export const closeSlide = (e) => {
  const thispopup = e.target.closest('[data-element="popupitem"]');
  
  gsap.to(thispopup, { opacity: 0, duration: .4, ease: 'power3.inOut', onComplete: () => {
    gsap.set(thispopup, { yPercent: 0 });
  }})
  gsap.to(thispopup.querySelector('.people__popup__item__box'), {
    y: '100vh',
    duration: .5, 
    ease: 'back.out(1.1)', 
    onComplete: () => {
      thispopup.setAttribute('data-active', 'false');
    }
  })
}

export const filterSlides = (e) => {
  const whatToFilter = e.target.getAttribute('data-filter');
  const slider = e.target.closest('.slider');
  //toggle all attributes in slider that start with data-filter-
  const sliderAttributes = slider.attributes;
  const sliderItems = slider.querySelectorAll('[data-department]');
  
  for (let i = 0; i < sliderAttributes.length; i++) {
    if (sliderAttributes[i].name.startsWith('data-filter-')) {
      sliderAttributes[i].ownerElement.removeAttribute(sliderAttributes[i].name);
    }
  }
  slider.querySelectorAll('[data-filter-active]').forEach((item) => {
    if (item !== e.target) {
      item.removeAttribute('data-filter-active');
    }
  });
  // if we are unchecking a filter
  if (e.target.getAttribute('data-filter-active') === 'true') {
    e.target.removeAttribute('data-filter-active');
    slider.removeAttribute(`data-filter-${whatToFilter}-active`);
    sliderItems.forEach((item) => {
      item.setAttribute('data-hidden-by-filter', 'false');
    })
    gsap.to(sliderItems , {duration: .2, ease: 'power4.in', opacity: 0, yPercent: 33, onComplete: ()=>{
      gsap.set(sliderItems , {display: 'block', xPercent: 0}); //reset the xPercent
      slider.setAttribute('data-slider-x', 0);
      slider.querySelector('.rail').scrollTo(0,0);
      gsap.to(sliderItems , {duration: .5, stagger: { each: .033 }, ease: 'power3.inOut', opacity: 1, yPercent: 0})
    }})
  } 
  // if we are checking a new filter
  else {
    e.target.setAttribute('data-filter-active', 'true');
    slider.setAttribute(`data-filter-${whatToFilter}-active`, 'true');
    slider.querySelectorAll('[data-department]').forEach((item, index) => {
      if (item.getAttribute('data-department') !== whatToFilter) {
        item.setAttribute('data-hidden-by-filter', 'true');
        gsap.to(item, {duration: .3, ease: 'power3.inOut', opacity: 0, yPercent: 33, onComplete: ()=>{item.style.display = 'none'}})
      } 
      else {
        item.setAttribute('data-hidden-by-filter', 'false');
        gsap.to(item, {duration: .2, ease: 'power4.in', opacity: 0, yPercent: 33, onComplete: ()=>{
          gsap.set(item, {opacity: 0, display: 'block', xPercent: 0, delay: .02})
          slider.setAttribute('data-slider-x', 0);
          slider.querySelector('.rail').scrollTo(0,0);
          gsap.to(item, {duration: .5, delay: (index + 1) * 0.033, ease: 'power3.inOut', opacity: 1, yPercent: 0})
        }})
      }
    })
  }

}