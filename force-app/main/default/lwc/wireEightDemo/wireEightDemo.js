import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/getContacts.getContactfromObj'

export default class WireEightDemo extends LightningElement {
    @wire(getContact,{accId:'0012w00001sxjTHAAY'})
    cont
    
}