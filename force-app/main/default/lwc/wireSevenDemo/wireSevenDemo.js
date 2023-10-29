import { LightningElement, api, track, wire } from 'lwc';
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import RATING_F from '@salesforce/schema/Account.Rating';
import FORMYLA_FIELD from '@salesforce/schema/Account.Active__c';
import TOT_FIELD from '@salesforce/schema/Account.Total_Contact_Count__c'
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
export default class WireSevenDemo extends LightningElement {

    @api recordId;
    @wire(getRecord,{recordId:'0012w00001sy3jtAAA',fields:['Account.Name','Account.Phone']})
    wireAnother

    get Name(){
        return this.wireAnother.data.fields.Name.value
    }

    get Phone(){
        return this.wireAnother.data.fields.Phone.value
    }

    @wire(getRecord,{recordId:'0012w00001sy3jtAAA',fields:[TYPE_FIELD,INDUSTRY_FIELD,RATING_F]})
    secFun

    get Typ(){
        return this.secFun.data.fields.Type.value
    }

    get Indu(){
        return this.secFun.data.fields.Industry.value
    }

    get Rati(){
        return this.secFun.data.fields.Rating.value
    }

    @wire(getRecord,{recordId:'0012w00001sy3jtAAA',fields:[RATING_FIELD]})
    wireRat

    get Rat(){
        return this.wireRat.data ? getFieldValue( this.wireRat.data ,RATING_FIELD) : " "
    }

    @wire(getRecord,{recordId:'0012w00001sxjTHAAY',fields:[NAME_FIELD,FORMYLA_FIELD,TOT_FIELD]})
    funWire

    get Nam(){
        return this.funWire.data ? this.funWire.data.fields.Name.value:" "
    }
    get Fo(){
        return this.funWire.data ? this.funWire.data.fields.Active__c.value:" "
    }

    get Tot(){
        return this.funWire.data ? getFieldValue(this.funWire.data,TOT_FIELD) : " "
    }


}