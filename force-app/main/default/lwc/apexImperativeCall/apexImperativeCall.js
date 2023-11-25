import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/accountDataClass.returnAccounts'

export default class ApexImperativeCall extends LightningElement {

    accList
    handleClick() {
        getAccount().then(result => {
            console.log(result)
            this.accList = result

        }).catch(error=>{
            console.error(error)
        })
    }

}