const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');


content.addEventListener('click', function () 
{
    btn.style.backgroundColor = "red";
    btn.textContent = "Thank You 😊";
    body.style.background = 'url("./images/89769.jpg")';
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
    body.style.overflow = "hidden";
    content.style.backgroundColor = "aqua";
    btn.style.borderRadius = '12px';
    content.style.borderRadius = "100px";
    content.innerHTML = 'Functionality Updated!';
    btn.style.cursor = "grabbing";
});


const URL = "https://v2.jokeapi.dev/joke/Any";

async function fetchJoke() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayJoke(data);
    } catch (error) {
        console.error("Error fetching joke:", error);
        displayJoke({ joke: "Oops! Something went wrong. Try again later." });
    }
}

// Display fetched joke in content div
function displayJoke(data) {
    if (data.type === "single") {
        content.textContent = data.joke;
    } else if (data.type === "twopart") {
        content.textContent = `${data.setup} - ${data.delivery}`;
    } else {
        content.textContent = "No joke found.";
    }
}

// Add event listener to the button to fetch jokes
btn.addEventListener('click', fetchJoke);
