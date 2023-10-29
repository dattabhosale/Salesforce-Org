import { LightningElement } from 'lwc';

export default class Fifthcomponent extends LightningElement {
    a='Salesforce'
    istrue
    aa(event){
        this.a=event.target.value
    }
    get getv(){
        return this.a=='Hello'
    }
    
}