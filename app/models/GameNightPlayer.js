import { GameNightController } from "../controllers/GameNightController.js";

export class GameNightPlayer {
  constructor(name, imgUrl) {
    this.name = name;
    this.playerImg = imgUrl
    this.score = 0;
  }


  get GameNightPlayerCard() {
    return `
    <div class="col-12 col-md-4">
      <div class="bg-secondary">
        <img src="${this.playerImg}" alt="${this.name}" class="img-fluid">
          <div class="p-3">
            <p class="fs-2">${this.name}</p>
            <p class="fs-3">Score: ${this.score}</p>
            <div>
              <button onclick="" class="btn btn-danger">-</button>
              <button onclick="" class="btn btn-success">+</button>
            </div>

          </div>

      </div>
    </div>
    `
  }

}