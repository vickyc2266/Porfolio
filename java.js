

// import { animate } from "popmotion";

// document.addEventListener('DOMContentLoaded', () => {
//   const nameElement = document.getElementById('animateName');
//   if (nameElement) {
//     animate({
//       from: 1,
//       to: 1.5,
//       onUpdate: latest => {
//         nameElement.style.transform = `scale(${latest})`;
//       }
//     });
//   } else {
//     console.error('Element with ID animateName was not found.');
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
    const texts = ["Mentor", "Developer", "Product Manager"];
    let index = 0;
    const textElement = document.getElementById('dynamicText');

    function updateText() {
        textElement.classList.remove('fade-in');
        setTimeout(() => {
            textElement.textContent = texts[index];
            textElement.classList.add('fade-in');
            index = (index + 1) % texts.length; // Loop back to the first item after the last
        }, 500); // Change text after fading out
    }

    setInterval(updateText, 1500); // Change text every 3000 milliseconds to allow fade in/out
});




  