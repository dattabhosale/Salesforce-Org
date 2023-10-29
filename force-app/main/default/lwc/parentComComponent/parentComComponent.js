import { LightningElement } from 'lwc';

export default class ParentComComponent extends LightningElement {
    
    vari

    handleChild(event){
        this.vari = event.detail

    }
}