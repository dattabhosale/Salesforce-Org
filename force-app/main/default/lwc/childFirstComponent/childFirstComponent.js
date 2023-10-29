import { LightningElement } from 'lwc';

export default class ChildFirstComponent extends LightningElement {
    msg
    val
    inputHandler(event){
        this.val = event.target.value
        this.dispatchEvent( CustomEvent( 'sendhandler' , { detail : { msg:this.val, vari:'dispatch method'} } ) )
    }
}