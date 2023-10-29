import { getListUi } from 'lightning/uiListApi';
import { LightningElement, wire } from 'lwc';
import CON_OBJECT from '@salesforce/schema/Contact'
import TITLE_FIELD from '@salesforce/schema/Contact.Title';

export default class WireNewDemo2 extends LightningElement {
    cont
    pageToken = null
    nextPageToken=null
    previousPageToken=null
    @wire(getListUi,{objectApiName:CON_OBJECT,
        listViewApiName:'Allcontacts',
        pageSize:10,
        sortBy:TITLE_FIELD,
        pageToken:'$pageToken'
    })
    conFun({data,error}){
        if(data){
            console.log(data);
            this.cont = data.records.records
            this.nextPageToken = data.records.nextPageToken
            this.previousPageToken = data.records.previousPageToken
        }
    }

    handlePreviouseClick(){
        this.pageToken = this.previousPageToken;
    }

    handleNextClick(){
        this.pageToken = this.nextPageToken;
    }
}