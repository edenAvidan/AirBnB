import {makeAutoObservable} from 'mobx';
import {stayService} from '../services/stay-service';

export function createStayStore(stays) {
  return makeAutoObservable({
    stays,
    filterBy: {text: ''},
    // loggedinUser: null,

    getStay(id) {
      return stays.find((stay) => stay._id === id);
    },
    filteredStays() {
      return stays;
    },
    removeStay(id) {
      stays = stays.filter((stay) => stay._id !== id);
    },
    AddStay(stay) {
      stays.push(stay);
    },
    async setStays() {
      const stayss = await stayService._loadStays();
      stays = stayss;
    },
    // setFilter(filter) {
    //   filterBy = {
    //     ...filterBy,
    //     filter,
    //   };
    // },
    filterStays() {
      return stays;
    },
  });
}
