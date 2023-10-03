import { AppState } from "../AppState.js";
import { GameNightPlayer } from "../models/GameNightPlayer.js";
import { gameNightPlayersService } from "../services/GameNightPlayersService.js";
import { setHTML } from "../utils/Writer.js";


function _drawGameNightPlayers() {
  const gameNightPlayers = AppState.gameNightPlayers

  let html = ''

  gameNightPlayers.forEach(player => html += player.GameNightPlayerCard)
  // console.log('here is the html', html)
  setHTML('GameNightPlayers', html)
}

export class GameNightController {
  constructor() {
    // console.log('Game Night Controller is loaded', AppState.gameNightPlayers)
    _drawGameNightPlayers()
  }

  increasePlayerScore(gameNightPlayerName) {
    gameNightPlayersService.increasePlayerScore(gameNightPlayerName)
    // console.log('you clicked the increase score button', gameNightPlayerName);

    _drawGameNightPlayers()
  }







}






// TODO write out function
// addPlayer()