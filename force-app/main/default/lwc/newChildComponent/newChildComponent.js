import { LightningElement, api } from 'lwc';

export default class NewChildComponent extends LightningElement {
    @api msg
    entVal
    keyHandlerMethod(event){
        this.entVal = event.target.value
        this.dispatchEvent( CustomEvent('valuesendhanlder',{detail : this.entVal}) )
    }
}