import { LightningElement, wire } from 'lwc';
import getAccountByName from '@salesforce/apex/AccountController.getAccountByName';

export default class ApexComp extends LightningElement {
    searchName = 'Uni';

    @wire(getAccountByName, { name: '$searchName' })
    accounts;

    renderedCallback() {
        console.log(JSON.stringify(this.accounts));
    }
}