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
}
