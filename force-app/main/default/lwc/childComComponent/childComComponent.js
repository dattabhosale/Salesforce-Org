import { LightningElement } from 'lwc';

export default class ChildComComponent extends LightningElement {
    
    val
    keyHandler(event){
        this.val = event.target.value

        this.dispatchEvent( new CustomEvent('close' , { detail:this.val } ))

    }
}