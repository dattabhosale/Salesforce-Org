import { LightningElement, track } from 'lwc';

export default class SixthComponent extends LightningElement {
    courseName='Salesforce'
    fun(event){
        this.courseName=event.target.value
    }

    @track course={
        bookName:'Salesforce',
        price:20
    }
    fun1(event){
        this.course.bookName = event.target.value 
    }

    address={
        city:'Pune'
    }
    fun2(event){
        this.address = {...this.address,"city":event.target.value}
    }

    get fun3(){
        return this.address.city=='Hello'
    }

}
