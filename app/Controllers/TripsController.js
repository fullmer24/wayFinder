import { ProxyState } from "../AppState.js"






function _drawTrip() {
    let template = ''
    let trips = ProxyState.trips.sort((a, b) => a.date - b.date)
    console.log(template);
    trips.forEach(t => template += t.Template)
    document.getElementById('trip').innerHTML = template
}
// _drawTrip()


export class TripsController {
    constructor() {
        console.log(`trip contoller working`);
        ProxyState.on('trips', _drawTrip)
        ProxyState.on('reservations', _drawTrip)
        _drawTrip()
    }
}