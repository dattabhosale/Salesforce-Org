import { LightningElement } from 'lwc';

export default class FourthComponent extends LightningElement {
    a
    isvisble
    clickhandler(event){
        this.a=event.target.value
    }

    click1(event){
        this.isvisble=true
    }
}