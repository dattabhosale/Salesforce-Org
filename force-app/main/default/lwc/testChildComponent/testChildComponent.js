import { LightningElement, api } from 'lwc';

export default class TestChildComponent extends LightningElement {
    @api msg
    @api visible
    @api num
    @api course
    val
    handlerinput(event){
        this.val = event.target.value
        this.dispatchEvent( new CustomEvent('inputvaluechange',{detail:this.val}) )
    }
}