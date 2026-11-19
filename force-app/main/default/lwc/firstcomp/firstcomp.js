import { LightningElement, track } from 'lwc';

export default class FirstComp extends LightningElement {
    userName = 'Anadi Sharma';

    @track emp = {
        id: '',
        name: '',
        salary: ''
    };

    handleInput(e) {
        let { name, value } = e.target;
        this.emp[name] = value;

        console.log(JSON.stringify(this.emp));
    }

    changeName() {
        this.emp.name = 'Bhavna';
        console.log(JSON.stringify(this.emp));
    }
}