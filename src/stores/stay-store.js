import { stayService } from "../services/stay-service";

export function createStayStore() {
    return {
        stays: stayService._loadStays(),
        // loggedinUser: null,

        getStay(id) {
            return this.stays.find(stay => stay._id === id);
        },
        getStays() {
            return this.stays;
        },
        removeStay(id) {
            this.stays = this.stays.filter(stay => stay._id !== id);
        },
        AddStay(stay) {
            this.stays.push(stay);
        },
    }
}