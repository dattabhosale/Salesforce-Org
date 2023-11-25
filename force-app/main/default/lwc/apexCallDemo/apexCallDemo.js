import { LightningElement, wire } from 'lwc';
import apexMethod from '@salesforce/apex/accountDataClass.returnAccounts'

export default class ApexCallDemo extends LightningElement {
    accData
    @wire(apexMethod)
    accounts


    @wire(apexMethod)
    accFunction({data,error}){
        if(data){
            this.accData = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' : item.Type === 'Prospect' ? 'Type changed' : '---'
                return {...item ,newType}
            })
        }
    }
}