import { generateId } from "../Utils/generateId.js";


export class Reservation {
    constructor(data) {
        this.id = data.id || generateId()
        this.type = data.type
        this.name = data.name
        this.address = data.address
        this.date = data.date
        this.cost = data.cost || 0
        this.tripId = data.tripId
    }

    get Template() {
        return `
        <section class="row pt-3 elevation-4 m-1 bg-primary">
            <div id="reservations" class="col-2 col-md-2 text-center">
                <p class="p-1" id="type">${this.type}</p>
            </div>
            <div class="col-5 col-md-2 text-center">
                <p class="p-1" id="name">${this.name}</p>
            </div>
            <div class="col-5 col-md-2 text-center">
                <p class="p-1" id="confimation">${this.id}</p>
            </div>
            <div class="col-6 col-md-2 text-center">
                <p class="p-1" id="address">${this.address}</p>
            </div>
            <div class="col-6 col-md-2 text-center">
                <p class="p-1" id="date">${this.date}</p>
            </div>
            <div class="col-12 col-md-2 text-end">
                <p class="p-1" id="cost">$${this.cost}</p>
            </div>
            <div>
            <i class="mdi mdi-delete-forever selectable px-2" onclick="app.ReservationsController.deleteReservation('${this.id}')"></i>
            </div>
        </section>
        `
    }
}