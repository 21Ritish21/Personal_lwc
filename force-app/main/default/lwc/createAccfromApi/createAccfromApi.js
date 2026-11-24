import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AccountObj from '@salesforce/schema/Account';
import AccountName from '@salesforce/schema/Account.Name';

export default class CreateAccountThroughApi extends LightningElement {
    accountName = '';

    handleChange(e) {
        this.accountName = e.target.value;
    }

    addAccount() {
        const fields = {
            [AccountName.fieldApiName]: this.accountName
        };
        const recordInput = { apiName: AccountObj.objectApiName, fields: fields };

        createRecord(recordInput).then(res => {
            let toast = new ShowToastEvent({
                title: 'Account Created',
                message: 'Account is successfully created with Id ' + res.id,
                variant: 'success'
            });
            this.dispatchEvent(toast);
        }).catch(error => {
            let toast = new ShowToastEvent({
                title: 'Error',
                message: error.body.message,
                variant: 'error'
            });
            this.dispatchEvent(toast);
        });
    }
}