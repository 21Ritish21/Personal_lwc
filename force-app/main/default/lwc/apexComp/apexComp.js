import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';

export default class ApexComp extends LightningElement {
    @wire(getAllAccounts)
    accounts;

    renderedCallback() {
        console.log(JSON.stringify(this.accounts));
    }
}