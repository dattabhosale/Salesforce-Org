import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import USERNAME_FIELD from '@salesforce/schema/User.Username'
import { getRecord } from 'lightning/uiRecordApi';
export default class WireFirstComponent extends LightningElement {
    userId=Id
    userDetails
    userInfo

    @wire( getRecord, {recordId:'$userId',fields:['User.Name','User.Email']})
    wireFunct({data ,error}){
        if(data){
            this.userDetails=data.fields
        }

    }

    @wire( getRecord ,{recordId:'$userId',fields:['User.Name','User.Email']} )
    wireFunctionProperty

    @wire(getRecord,{recordId:'$userId',fields:[NAME_FIELD,EMAIL_FIELD,USERNAME_FIELD]})
    wireFun({data,error}){
        if(data){
            this.userInfo = data.fields
        }
    }

}