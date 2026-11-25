import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class CreateAccountThroughApi extends LightningElement {
    accountName = '';
    selectedIndustry;
    industryOptions = [];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$accountInfo.data.defaultRecordTypeId',
        fieldApiName: INDUSTRY_FIELD
    })
    industryPicklistValues({ data }) {
        if (data) {
            this.industryOptions = data.values.map((industry) => ({
                label: industry.label,
                value: industry.value
            }));
        }
    }

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    addAccount() {
        const fields = {};
        fields[ACCOUNT_NAME_FIELD.fieldApiName] = this.accountName;
        fields[INDUSTRY_FIELD.fieldApiName] = this.selectedIndustry;

        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields: fields };

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