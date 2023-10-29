import { LightningElement, track } from 'lwc';

export default class Thirdcoomponent extends LightningElement {
    Name='Suraj'
    isvisible=false
    inputhandler(event){
        this.Name=event.target.value
    }
    obj={ fname:'Salesforce',age:20,address:'USA'}
    objhand(event){
        this.obj={...this.obj,'fname':event.target.value}
    }

    click(event){
        this.isvisible=true
    }
    b
    pressed(event){
        this.b=event.target.value
    }
    get a(){
        return this.b==='hello'
    }
}