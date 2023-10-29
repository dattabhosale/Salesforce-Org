import { LightningElement } from 'lwc';

export default class Firstcomponent11 extends LightningElement {
    Name="Datta Bhosale"

    changehandler(event){
        this.Name=event.target.value
        
    }
}
