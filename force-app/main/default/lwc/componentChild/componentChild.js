import { LightningElement, api } from 'lwc';

export default class ComponentChild extends LightningElement {
    val = 70
    @api  variable
    @api resetval(){
        this.val=40
    }
    onchanehandler(event){
        this.val=event.target.value
    }
}