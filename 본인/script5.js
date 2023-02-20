const body = document.body;

function changeBackGround() {
  const width = window.innerWidth;
  console.log(width);
  if (width > 1200) {
    body.classList.add("blue");
    body.classList.remove("yellow");
    body.classList.remove("gray");
  } else if (width >= 768 && width <= 1150) {
    body.classList.add("yellow");
    body.classList.remove("blue");
    body.classList.remove("gray");
  } else {
    body.classList.add("gray");
    body.classList.remove("blue");
    body.classList.remove("yellow");
  }
}

window.addEventListener("resize", changeBackGround);






