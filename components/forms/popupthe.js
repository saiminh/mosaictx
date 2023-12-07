import gsap from "gsap"

export const popupthe = (popup) => {
  let nav = document.querySelector('.nav')
  document.body.style.overflow = 'hidden'
  const target = document.querySelector(`[data-popup-name="${popup}"]`)
  const targetInner = target?.querySelector('.popup__inner')
  const content = target?.querySelector('.popup__inner > *')
  const clickListener = (e) => {
    gsap.to(target, {duration: 0.5, backgroundColor: 'rgba(0,0,0,0)', ease: 'power2.out'})
    gsap.to(targetInner, {duration: 0.5, yPercent: 100, ease: 'power3.in'})
    setTimeout(() => {
      gsap.set(target, {yPercent: 0, backgroundColor: 'rgba(0,0,0,0)'})
      target.removeEventListener('click', clickListener )
      if ( !nav.classList.contains('nav--open') ) {
        document.body.style.overflow = 'auto'
      } 
    }, 500)
  }
  gsap.set(target, {yPercent: -100, backgroundColor: 'rgba(0,0,0,0)'})
  gsap.set(targetInner, {yPercent: 100})
  gsap.to(target, {duration: 0.5, backgroundColor: 'rgba(0,0,0,.5)', ease: 'power2.out'})
  gsap.to(targetInner, {duration: 0.5, yPercent: 0, ease: 'power3.out'})
  target?.addEventListener('click', clickListener )
  content?.addEventListener('click', (e) => {
    e.stopPropagation()
  })
}