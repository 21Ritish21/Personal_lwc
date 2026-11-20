import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import mycomm from '@salesforce/messageChannel/mycomm__c';

export default class PubComp extends LightningElement {
    @wire(MessageContext) context;

    constructor() {
        super();
        this.message = 'This message is published from Publisher Component';
    }

    publishData() {
        publish(this.context, mycomm, { data: this.message });
    }
}