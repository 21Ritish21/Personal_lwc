import { LightningElement, api } from 'lwc';

export default class ChildComp1 extends LightningElement {
    @api name = '';

    send() {
        const event = new CustomEvent('sendmessage', {
            detail: 'Hello Parent From : ' + this.name
        });
        this.dispatchEvent(event);
    } 
    //creates n fires event
}