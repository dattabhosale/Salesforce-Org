import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue'

export default class WireGetFieldValueDemo extends LightningElement {

    @api recordId
    nameVal
    annVal
    annValWithD
    typeF
    ratingF
    @wire(getRecord,{recordId:'$recordId',fields:[ACCOUNT_NAME,ACCOUNT_REVENUE]})
    recFun({data,error}){
        if(data){
            this.nameVal = getFieldValue(data,ACCOUNT_NAME)
            this.annVal = getFieldValue(data,ACCOUNT_REVENUE)
            this.annValWithD = getFieldDisplayValue(data,ACCOUNT_REVENUE)
        }
    }
    @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
    recordFun({data,error}){
        if(data){
            console.log(data)
            this.ratingF = data.fields.Rating.displayValue
            this.typeF = data.fields.Type.displayValue            
        }
    }
}