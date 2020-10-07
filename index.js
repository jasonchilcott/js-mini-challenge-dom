document.addEventListener("DOMContentLoaded", () => {
/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color="red";

/***** Deliverable 3 *****/
//console.log("PLAYERS array looks like this:", PLAYERS)

const playerContainer = document.querySelector("div.player-container");

function createPlayersList(PLAYERS) {
    PLAYERS.forEach(player => {
        playerContainer.innerHTML += (`<div class="player" data-number="${player.number}">
        <h3>
          ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.photo}" alt="${player.name}">
      </div>`);
    });
}

createPlayersList(PLAYERS);


/***** Deliverable 4 *****/

manU = playerContainer.querySelector('div[data-number="7"]');
manU.remove();
});