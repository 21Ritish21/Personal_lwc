import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/AccountController.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ApexComp4 extends LightningElement {
    @track account = { name: '', number: '' };
    errName = null;

    handleInput(e) {
        let { name, value } = e.target;
        this.account[name] = value;
    }

    addAccount() {
        this.errName = null;

        createAccount({ name: this.account.name, accountnumber: this.account.number })
            .then(resp => {
                console.log(resp[0].Id + ' got created.');
                let toast = new ShowToastEvent({
                    title: 'Account Created',
                    message: 'Account is successfully created with Id ' + resp[0].Id,
                    variant: 'success'
                });
                this.dispatchEvent(toast);
            })
            .catch(error => {
                let err = error.body.message;
                this.errName = err.includes('Name') && err.includes('REQUIRED') ? 'Name is mandatory' : null;
                console.log(this.errName);
                console.log(err);
            });
    }
}