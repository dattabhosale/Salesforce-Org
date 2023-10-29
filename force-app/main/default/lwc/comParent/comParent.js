import { LightningElement } from 'lwc';

export default class ComParent extends LightningElement {

    disp
    examp='HELLO FROM PARENT COMPONENT'
    receivedEvent(event){
        this.disp = event.detail
    }
}