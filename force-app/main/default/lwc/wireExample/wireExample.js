import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id'
import { getRecord } from 'lightning/uiRecordApi';

export default class WireExample extends LightningElement {

    userId = Id
    userDetails
    @wire( getRecord , {recordId :'0052w00000FTAaTAAX' , fields:['User.Name', 'User.Email']} )
    userDetailsHandler({data,error}){
        if(data){
            this.userDetails = data.fields
        }
    }

}