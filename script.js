const myGames = [];

function Game(title, hours, beat) {
    this.title = title;
    this.hours = hours;
    this.beat = beat;
};

function addGameToLibrary(game) {
    myGames.push(game);
}
