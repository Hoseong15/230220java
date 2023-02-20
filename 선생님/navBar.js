const navbar = document.getElementById("navbar");
const content = document.querySelector(".content");
const sticky = navbar.offsetTop;
console.log(sticky);
console.log(window.scrollY);

function myFunction() {
  console.log(window.scrollY);
  if(window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }

}
document.addEventListener("scroll", myFunction);