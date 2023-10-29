import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'

export default class EditForm extends LightningElement {
    objName = CONTACT_OBJECT
    fields = {
        firstName : NAME_FIELD,
        lastName : LASTNAME_FIELD,
        accounts : ACCOUNTID_FIELD,
        email : EMAIL_FIELD
    }
    fields1=[NAME_FIELD,LASTNAME_FIELD,ACCOUNTID_FIELD,EMAIL_FIELD]
    f1=NAME_FIELD
    f2=LASTNAME_FIELD
    f3=ACCOUNTID_FIELD
    f4=EMAIL_FIELD
    resetHandler1(){
        const tem = this.template.querySelectorAll('lightning-input-field')
        if(tem){
            tem.forEach(field=>field.reset())
        }

    }

    resetHandler(){
        const tem = this.template.querySelectorAll('lightning-input-field')
        if(tem){
            Array.from(tem).forEach(field=>field.reset())
        }

    }

}