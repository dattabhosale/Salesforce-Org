import { LightningElement, wire } from 'lwc';
import apexClassMethod from '@salesforce/apex/accountDataClass.filterMethod';
export default class ApexWireDemo extends LightningElement {
    val = '';
    @wire(apexClassMethod,{typeValue:'$val'})
    accList

    get options(){
        return [
            {label:'Customer - Channel', value:'Customer - Channel'},
            {label:'Prospect',value:'Prospect'}
        ]
    }
    handleChange(event){
        this.val = event.target.value
    }
}