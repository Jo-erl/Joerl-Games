const games = [
  {
    title: "Watch Dogs",
    genre: "Open World",
    image: "./Images/14.jpg",
    downloadLink: "watchdogs.html",
  },
  {
    title: "Mafia II",
    genre: "Action Adventure",
    image: "./Images/1.jpg",
    downloadLink: "mafiaii.html",
  },
  {
    title: "Control",
    genre: "Action-adventure",
    image: "./Images/17.jpg",
    downloadLink: "control.html",
  },
  {
    title: "Far Cry 3",
    genre: "Open World",
    image: "./Images/4.jpg",
    downloadLink: "farcry3.html",
  },
  {
    title: "Metro: Last Light Redux",
    genre: "Survival Horror",
    image: "./Images/mllr3.jpg",
    downloadLink: "metrolastlightredux.html",
  },
  {
    title: "Dead Space 3",
    genre: "Survival Horror",
    image: "./Images/21.jpg",
    downloadLink: "deadspace3.html",
  },
  {
    title: "Medal of Honor Warfighter",
    genre: "First-Person Shooter",
    image: "./Images/22.jpg",
    downloadLink: "medalofhonorwarfighter.html",
  },
  {
    title: "Hitman Absolution",
    genre: "Stealth",
    image: "./Images/12.jpg",
    downloadLink: "hitmanabsolution.html",
  },
];

const gamesPerPage = 6;
const totalPages = Math.ceil(games.length / gamesPerPage);
let currentPage = 1;

function createGameCard(game) {
  return `
        <div class="game-card">
          <div class="game-card-inner">
            <div class="game-image" style="background: url('${game.image}') center/cover;">
              <div class="game-overlay"></div>
              <div class="game-content">
                <h3>${game.title}</h3>
                <p class="game-genre">${game.genre}</p>
                <a href="${game.downloadLink}" target="_blank" rel="noopener noreferrer">
                  <button class="play-btn">Download</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
}

function displayGames(page) {
  const start = (page - 1) * gamesPerPage;
  const end = start + gamesPerPage;
  const gamesToDisplay = games.slice(start, end);

  const gamesGrid = document.getElementById("gamesGrid");
  gamesGrid.innerHTML = gamesToDisplay
    .map((game) => createGameCard(game))
    .join("");
}

function createPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.className = `page-number ${i === currentPage ? "active" : ""}`;
    button.textContent = i;
    button.onclick = () => {
      currentPage = i;
      displayGames(currentPage);
      updatePaginationActive();
    };
    pagination.appendChild(button);
  }
}

function updatePaginationActive() {
  const buttons = document.querySelectorAll(".page-number");
  buttons.forEach((button, index) => {
    button.classList.toggle("active", index + 1 === currentPage);
  });
}

displayGames(currentPage);
createPagination();
