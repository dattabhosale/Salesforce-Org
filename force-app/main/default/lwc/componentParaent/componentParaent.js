import { LightningElement } from 'lwc';

export default class ComponentParaent extends LightningElement {
    handleClick(event){
        this.template.querySelector('c-component-child').resetval()
    }
}