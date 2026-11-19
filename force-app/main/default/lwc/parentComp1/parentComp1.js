import { LightningElement } from 'lwc';

export default class ParentComp1 extends LightningElement {
    val = '';

    getMessage(e) {
        this.val = e.detail;
    }
    //recieves it
}