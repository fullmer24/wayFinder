import { ProxyState } from "../AppState.js"
import { tripsService } from "../services/TripsService.js"


// NOTE create reservation controller ans both services




function _drawTrip() {
    let template = ''
    // let trips = ProxyState.trips.sort((a, b) => a.date - b.date)
    // console.log(template);
    ProxyState.trips.forEach(t => template += t.Template)
    // @ts-ignore
    document.getElementById('trip').innerHTML = template
}


export class TripsController {
    constructor() {
        console.log(`trip controller working`);
        ProxyState.on('trips', _drawTrip)
        ProxyState.on('reservations', _drawTrip)
        _drawTrip()
    }

    createTrip() {
        // @ts-ignore
        window.event.preventDefault()
        console.log('creating trip');

        let form = window.event.target
        let newTrip = {
            type: form.type.value,
            name: form.name.value,
            confirmation: form.confirmation.value,
            address: form.address.value,
            date: form.dispatchEvent.value,
            cost: form.cost.value,
        }
        console.log(newTrip);
        tripsService.createTrip(newTrip)



    }


}