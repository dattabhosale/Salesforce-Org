import { LightningElement, wire } from 'lwc';
import id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import FIELD_NAME from '@salesforce/schema/User.Name'
import FIELD_EMAIL from '@salesforce/schema/User.Email'
const fields=[FIELD_NAME,FIELD_EMAIL]
export default class WireDemo extends LightningElement {
    userId = id;
    
    datain
    //'0052w00000FTAaTAAX'

    @wire( getRecord , {recordId:'0052w00000FTAaTAAX' , fields:fields } )
    userDetails({data , error}){
        if(data){
            this.datain=data.fields
        }
        if(error){
            console.error(error)
        }
        
    }
    @wire( getRecord , { recordId:'0052w00000FTAaTAAX' , fields:fields } )
    userProperty
}