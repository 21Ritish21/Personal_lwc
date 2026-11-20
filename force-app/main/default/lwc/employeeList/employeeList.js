import { LightningElement, api } from 'lwc';

export default class EmployeeList extends LightningElement {
    @api employees = [];  
}