import { LightningElement } from 'lwc';

export default class SloatChild extends LightningElement {
    changeslot(){
        let ele = this.template.querySelector('.slds-card__footer')
        if(ele){
            ele.classList.remove('slds-hide')
        }
    }
}