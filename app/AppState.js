import { GameNightPlayer } from "./models/GameNightPlayer.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  gameNightPlayers = [
    new GameNightPlayer('Erin', 'https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xvdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'),
    new GameNightPlayer('Trent', 'https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFjY29vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')]


  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
