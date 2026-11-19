import { LightningElement, track } from 'lwc';

export default class ContactForm extends LightningElement {
    @track contact = {
        name: '',
        mobile: '',
        email: '',
        gender: '',
        available: false
    };

    message = '';
    isSubmitted = false;

    genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' }
    ];

    handleChange(e) {
        let { name, value, type, checked } = e.target;
        this.contact[name] = type === 'checkbox' ? checked : value;
    }

    handleSubmit() {
        let title = '';
        if (this.contact.gender === 'Male') {
            title = 'Mr.';
        } else if (this.contact.gender === 'Female') {
            title = 'Ms.';
        }

        this.message = 'Welcome ' + title + ' ' + this.contact.name;
        this.isSubmitted = true;

        console.log(this.message);
        console.log(JSON.stringify(this.contact));
    }
}