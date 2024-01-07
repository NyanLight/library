const cardSection = document.getElementsByClassName('cardSection');
const dialog = document.querySelector('dialog');

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
        cardSection.appendChild(card);
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

const dialogBtn = document.getElementById('dialogBtn');
dialogBtn.addEventListener('click', () => dialog.showModal());

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('titleInput').value;
    const hoursInput = document.getElementById('hoursInput').value;
    const beatChecked = (document.querySelector(`input[name="beat"]:checked`).value === 'true');
    const game = new Game(titleInput, Number(hoursInput), beatChecked);
    addGame(game); 
})