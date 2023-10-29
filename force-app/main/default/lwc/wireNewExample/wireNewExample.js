import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import TYPE_FIELD from '@salesforce/schema/Account.Type';
export default class WireNewExample extends LightningElement {
    typeOptions=[];
    selectedType='';
    
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objAcc

    @wire(getPicklistValues,{recordTypeId:'$objAcc.data.defaultRecordTypeId',fieldApiName:TYPE_FIELD})
    wireFunc({data,error}){
        if(data){
            console.log(data)
            this.typeOptions = [...data.values.map(item=>({label:item.label,value:item.value}))];
        }
    }

    handleChange(event){
        this.selectedType = event.target.value;
    }
}