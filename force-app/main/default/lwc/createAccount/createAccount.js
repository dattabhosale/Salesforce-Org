import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class CreateAccount extends LightningElement {
    objectName= ACCOUNT_OBJECT
    recid
    allFields=[NAME_FIELD,ANNUALREVENUE_FIELD,INDUSTRY_FIELD,TYPE_FIELD]

    successHandler(event){
        console.log(event.detail.id)
        this.recid=event.detail.id
        this.dispatchEvent(new ShowToastEvent({
            title:"Account Created",
            message:"Record ID"+event.detail.id,
            variant:"success"

        }))
    }

}