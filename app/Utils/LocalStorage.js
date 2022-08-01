import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservations.js";
import { Trip } from "../Models/Trips.js";


export function saveState() {
    console.log(`saving`);
    let data = {
        reservations: ProxyState.reservations,
        trips: ProxyState.trips
    }
    localStorage.setItem(`wayFinder`, JSON.stringify(data))
}

export function loadState() {
    console.log(`loading`);
    let rawData = localStorage.getItem(`wayFinder`)
    if (rawData) {
        let data = JSON.parse(rawData)
        ProxyState.trips = data.trips.map(t => new Trip(t))
        ProxyState.reservations = data.reservations.map(reservation => new Reservation(reservation))
    }
}