import { LightningElement } from 'lwc';

export default class SimpleComParent extends LightningElement {

    reVal
    course

    receivedValue(event){
        this.reVal = event.detail
        this.course = event.cou

    }
}