const box = document.querySelectorAll(".box");
const image = document.querySelector(".image");



box.forEach(function (b) {
  b.addEventListener("dragover", (e) => {
    e.preventDefault();
    b.classList.add('hovered')
  });

  b.addEventListener('dragleave', () =>{
    b.classList.remove('hovered')
  });

  b.addEventListener("drop", () => {
    b.appendChild(image);
    b.classList.remove('hovered');
  });
  
});


// box[0].addEventListener('dragover', (event) => {
//   event.preventDefault();
// })
// box[1].addEventListener('dragover', (event) => {
//   event.preventDefault();
// })
// box[2].addEventListener('dragover', (event) => {
//   event.preventDefault();
// })
// box[3].addEventListener('dragover', (event) => {
//   event.preventDefault();
// })

// box[0].addEventListener('drop', () => {
//   box[0].appendChild(image);
// })

// box[1].addEventListener('drop', () => {
//   box[1].appendChild(image);
// })

// box[2].addEventListener('drop', () => {
//   box[2].appendChild(image);
// })

// box[3].addEventListener('drop', () => {
//   box[3].appendChild(image);
// })





// const container = document.querySelector('.container');
// let draggedImage = null;

// container.addEventListener('dragstart', (event) => {
//   draggedImage = event.target;
// });

// container.addEventListener('dragover', (event) => {
//   event.preventDefault();
// });

// container.addEventListener('drop', (event) => {
//   event.preventDefault();
//   if (event.target.classList.contains('box')) {
//     event.target.appendChild(draggedImage);
//   }
//   draggedImage = null;
// });