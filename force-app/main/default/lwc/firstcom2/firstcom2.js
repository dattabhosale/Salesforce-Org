import { LightningElement, track } from 'lwc';

export default class Firstcom2 extends LightningElement {
    fullname='Salesforce'
    abc(event){
        this.fullname=event.target.value
    }

    add={
        course:'SAP',
        age:22
    }
    obj(event){
        this.add={...this.add,"course":event.target.value}
    }

    arr=['a','b','c']
    abb(event){
        this.arr[0]=[...this.arr[0],event.target.value]
    }

}