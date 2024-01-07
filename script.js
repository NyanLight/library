const main = document.querySelector('main');

function Game(title, hours, beat) {
    this.title = title;
    this.hours = hours;
    this.beat = beat;
    this.createCard = function() {
        const card = document.createElement('div');
        card.classList.add("card");
        const titleCard = document.createElement('p');
        card.appendChild(titleCard);
        titleCard.textContent = `${this.title}`;
        const hoursCard = document.createElement('p');
        card.appendChild(hoursCard);
        hoursCard.textContent = `${this.hours}`;
        const beatCard = document.createElement('p');
        card.appendChild(beatCard);
        if (this.beat === true) {
            beatCard.textContent = "Completed";
        } else {
            beatCard.textContent = "Not completed";
        };
        main.appendChild(card);
    }
};

const fable = new Game("Fable 2", 25, true);
const fallout = new Game("Fallout: New Vegas", 250, true);

let myGames = [fable, fallout];

function addGame(game) {
    myGames.push(game);
};


function displayLibrary() {
    for (const game of myGames) {
        game.createCard();
    };
};
