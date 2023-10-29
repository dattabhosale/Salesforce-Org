import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAMEFIELD from '@salesforce/schema/Account.Name'
import ACCOUNTIDFIELD from '@salesforce/schema/Account.Id'
import PHONEFIELD from '@salesforce/schema/Account.Phone'

export default class RecordViewForm extends LightningElement {
    Object = ACCOUNT_OBJECT

    fieldsAll=[NAMEFIELD,ACCOUNTIDFIELD,PHONEFIELD]

}