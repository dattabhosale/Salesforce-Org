import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class PicklistByRecordId extends LightningElement {

    selectedType=''
    typeOptions=[]
    selectedRating=''
    ratingOptions=[]
    selectedActive=''
    activeOptions=[]

    
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    obj

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$obj.data.defaultRecordTypeId'})
    pickFunction({data,error}){
        if(data){
            console.log(data)
            this.typeOptions = [...this.generatPicklist(data.picklistFieldValues.Type)]
            this.ratingOptions = [...this.generatPicklist(data.picklistFieldValues.Rating)]
            this.activeOptions = [...this.generatPicklist(data.picklistFieldValues.Active__c)]
            
        }
        if(error){
            console.log(error)
        }
    }

    generatPicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }

    changeHandler(event){
        const { name,value} = event.target

        if(name==='type'){
            this.selectedType = value
        }else if(name==='rating'){
            this.selectedRating = value
        }else if(name==='active'){
            this.selectedActive = value
        }
            
        
    }
}