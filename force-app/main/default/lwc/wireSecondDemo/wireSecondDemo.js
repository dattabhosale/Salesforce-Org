import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class WireSecondDemo extends LightningElement {
    accountInfo

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    wireFunction

}