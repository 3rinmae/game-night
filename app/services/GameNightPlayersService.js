import { AppState } from "../AppState.js";
import { GameNightPlayer } from "../models/GameNightPlayer.js";



class GameNightPlayersService {
  createGameNightPlayer(gameNightPlayerData) {
    const newGameNightPlayer = new GameNightPlayer(gameNightPlayerData.name, gameNightPlayerData.imgUrl)
    // console.log('here is your class model', newGameNightPlayer)
    AppState.gameNightPlayers.push(newGameNightPlayer)
  }

  increasePlayerScore(gameNightPlayerName) {
    const foundPlayer = AppState.gameNightPlayers.find(player => player.name == gameNightPlayerName)
    foundPlayer.score++
    // console.log('found player', foundPlayer)
  }

}

export const gameNightPlayersService = new GameNightPlayersService()