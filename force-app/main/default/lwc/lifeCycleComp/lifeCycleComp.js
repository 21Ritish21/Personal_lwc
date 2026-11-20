import { LightningElement } from 'lwc';

export default class LifeCycleComp extends LightningElement {
    num;

    constructor() {
        super();
        this.num = 0;
        console.log('Constructor called');
    }

    connectedCallback() {
        console.log('connectedCallback called');
    }

    renderedCallback() {
        console.log('renderedCallback called');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback called');
    }

    changeData() {
        this.num++;
        console.log('Data changed:', this.num);
    }
}