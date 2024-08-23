import { makeAutoObservable } from 'mobx';

class TelegramStore {
  tg = null;

  constructor() {
    this.tg = window.Telegram?.WebApp;
    makeAutoObservable(this);
  }
}

const telegramStore = new TelegramStore();
export default telegramStore;