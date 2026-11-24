import { LightningElement } from 'lwc';
import AccountObject from '@salesforce/schema/Account';
import AccountName from '@salesforce/schema/Account.Name';
import AccountPhone from '@salesforce/schema/Account.Phone';
import AccountIndustry from '@salesforce/schema/Account.Industry';
import AccountType from '@salesforce/schema/Account.Type';

export default class LdsViewForm extends LightningElement {
    recordId = '001aj00004KmOyXAAV'; 
    objectApiName = AccountObject;
    fields = [AccountName, AccountPhone, AccountIndustry, AccountType];
}