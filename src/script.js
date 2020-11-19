document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector( 
        "body").style.visibility = "hidden"; 
      document.querySelector( 
        ".preloader").style.visibility = "visible"; 
  } else { 
      document.querySelector( 
        ".preloader").style.display = "none"; 
      document.querySelector( 
        "body").style.visibility = "visible"; 
  } 
}; 

let hamburger = document.querySelector('.hamburger');
let navBody = document.querySelector('.nav-links');
let navLinks = document.getElementById('main-nav');
let buttons =  document.querySelectorAll('button');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle') //Toggle Nav icon
    navLinks.classList.toggle('nav-active') //Show Nav links
    navBody.classList.toggle('nav-links-active') //Show Nav background
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('btn-toggle')
        button.previousElementSibling.classList.toggle('info-show')})
});

window.onload = () => {

//Landing entrance
let tl = gsap.timeline();

  tl.from(".view", {duration: 1.5, opacity: 0, x: -100, autoAlpha:0 , ease: "power3.Out"})
    .from(".nav-logo", {duration: 1, opacity: 0, y: -50, autoAlpha:0, ease: "back.out(1.8)"})
    .from(".hamburger", {duration: 1, opacity: 0, y: -50, autoAlpha:0, ease: "back.out(1.8)"})
    .from(".landing-text", {duration: 1, opacity: 0, x: -100, autoAlpha:0, ease: "power3.Out"})
    .from(".quote", {duration: 1, opacity: 0, y: 50, autoAlpha:0, ease: "power3.Out"})

}


    

//Gallery scrolltrigger
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

