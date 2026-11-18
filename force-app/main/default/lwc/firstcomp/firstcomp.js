import { LightningElement, track } from 'lwc';

export default class FirstComp extends LightningElement {
    userName = 'Anadi Sharma';

    @track emp = {
        id: 101,
        name: 'Anadi S',
        salary: 30000
    };

    changeName() {
        // this.userName = 'Lightning Developer';
        this.emp.name = 'Bhavna';
        console.log(JSON.stringify(this.emp));
    }
}