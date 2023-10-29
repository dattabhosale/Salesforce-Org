import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { LightningElement, wire } from 'lwc';

export default class WireMultiPicklistDemo extends LightningElement {
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    acc
    selectedType=''
    typeOptions=[]
    selectedIndustry=''
    industryOptions=[]
    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$acc.data.defaultRecordTypeId'})
    wireF({data,error}){
        if(data){
            console.log(data)
            //this.typeOptions = [...this.generatePick(data.picklistFieldValues.Type)]
            this.typeOptions = data.picklistFieldValues.Type.values.map(item=>({label:item.label,value:item.value}))
            this.industryOptions = data.picklistFieldValues.Industry.values.map(item=>({label:item.label,value:item.value}))
            //this.industryOptions = [...this.generatePick(data.picklistFieldValues.Industry)]
        }
    }


    
    generatePick(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
    handleChange(event){
        const {name,value}=event.target
        if(name ==='type'){
            this.selectedType = value
        }else if(name ==='industry'){
            this.selectedIndustry = value
        }
    }
}