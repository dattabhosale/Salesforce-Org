import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class WirePicklistDemofirst extends LightningElement {

    selectedValue=''
    typeOptions=[]

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objAccount
    @wire(getPicklistValues,{recordTypeId:'$objAccount.data.defaultRecordTypeId',fieldApiName:[TYPE_FIELD,INDUSTRY_FIELD]})
    wireFunc({data,error}){
        if(data){
            console.log(data)
            if(data.value.name == 'type'){
                this.typeOptions = [...this.generatePicklist(data)]
            }
            

        }
        if(error){
            console.log(error)
        }
    }

    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
        
    }
    

    handleChange(event){
        this.selectedValue = event.target.value

    }
}