 
let productCard = document.querySelector('.product-card')
let shirt3 = document.querySelector('.shirt3')
let shirt1 = document.querySelector('.shirt1')
let img = document.querySelectorAll('.parallax-img')
let howvideo = document.querySelector('.how-it-video')
let howimg = document.querySelector('.how-it-img')

let deer = document.querySelector('.deer-open')

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
  howvideo.style.display = "none";
  howimg.style.display = "block";
  } else {
  	heading.innerHTML=desktopText
    howvideo.style.display = "block";
    howimg.style.display = "none";
  }
}

document.addEventListener('scroll', function(event){
  parallax(productCard, 10, -1)
  parallax(shirt3,20,1)
  parallax(shirt1,20,-1)
  for(let i=0;i<img.length;i++){
    parallax(img[i],17.5,-1)} 
  if(howvideo){scrollvideo(howvideo)}
})

function parallax(element, offset, direction){
  let rect = element.getBoundingClientRect()
  let progress = 1 - rect.top / window.innerHeight;
  progress = Math.max(0, Math.min(2, progress));
  element.style.top = progress*offset*direction + '%'
}

function scrollvideo(element) {
  let rect = element.getBoundingClientRect()
  let progress = (window.innerHeight - rect.y)/(window.innerHeight+rect.height)
  element.currentTime = progress * element.duration
}

gsap.timeline({repeat:-1}).to(deer,{duration:0, display:'none'},'+=2.5')
                          .to(deer,{duration:0, display:'block'},'+=0.15')