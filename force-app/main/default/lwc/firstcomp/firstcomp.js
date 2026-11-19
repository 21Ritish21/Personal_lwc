import { LightningElement } from 'lwc';

export default class FirstComp extends LightningElement {
    employees = [
        { id: 101, name: 'Anadi Sharma', salary: 30000 },
        { id: 102, name: 'Bhavna', salary: 35000 },
        { id: 103, name: 'Ritish Mahajan', salary: 40000 },
        { id: 104, name: 'Snehal', salary: 45000 }
    ];
}