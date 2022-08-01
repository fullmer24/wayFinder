import { reservationsService } from "../Services/ReservationsService.js";



export class ReservationsController {
    constructor() {
        console.log(`reservation controller loaded`);
    }

    createReservation(tripId) {
        window.event.preventDefault()
        console.log(`creating a reservation for trip`, tripId);
        let form = window.event.target
        let newReservation = {
            type: form.type.value,
            name: form.name.value,
            confirmation: form.confirmation.value,
            address: form.address.value,
            date: form.date.value,
            cost: form.cost.value,
        }
        console.log((newReservation));
        reservationsService.createReservation(newReservation)
    }

    deleteReservation(id) {
        if (window.confirm()) {
            reservationsService.deleteReservation(id)
        }
    }
}