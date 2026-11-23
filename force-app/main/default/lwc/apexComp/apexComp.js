import { LightningElement } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';

export default class ApexComp extends LightningElement {
    accounts = [];

    getAccounts() {      // BUTTON CLICK
        // JS PROMISE - RESOLVE, REJECT
        getAllAccounts().then(res => {
            this.accounts = res;
        }).catch(err => {
            console.log(JSON.stringify(err));
        });
    }

    // connectedCallback(){
    //     this.getAccounts();
    // }
}