import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPP_OBJECT from '@salesforce/schema/Opportunity'
export default class WireFifthDemo extends LightningElement {
    arr=[ACCOUNT_OBJECT,OPP_OBJECT]
    getInfo
    @wire(getObjectInfos,{objectApiNames:'$arr'})
    wireGetFunction({data,error}){
        if(data){
            this.getInfo = data
        }
    }
}