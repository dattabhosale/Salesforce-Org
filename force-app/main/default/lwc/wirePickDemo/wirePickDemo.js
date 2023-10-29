import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class WirePickDemo extends LightningElement {

    typeOptions=[]
    selectedType = '';
    selectedIndustry = '';
    industryOptions=[];
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    aObj

    @wire(getPicklistValues,{recordTypeId:'$aObj.data.defaultRecordTypeId',fieldApiName:TYPE_FIELD})
    pickFun({data,error}){
        if(data){
            this.typeOptions=[...this.generatePicklist(data)]
        }

    }
    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }

    handleChange(event) {
        this.selectedType = event.detail.value;
    }

    @wire(getPicklistValues,{recordTypeId:'$aObj.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    induFun({data,error}){
        if(data){
            this.industryOptions = [...this.generatePicklist(data)]
        }
    }

    handleIndustryChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}