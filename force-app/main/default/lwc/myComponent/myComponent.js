import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    dynamic = 'Hello'
    onchangehandler(event){
        this.dynamic = event.target.value
    }
    get istrue(){
        if(this.dynamic === 'ABC'){
            return true
        }

    }

    obj={
        dynamicvalue : 'Dee',
        price : 500
    }

    onchangehandler1(event){
        this.obj={...this.obj,dynamicvalue : event.target.value }
    }

    arr=['Hello','How','Are','You']
}