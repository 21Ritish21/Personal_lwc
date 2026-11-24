import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/AccountController.createAccount';
import updateAccount from '@salesforce/apex/AccountController.updateAccount';
import deleteAccount from '@salesforce/apex/AccountController.deleteAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ApexComp extends LightningElement {
    @track account = { id: '', name: '', number: '' };

    handleInput(e) {
        let { name, value } = e.target;
        this.account[name] = value;
    }

    addAccount() {
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
            console.log(err);
            let toast = new ShowToastEvent({
                title: 'Error',
                message: err,
                variant: 'error'
            });
            this.dispatchEvent(toast);
        });
}

    updateAcc() {
        updateAccount({ recordId: this.account.id, name: this.account.name, accountnumber: this.account.number })
            .then(resp => {
                let toast = new ShowToastEvent({
                    title: 'Account Updated',
                    message: 'Account is successfully updated with Id ' + resp.Id,
                    variant: 'success'
                });
                this.dispatchEvent(toast);
            })
            .catch(error => {
                let err = error.body.message;
                console.log(err);
                let toast = new ShowToastEvent({
                    title: 'Error',
                    message: err,
                    variant: 'error'
                });
                this.dispatchEvent(toast);
            });
    }

    deleteAcc() {
        deleteAccount({ recordId: this.account.id })
            .then(() => {
                let toast = new ShowToastEvent({
                    title: 'Account Deleted',
                    message: 'Account is successfully deleted',
                    variant: 'success'
                });
                this.dispatchEvent(toast);
                this.account = { id: '', name: '', number: '' };
            })
            .catch(error => {
                let err = error.body.message;
                console.log(err);
                let toast = new ShowToastEvent({
                    title: 'Error',
                    message: err,
                    variant: 'error'
                });
                this.dispatchEvent(toast);
            });
    }
}