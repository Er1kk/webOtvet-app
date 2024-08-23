import { makeAutoObservable } from "mobx";

class UserData {
    id = 1;
    tgId = 274664642;
    username = 'er1kk';
    avatar = 'https://app.shamangame.fun/uploads/avatar/274664642_avatar.jpg';

    balanceRub = 100;
    balanceBonus = 14000;

    tg = window.Telegram?.WebApp;

    constructor() {
        makeAutoObservable(this);
    }

}

const userData = new UserData();
export default userData;