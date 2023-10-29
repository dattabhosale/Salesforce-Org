import { LightningElement } from 'lwc';

export default class ParentFirstCompoent extends LightningElement {
    userDetails
    ms
    abc
    receiveHandler(event){
        this.ms = event.detail.msg
        this.abc = event.detail.vari

    }
}