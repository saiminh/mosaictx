import gsap from "gsap"

export const popupthe = (popup) => {
  const target = document.querySelector(`[data-popup-name="${popup}"]`)
  const targetInner = target?.querySelector('.popup__inner')
  const content = target?.querySelector('.popup__inner > *')
  const clickListener = (e) => {
    gsap.to(target, {duration: 0.5, backgroundColor: 'rgba(0,0,0,0)', ease: 'power2.out'})
    gsap.to(targetInner, {duration: 0.5, yPercent: 100, ease: 'back.in(1.4)'})
    setTimeout(() => {
      gsap.set(target, {yPercent: 0, backgroundColor: 'rgba(0,0,0,0)'})
      target.removeEventListener('click', clickListener )
    }, 500)
    
  }
  gsap.set(target, {yPercent: -100, backgroundColor: 'rgba(0,0,0,0)'})
  gsap.set(targetInner, {yPercent: 100})
  gsap.to(target, {duration: 0.5, backgroundColor: 'rgba(0,0,0,.5)', ease: 'power2.out'})
  gsap.to(targetInner, {duration: 0.5, yPercent: 0, ease: 'back.out(1.4)'})
  target?.addEventListener('click', clickListener )
  content?.addEventListener('click', (e) => {
    e.stopPropagation()
  })
}