import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Opportunity';
export default class MultiPicklistDemo extends LightningElement {

    seletedType
    selectedStage
    typeOptions
    stageOptions

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    accObj

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$accObj.data.defaultRecordTypeId'})
    pickFun({data,error}){
        if(data){
            console.log(data)
            this.stageOptions=[...this.generatePick(data.picklistFieldValues.StageName)]
            this.typeOptions=[...this.generatePick(data.picklistFieldValues.Type)]
            
        }
        if(error){
            console.log(error)
        }
        
    }
    generatePick(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }

    handleChange(event){
        if(event.target.name === 'type'){
            this.seletedType= event.target.value
        }
        if(event.target.name ==='stagename'){
            this.selectedStage = event.target.value
        }
    }

}