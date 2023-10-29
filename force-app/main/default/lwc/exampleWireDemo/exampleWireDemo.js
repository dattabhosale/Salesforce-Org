import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
import userId from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
export default class ExampleWireDemo extends LightningElement {
    recId=userId;
    userDetails
    @wire(getRecord , { recordId:'$recId' , fields:[ NAME_FIELD,EMAIL_FIELD]} )
    getPropert({data,error}){
        if(data){
            this.userDetails = data.fields
        }
    }
}