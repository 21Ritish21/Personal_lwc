import { LightningElement, api, wire } from 'lwc';
import getAccountById from '@salesforce/apex/AccountController.getAccountById';

export default class AccountRecordComp extends LightningElement {
    @api recordId;
    account;
    error;

    @wire(getAccountById, { recordId: '$recordId' })
    getAccount({ data, error }) {
        if (data) {
            this.account = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.account = undefined;
        }
    }
}