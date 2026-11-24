import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountRecordEditForm extends LightningElement {
    @api recordId;

    accountSaved() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account record has been saved',
                variant: 'success'
            })
        );
    }
}