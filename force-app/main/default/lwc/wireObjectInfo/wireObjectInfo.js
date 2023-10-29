import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account' 
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/schema/User.Id';
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields=[NAME_FIELD,EMAIL_FIELD]
export default class WireObjectInfo extends LightningElement {

    defaultRecord
    apiName
    allFields
    @wire( getObjectInfo , {objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            this.defaultRecord = data.defaultRecordTypeId
            this.apiName = data.apiName
        }
        if(error){

        }
    } 

    @wire( getRecord , {recordId:'$0052w00000FTAaTAAX' , fields })
    showFields({data,error}){
        if(data){
            this.allFields = data.fields
        }
        if(error){
            console.error(error);
        }
    }
}