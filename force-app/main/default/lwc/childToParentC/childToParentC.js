import { LightningElement,api } from 'lwc';

export default class ChildToParentC extends LightningElement {
    vari='hello'
    @api cData

    onkeyhandler(event){
        this.vari=event.target.value
        this.dispatchEvent( new CustomEvent('keyevent' ,{detail :{msg:this.vari}}))
    }

    
}