import { makeAutoObservable, runInAction } from 'mobx';
import { stayService } from '../services/stay-service';

const stayStore = () =>
  makeAutoObservable({
    stays: null,
    filterBy: { text: '' },
    async setStays() {
      const currStays = await stayService.loadStays();
      runInAction(() => {
        this.stays = currStays;
      });
    },
    getStay(id) {
      return this.stays.find((stay) => stay._id === id);
    },
  });

export default stayStore;
