import { LightningElement } from 'lwc';
import AccountObject from '@salesforce/schema/Account';
import AccountName from '@salesforce/schema/Account.Name';
import AccountPhone from '@salesforce/schema/Account.Phone';
import AccountIndustry from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LdsRecordForm extends LightningElement {
    objectApiName = AccountObject;
    fields = [AccountName, AccountPhone, AccountIndustry];

    accountCreated() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account record has been created',
                variant: 'success'
            })
        );
    }
}