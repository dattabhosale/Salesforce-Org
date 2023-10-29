import { LightningElement } from 'lwc';

export default class NewParentComponent extends LightningElement {
    childVal
    receviedSendValue(event){
        this.childVal= event.detail
    }
}