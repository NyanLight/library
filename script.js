const main = document.querySelector('main');

const fable =  {
    title: "Fable 2",
    hours: 35,
    beat: true, 
};

const fallout = {
    title: "Fallout: New Vegas",
    hours: 250,
    beat: true,
}

let myGames = [fable, fallout];

function Game(title, hours, beat) {
    this.title = title;
    this.hours = hours;
    this.beat = beat;
};

function addGame(game) {
    myGames.push(game);
};

function createCard() {
    const card = document.createElement('div');
    card.classList.add("card");
    const title = document.createElement('p');
    card.appendChild(title);
    const hours = document.createElement('p');
    card.appendChild(hours);
    const beat = document.createElement('p');
    card.appendChild(beat);
    main.appendChild(card);
}

function displayLibrary() {
    for (const game of myGames) {
        console.log(game);
    };
};
