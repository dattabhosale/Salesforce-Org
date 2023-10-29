import { LightningElement, track } from 'lwc';

export default class Hellocomponent extends LightningElement {

    aa='Amazon'
    abc(event){
        this.aa=event.target.value
    }
    @track abb={
        Name:'Salesforce',
        age:22,
        add:'USA'
    }
    ab(event){
        this.abb.Name=event.target.value
    }
    x=['Mahesh','Divyansh']
    get z(){
        return this.x[0].toUpperCase()
    }
    isvisible=false
    cc
    handleClick(event)
    {
        this.isvisible=true
    }
    changehandleclick(event){
        this.cc=event.target.value

    }
    get d(){
        return this.cc== "hello"
    }


}