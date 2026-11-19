import { LightningElement, api } from 'lwc';

export default class ChildComp1 extends LightningElement {
    @api name = '';   // properties are private by default, @api makes it public
}