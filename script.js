const content = document.querySelector('.content');
const btn = document.querySelector('.btn'); // Declare `btn` properly
const body = document.querySelector('body');
console.log(body);
content.addEventListener('click', function () {
    btn.style.backgroundColor = "red"; 
    btn.textContent = "thank you 😊" 
    body.style.background = 'url("./images/89769.jpg")'; 
    body.style.backgroundSize = "cover"; // Make the image cover the entire background
    body.style.backgroundRepeat = "no-repeat"; // Ensure the image doesn't repeat
    body.style.backgroundPosition = "center"; // Center the image
    body.style.overflow = "hidden"; // Prevent scrolling
  content.style.backgroundColor = "aqua"
  btn.style.borderRadius = '12px';
  content.style.borderRadius = "100px"
  btn.style.cursor = "grabbing"
});
