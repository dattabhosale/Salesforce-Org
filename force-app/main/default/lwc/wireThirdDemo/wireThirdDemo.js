import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import A_NAME from '@salesforce/schema/User.Alias';
import id from '@salesforce/user/Id'
import Account_Object from '@salesforce/schema/Account'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
//const fields=[NAME_FIELD,EMAIL_FIELD,A_NAME]
export default class WireThirdDemo extends LightningElement {
    userDetails
    userId=id
    wireExamp

    @wire(getRecord , {recordId:'$userId',fields:[NAME_FIELD,EMAIL_FIELD]})
    userDetails
    @wire(getRecord , {recordId:'0052w00000FTAaTAAX',fields:[NAME_FIELD,EMAIL_FIELD,A_NAME]})
    wireFun({data,error}){
        if(data){
            this.wireExamp = data.fields
        }
    }
    @wire(getObjectInfo , {objectApiName:Account_Object})
    objectInfo

}