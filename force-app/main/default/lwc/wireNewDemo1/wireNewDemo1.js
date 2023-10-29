import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class WireNewDemo1 extends LightningElement {

    selectedType;
    typeOptions=[];
    selectedIndustry;
    industryOptions;

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objA

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$objA.data.defaultRecordTypeId'})
    wirePick({data,error}){
        if(data){
            console.log(data);
            this.typeOptions = [...this.generatePicklistValue(data.picklistFieldValues.Type)];
            this.industryOptions = this.generatePicklistValue(data.picklistFieldValues.Industry);
        }
    }

    generatePicklistValue(data){
        return data.values.map(it=>({label:it.label,value:it.value}));
    }

    handleChange(event){
        const {name,value}=event.target
        if(name==='type'){
             this.selectedType = value
        }
        if(name==='industry'){
            this.selectedIndustry = value
        }
    }
}