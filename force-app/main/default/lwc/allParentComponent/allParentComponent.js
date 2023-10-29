import { LightningElement } from 'lwc';

export default class AllParentComponent extends LightningElement {
    newValue
    courseDetails={
        courseName:'Salesfroce',
        lauchedDate:2098
    }

    simpleData={
        Name:'Amazon',
        Loc:'US'
    }
    receive(event){
        this.newValue=event.detail
    }
}