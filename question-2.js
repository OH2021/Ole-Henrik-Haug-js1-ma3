// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d835ae9099b64321abc45ae378acd7e5";

const resultsContainer = document.querySelector(".games");

async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const name = data.all;

        createHTML(name);

    } catch (error) {
        resultsContainer.innerHTML = displayError("Error");
    }
}

getGames();

function createNameHTML(results) {
    const name = results.all;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < name.length; i++) {

        if (i === 7) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${name[i].text}</div>`;
    }
}

function createRatingHTML(results) {
    const rating = results.all;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < rating.length; i++) {

        if (i === 7) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${rating[i].text}</div>`;
    }
}

function createTagsHTML(results) {
    const tag = results.all;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < tag.length; i++) {

        if (i === 7) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${tag[i].text}</div>`;
    }
}