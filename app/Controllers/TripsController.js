import { ProxyState } from "../AppState.js";
import { tripsService } from "../services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


function _drawTrip() {
    let template = ''
    let trips = ProxyState.trips.sort((a, b) => a.date - b.date)
    console.log(trips);
    trips.forEach(t => template += t.Template)
    document.getElementById('trip').innerHTML = template
}


export class TripsController {
    constructor() {
        console.log(`trip controller working`);
        ProxyState.on('trips', _drawTrip)
        ProxyState.on('reservations', _drawTrip)
        ProxyState.on('trips', saveState)
        ProxyState.on('reservations', saveState)
        loadState()
        _drawTrip()
    }

    createTrip() {
        window.event.preventDefault()
        console.log('creating trip');

        let form = window.event.target
        let newTrip = {
            title: form.title.value,
            date: form.date.value,
            notes: form.notes.value,
        }
        console.log(newTrip);
        tripsService.createTrip(newTrip)
        Pop.toast('Trip Created', 'success')
    }

    async deleteTrip(id) {
        if (await Pop.confirm()) {
            console.log(`deleting trip`, id);
            tripsService.deleteTrip(id)
        }
    }

    editTrip(id) {
        console.log(`editing`, id);
        console.log(window.event.target.value);
        let newText = window.event.target.value
        tripsService.editTrip(id, newText)
    }


}