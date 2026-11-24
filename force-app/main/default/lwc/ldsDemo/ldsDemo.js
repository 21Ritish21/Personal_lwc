import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACCOUNT_INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class LdsDemo extends LightningElement {
    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [ACCOUNT_NAME_FIELD, ACCOUNT_PHONE_FIELD, ACCOUNT_INDUSTRY_FIELD, ACCOUNT_TYPE_FIELD]
    })
    account;

    get name() {
        return getFieldValue(this.account.data, ACCOUNT_NAME_FIELD);
    }
    get phone() {
        return getFieldValue(this.account.data, ACCOUNT_PHONE_FIELD);
    }
    get industry() {
        return getFieldValue(this.account.data, ACCOUNT_INDUSTRY_FIELD);
    }
    get type() {
        return getFieldValue(this.account.data, ACCOUNT_TYPE_FIELD);
    }
}