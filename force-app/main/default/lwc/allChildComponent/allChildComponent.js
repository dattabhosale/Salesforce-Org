import { LightningElement, api } from 'lwc';

export default class AllChildComponent extends LightningElement {
    @api nameDetails
    newVal
    @api det

    disp
    changeHandler(event){
        this.disp = event.target.value
        this.dispatchEvent( new CustomEvent('changevalue',{ detail:this.disp }))

    }
    @api
    get details(){
        return this.newVal
    }
    
    set details(data){
        let newdate=data.laucheddate +2
        this.newVal = {...data , laucheddate:newdate,"Location":"US"}
    }
}