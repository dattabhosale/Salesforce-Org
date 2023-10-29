import { LightningElement } from 'lwc';

export default class ChildComFirst extends LightningElement {
    val

    keyHandler(event){
        this.val = event.target.value
        this.dispatchEvent( new  CustomEvent( 'updatevalue' , {detail : this.val}))
    }
}