import { LightningElement, api } from 'lwc';

export default class ModolChild extends LightningElement {
    @api vari
    closehandler(){
        this.dispatchEvent(new CustomEvent('close',{detail:{
            msg:'Hello From Child'
        }}));
    }
}