import { LightningElement } from 'lwc';

export default class SimpleComChild extends LightningElement {

    val
    name='Child Compone'
    

    keyHandler(event){
        this.val = event.target.value

        this.dispatchEvent( new CustomEvent('inputvalue',{detail : this.val,cou:this.name}))
    }
}