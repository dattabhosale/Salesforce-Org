import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import { getRecord } from 'lightning/uiRecordApi';
export default class WireSixDemo extends LightningElement {
    userDetail
    userId=Id
    @wire(getRecord,{recordId:'$userId',fields:[NAME_FIELD,EMAIL_FIELD]})
    wireFun({data,error}){
        if(data){
            this.userDetail=data.fields
        }
    }
}