// import { Collapse } from "bootstrap"
import { Reservation } from "./Models/Reservations.js"
import { Trip } from "./Models/Trips.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Trips.js').Trip[]} */
  trips = [
    new Trip({
      id: 1,
      title: 'Disneyland',
      notes: `Fun trip`,
      // collapsed: false,
      date: '07/30/2022'
    }),
    new Trip({
      id: 2,
      title: 'Alaska',
      notes: 'Fishing trip',
      // collapsed: false,
      date: '04/12/2023'
    })
  ]

  /** @type {import('./Models/Reservations.js').Reservation[]} */
  reservations = [
    new Reservation({
      id: 10,
      type: 'Flight',
      name: 'Delta',
      address: 'BOI',
      date: '07/30/2022',
      cost: '$120',
      tripId: 1
    }),
    new Reservation({
      id: 20,
      type: 'Hotel',
      name: 'airBnB',
      address: '1099 W John Wayne Ave, Anaheim, California',
      date: '07/30/2022',
      cost: '$200',
      tripId: 1
    })
  ]
}





export const ProxyState = new Proxy(new AppState(), {
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
