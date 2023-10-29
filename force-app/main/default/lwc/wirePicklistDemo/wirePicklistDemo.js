import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import INDUSTY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class WirePicklistDemo extends LightningElement {

    selectedIndustry = '';
    industryOption=[]
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectA

    @wire(getPicklistValues,{recordTypeId:'$objectA.data.defaultRecordTypeId',fieldApiName:INDUSTY_FIELD})
    wireFun({data,error}){
        if(data){
            console.log(data)
            this.industryOption = [...this.generatePicklist(data)]

        }

    }

    

    generatePicklist(data){
       return data.values.map(item=> ({label:item.label , value:item.value}))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

}