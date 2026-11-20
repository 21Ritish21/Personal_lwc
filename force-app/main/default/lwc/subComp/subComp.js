import { LightningElement, wire } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import mycomm from '@salesforce/messageChannel/mycomm__c';

export default class SubComp extends LightningElement {
    @wire(MessageContext) context;

    subscription = null;
    receivedMessage = '';

    connectedCallback() {
        this.subscription = subscribe(this.context, mycomm, (message) => {
            this.receivedMessage = message.data;
        });
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}