import { LightningElement, wire } from 'lwc';
import getCon from '@salesforce/apex/contactManagementSystem.getContactDetails'
import deleteContact from '@salesforce/apex/contactManagementSystem.deleteContactRecord'
import bulkDeleteContact from '@salesforce/apex/contactManagementSystem.bulkDelete'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import conObject from '@salesforce/schema/Contact'
import {refreshApex} from '@salesforce/apex'
export default class ContactManagementSystem extends LightningElement {
    contactsData
    setId=[]
    recordIds
    refreshData
    contactObject=conObject
    isModalOpen=false;
    searchValue=''
    columns=[
        {label:'First Name',fieldName:'FirstName'},
        {label:'Last Name',fieldName:'LastName'},
        {label:'Email',fieldName:'Email',type:'email'},
        {label:'Phone',fieldName:'Phone'},
        {label:'Title',fieldName:'Title'},
        {label:'Account',fieldName:'AccountUrl',type:'url',typeAttributes:{label:{fieldName:'AccountName'},targrt:'_blank'}},
        { type:'action',typeAttributes:{rowActions:this.getRowAction}}
    ]
    @wire(getCon, {searchKeyword : '$searchValue'})
    conFunction(result){
        this.refreshData = result
        const {data,error} = result
        if(data){
            console.log(data);
            this.contactsData = data.map(item=>{
                return {...item,
                    AccountName : item.Account.Name,
                    AccountUrl : '/lightning/r/Account/'+item.Account.Id+'/view'};
                //obje.AccountName = item.Account.Name;
                //obje.AccountUrl = '/lightning/r/Account/${item.AccountId}/view';
                //return obje;
            })
        }
    }

    getRowAction(row,doneCallback){
        const actions=[
            {label:'Edit',name:'edit'},
            {label:'Delete',name:'delete'}
        ]
        doneCallback(actions);
    }
    getRowActions(event){
        const action = event.detail.action
        const row = event.detail.row
        switch (action.name) {
            case 'edit':
                this.isModalOpen = true;
                this.recordIds = row.Id;
                break;
            case 'delete':
                this.deleteContactRecord(row.Id);
                break;
        
            default:
                break;
        }

    }

    deleteContactRecord(conId){
        deleteContact({conId:conId}).then(()=>{
            this.dispatchEvent( 
               new ShowToastEvent({
                title:'Success',
                message:'Contact Deleted Successfully',
                variant:'success'
               })
            ); this.getRefreshApex();
        }).catch((error)=>{
            this.dispatchEvent( new ShowToastEvent({
                title:'Error Deleting Record',
                message:error.body.message,
                variant:'error'
            }))
        })
        
    }

    closeModel(){
        this.isModalOpen=false;
    }

    successHandler(event){
        if(this.recordIds === null){
            this.dispatchEvent( 
                new ShowToastEvent({
                 title:'Success',
                 message:'Contact Created Successfully',
                 variant:'success'
                })
                
             )
        }else{
            this.dispatchEvent( 
                new ShowToastEvent({
                 title:'Success',
                 message:'Contact Updated Successfully',
                 variant:'success'
                })
                
             )
        }
        
         this.isModalOpen=false;
         this.getRefreshApex();

    }

    getRefreshApex(){
        return this.refreshData ? refreshApex(this.refreshData):undefined;
    }

    handleSearch(event){
        this.searchValue = event.target.value
    }
    handleNewContact(){
        this.isModalOpen=true;
        this.recordIds=null;

    }
    handleRowAction(event){
        const selectedRows = event.detail.selectedRows;
        
        this.setId= selectedRows
        console.log(this.setId);
    }
    handleBulkDelete(){
        if(this.setId.length === 0){
            alert('Please Select at least one record');
            return;
        }
        const ids = this.setId.map((item)=>item.Id)
        bulkDeleteContact({contactIds:ids})
        .then(()=>{
            this.dispatchEvent( 
                new ShowToastEvent({
                 title:'Success',
                 message:'Bulk Contact Deletion Was Successfully',
                 variant:'success'
                })
             ); this.getRefreshApex();
         }).catch((error)=>{
             this.dispatchEvent( new ShowToastEvent({
                 title:'Error Deleting Record',
                 message:error.body.message,
                 variant:'error'
             }))
         })

    }
}