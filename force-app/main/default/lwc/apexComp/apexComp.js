import { LightningElement } from 'lwc';
import getAccountByName from '@salesforce/apex/AccountController.getAccountByName';

export default class ApexComp extends LightningElement {
    accounts = [];
    searchName = '';

    handleChange(e) {
        this.searchName = e.target.value;
    }

    getAccounts() {      // BUTTON CLICK
        getAccountByName({ name: this.searchName }).then(res => {
            this.accounts = res;
        }).catch(err => {
            console.log(JSON.stringify(err));
        });
    }
}