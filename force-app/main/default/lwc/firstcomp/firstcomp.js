import { LightningElement, track } from 'lwc';

export default class FirstComp extends LightningElement {
    @track emp = {
        id: '',
        name: '',
        salary: ''
    };

    @track employees = [
        { id: 101, name: 'Anadi Sharma', salary: 30000 },
        { id: 102, name: 'Bhavna', salary: 35000 }
    ];

    handleInput(e) {
        let { name, value } = e.target;
        this.emp[name] = value;
    }

    addEmployee() {
        this.employees.push({ ...this.emp });
        this.emp = { id: '', name: '', salary: '' };

        console.log(JSON.stringify(this.employees));
    }
}