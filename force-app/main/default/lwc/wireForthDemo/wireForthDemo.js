import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import { LightningElement, track, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class WireForthDemo extends LightningElement {
    objectInfos
    valueEntered
    @track
    course={
        Name:'Salesforce Developer',
        Launch:1999,
        Country:'USA'
    }
    book={
        Category:'Action',
        Price:200
    }
    keyHandler(event){
        this.book={...this.book,Price:event.target.value}
    }
    objA=[ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    @wire(getObjectInfos , {objectApiNames :'$objA'})
    wireObjFunction({data,error}){
        if(data){
            console.log(data)
            this.objectInfos = data
        }
    }
}