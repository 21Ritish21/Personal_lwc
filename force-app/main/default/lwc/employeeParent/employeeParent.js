import { LightningElement } from 'lwc';

export default class EmployeeParent extends LightningElement {
    employees = [
        { id: 101, name: 'Anadi Sharma', salary: 30000 },
        { id: 102, name: 'Bhavna', salary: 35000 }
    ];

    handleAdd(e) {
        this.employees = [...this.employees, e.detail];
    }
}