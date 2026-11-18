import { LightningElement } from 'lwc';

export default class FirstComp extends LightningElement {
    employees = [
        { id: 101, name: 'Anadi Sharma', salary: 30000 },
        { id: 102, name: 'Bhavna', salary: 35000 },
        { id: 103, name: 'Ritish Mahajan', salary: 40000 },
        { id: 104, name: 'Snehal', salary: 45000 }
    ];

    currentIndex = 0;

    expectedSalary;          // what the user is typing
    submittedSalary;         // what was submitted
    isSubmitted = false;     // controls whether the message shows

    get currentEmp() {
        return this.employees[this.currentIndex];
    }

    changeName() {
        this.currentIndex = (this.currentIndex + 1) % this.employees.length;
    }

    resetName() {
        this.currentIndex = 0;
    }

    handleSalaryChange(event) {
        this.expectedSalary = event.target.value;
        this.isSubmitted = false;     // hide old message while typing again
    }

    handleSubmit() {
        this.submittedSalary = this.expectedSalary;
        this.isSubmitted = true;
    }
}