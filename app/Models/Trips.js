import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Trip {
    constructor(data) {
        this.id = data.id || generateId
        this.title = data.title
        this.notes = data.notes
        this.collapsed = data.collapsed || false
        this.date = new Date(data.date)
    }



    // NOTE add delete button
    get Template() {
        return `
        <div class="col-12 bg-dark text-light">
            <div">
                <h2 class="p-2">${this.title} | ${this.date.toLocaleDateString('en-US')}</h2>
            </div>
        <div class="row p-2 m-3">
            <div class="col-2 col-md-2 text-center">
                <h4 class="p-1">Type</h4>
            </div>
            <div class="col-5 col-md-2 text-center">
                <h4 class="p-1">Name</h4>
            </div>
            <div class="col-5 col-md-2 text-center">
                <h4 class="p-1">Confirmation</h4>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h4 class="p-1">Address</h4>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h4 class="p-1">Date</h4>
            </div>
            <div class="col-12 col-md-2 text-end">
                <h4 class="p-1">Cost</h4>                
            </div>
        </div>
        <div class="row">
        ${this.Reservations}
        </div>
        <div class="row p-2">
            <label class="col-6 form-label">Notes</label>                                
            <textarea rows="2" class="form-label p-2 m-3" onblur="app.tripsController.editTrip('${this.id}')">${this.notes}</textarea>
        </div>    
        
        
        
    

        

   
    `
    }

    get Reservations() {
        let template = ''
        let reservations = ProxyState.reservations.filter(reservation => reservation.tripId == this.id)
        reservations.forEach(reservation => template += reservation.Template)
        if (template) {
            return template
        } else {
            return `<p> no reservations yet </p>`
        }
    }


}

