import { LightningElement ,track } from 'lwc';

export default class PracticeComponent extends LightningElement {
    courseName='Salesforce'
    array=['Salesforce','Amazon','Walmart','Flipkart']
    istrue=false
    onchangehandler(event){
        this.courseName = event.target.value
    }

    @track obj={ city:'Pune',
          cost:400

    }

    onchangehandler1(event){
        this.obj.city = event.target.value
    }

    ob={
        company:'Amazon',
        country:'US'
    }

    onchangehandler2(event){
        this.ob={...this.ob,company:event.target.value}
    }

    
    get af(){
        return this.array[1]
    }

    onclickhandler(){
        this.istrue=true
    }
}