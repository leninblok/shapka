 if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener('load', () => {
        if (!location.hash) window.scrollTo(0, 0);
        const main = document.querySelector('main');
        main.style.opacity = '1';
        main.style.transform = 'translateY(0)';
  });


let heading= document.querySelector('#class-heading')
const mobileText = heading.innerHTML.replace(/<br\s*\/?>/gi, '');
const desktopText = heading.innerHTML

checkBreakpoint();
window.addEventListener('resize', checkBreakpoint);


function checkBreakpoint() {
  if (window.innerWidth < 768) {
	heading.innerHTML=mobileText
  } else {
  	heading.innerHTML=desktopText
  }
}

let productCard = document.querySelector('.product-card')
let shirt3 = document.querySelector('.shirt3')
let shirt1 = document.querySelector('.shirt1')
let deer = document.querySelector('.deer-img')

document.addEventListener('scroll', function(event){
  parallax(productCard, 10, -1)
  parallax(shirt3,20,1)
  parallax(shirt1,20,-1)
  parallax(deer,17.5,1)
})

function parallax(element, offset, direction){
  let rect = element.getBoundingClientRect()
  // let progress = (window.innerHeight-rect.y)/(window.innerHeight+rect.y)
  // progress = Math.max(-2, Math.min(2, progress));
  let progress = 1 - rect.top / window.innerHeight;
  progress = Math.max(0, Math.min(2, progress));
  element.style.top = progress*offset*direction + '%'
}