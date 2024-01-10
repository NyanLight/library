const cardSection = document.getElementById("cardSection");
const dialog = document.querySelector("dialog");

let myGames = [];
function Game(title, hours, beat) {
  this.title = title;
  this.hours = hours;
  this.beat = beat;
  this.index = myGames.length;
  this.createCard = function () {
    const card = document.createElement("div");
    card.setAttribute("data-index", this.index);
    card.classList.add("card");
    const titleCard = document.createElement("p");
    card.appendChild(titleCard);
    titleCard.textContent = `${this.title}`;
    const hoursCard = document.createElement("p");
    card.appendChild(hoursCard);
    hoursCard.textContent = `${this.hours}`;
    const beatCard = document.createElement("p");
    card.appendChild(beatCard);
    if (this.beat === true) {
      beatCard.textContent = "Completed";
    } else {
      beatCard.textContent = "Not completed";
    }
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Delete";
    removeBtn.addEventListener("click", () => {
      myGames.splice(this.index, 1);
      displayLibrary;
    });
    card.appendChild(removeBtn);
    cardSection.appendChild(card);
  };
}

function addGame(game) {
  myGames.push(game);
}


function displayLibrary() {
  cardSection.innerHTML = "";
  for (const game of myGames) {
    game.createCard();
  }
}

const dialogBtn = document.getElementById("dialogBtn");
dialogBtn.addEventListener("click", () => dialog.showModal());

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("titleInput").value;
  const hoursInput = document.getElementById("hoursInput").value;
  const beatChecked =
    document.querySelector(`input[name="beat"]:checked`).value === "true";
  const game = new Game(titleInput, Number(hoursInput), beatChecked);
  addGame(game);
  displayLibrary();
});