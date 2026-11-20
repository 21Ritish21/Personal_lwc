import { LightningElement, track } from 'lwc';

export default class EmployeeForm extends LightningElement {
    @track emp = { id: '', name: '', salary: '' };

    handleInput(e) {
        let { name, value } = e.target;
        this.emp[name] = value;
    }

    addEmployee() {
        const event = new CustomEvent('addemployee', {
            detail: { ...this.emp }
        });
        this.dispatchEvent(event);

        this.emp = { id: '', name: '', salary: '' };   
    }
}