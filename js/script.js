const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
      })
  })
}
let burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu');
let burgerline1 = document.querySelector('.menu-burger__line1');
let burgerline2 = document.querySelector('.menu-burger__line2');
let burgerline3 = document.querySelector('.menu-burger__line3');
burger.onclick = function(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    burgerline1.classList.toggle('active');
    burgerline2.classList.toggle('active');
    burgerline3.classList.toggle('active');
}

