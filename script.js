const cardSection = document.getElementById("cardSection");
const dialog = document.querySelector("dialog");
const dialogBtn = document.getElementById("dialogBtn");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById("form");
const cancelBtn = document.getElementById('cancelBtn');

let myGames = [];

function addGame(game) {
  myGames.push(game);
  game.createCard();
}

class Game {
 constructor(title, hours, beat){
  this.title = title;
  this.hours = hours;
  this.beat = beat;
 }

  createCard() {
    const card = document.createElement("div");
    const titleCard = document.createElement("p");
    const hoursCard = document.createElement("p");
    const beatCard = document.createElement("p");

    card.dataset.index = myGames.indexOf(this);
    card.classList.add("card");
    card.appendChild(titleCard);
    titleCard.textContent = `${this.title}`;

    card.appendChild(hoursCard);
    hoursCard.textContent = `${this.hours} hours`;

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
      myGames.splice(card.dataset.index, 1, "");
      card.remove();
    });
    card.appendChild(removeBtn);
    
    const statusBtn = document.createElement("button");
    statusBtn.classList.add("statusBtn");
    statusBtn.textContent = "Toggle!";
    statusBtn.addEventListener("click", () => {
      this.beat = !this.beat;
      if (this.beat === true) {
        beatCard.textContent = "Completed";
      } else {
        beatCard.textContent = "Not completed";
      }
    });
    card.appendChild(statusBtn);
    cardSection.appendChild(card);
  };
}

dialogBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener('click', () => dialog.close());

addBtn.addEventListener("click", (e) => {
  if (form.checkValidity()) {
  e.preventDefault();
  const titleInput = document.getElementById("titleInput").value;
  const hoursInput = document.getElementById("hoursInput").value;
  const beatChecked =
    document.querySelector(`input[name="beat"]:checked`).value === "true";
  const game = new Game(titleInput, Number(hoursInput), beatChecked);
  addGame(game);
  } else {
    return;
  }
});
