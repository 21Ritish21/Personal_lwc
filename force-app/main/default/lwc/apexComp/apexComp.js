import { LightningElement, wire } from 'lwc';
import getAccountByName from '@salesforce/apex/AccountController.getAccountByName';

export default class ApexComp extends LightningElement {
    searchName = 'Uni';
    accounts = null;
    err = null;

    @wire(getAccountByName, { name: '$searchName' })
    getAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
            this.err = null;
        } else if (error) {
            this.err = error;
            this.accounts = null;
            console.log(JSON.stringify(error));
        }
    }
}