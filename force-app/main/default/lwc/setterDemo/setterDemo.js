import { LightningElement, api } from 'lwc';

export default class SetterDemo extends LightningElement {
    val
    @api 
    get details(){
        return this.val
    }

    set details(data){
        let newAge=data.Age *2
        this.val={...data,Age:newAge,"Location":"US"}
    }

}