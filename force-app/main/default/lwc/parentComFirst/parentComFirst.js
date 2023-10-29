import { LightningElement } from 'lwc';

export default class ParentComFirst extends LightningElement {
    val

    updateHandler(event){
        this.val = event.detail
    }
}