import { LightningElement, wire } from 'lwc';
import getName from '@salesforce/apex/getNameFromPincode.getNameFromPincodeIn';
export default class IntegrationCall extends LightningElement {
    input;
    receivedName;
    isVisible=false;
    onChangeHandler(event){
        this.input=event.target.value;
    }

        @wire(getName,{input :'$input'})
        wireFun({data,error}){
            if(data){
                console.log(data);
                this.receivedName = data;
            }
        }

        handleClick(event){
            this.isVisible=true;
        }
        handleClick1(){
            this.isVisible=false;
        }
    
}