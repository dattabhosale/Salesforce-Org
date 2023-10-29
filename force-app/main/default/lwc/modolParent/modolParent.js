import { LightningElement } from 'lwc';

export default class ModolParent extends LightningElement {
    msg
    showModol=false
    show(){
        this.showModol=true
    }
    parentclosehandler(event){
        this.showModol=false
        this.msg = event.detail.msg
    }

}