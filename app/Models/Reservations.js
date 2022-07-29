import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Reservation {
    constructor(data) {
        this.id = data.id || generateId
        this.type = data.type
        this.name = data.name
        this.address = data.address
        this.date = data.date
        this.cost = data.cost || 0
        this.tripId = data.tripIds
    }
}