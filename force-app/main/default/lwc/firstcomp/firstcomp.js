import { LightningElement } from 'lwc';

export default class FirstComp extends LightningElement {
    userName = 'Anadi Sharma';

    changeName() {
        this.userName = 'Lightning Developer';
    }
}