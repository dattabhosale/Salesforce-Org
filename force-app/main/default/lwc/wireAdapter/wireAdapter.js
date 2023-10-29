import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const allFields = [NAME_FIELD , EMAIL_FIELD ]
export default class WireAdapter extends LightningElement {
    name
    email
    tese
    @wire( getRecord , {recordId:'0052w00000FTAaTAAX' , fields:allFields})
    record({data,error}){
        if(data){
            this.tese=data.fields
        }
        if(error){
            
        }
    }

}