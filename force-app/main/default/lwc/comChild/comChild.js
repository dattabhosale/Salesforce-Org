import { LightningElement, api } from 'lwc';

export default class ComChild extends LightningElement {
    inputVal
    @api receivedValue

    KeyHandler(event){
        this.inputVal = event.target.value
        this.dispatchEvent( new CustomEvent('sendvalue' ,{detail : this.inputVal }) )
    }
}