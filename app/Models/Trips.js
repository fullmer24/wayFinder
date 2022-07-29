import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Trip {
    constructor(data) {
        this.id = data.id || generateId
        this.title = data.title
        this.notes = data.notes
        this.color = data.color
        this.collapsed = data.collapsed || false
        this.date = new Date(data.date)
    }
}