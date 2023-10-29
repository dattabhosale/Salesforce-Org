import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';

export default class WireGetRecordDemo extends LightningElement {


    @api recordId
    accountName
    revenue
    ownerName

    @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']})
    recordFunction({data,error}){
        if(data){
            console.log(data)
            this.accountName = data.fields.Name.displayValue?data.fields.Name.displayValue:data.fields.Name.value
            this.revenue = data.fields.AnnualRevenue.displayValue?data.fields.AnnualRevenue.displayValue:data.fields.AnnualRevenue.value
            this.ownerName = data.fields.Owner.displayValue? data.fields.Owner.displayValue : data.fields.Owner.value

        }else if(error){
            console.log(error)
        }

    }
}