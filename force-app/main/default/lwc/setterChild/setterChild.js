import { LightningElement, api } from 'lwc';

export default class SetterChild extends LightningElement {
    newBook
    @api
    get bookDetails(){
        return this.newBook
    }

    set bookDetails(data){
        let newPrice = data.Price*2
        this.newBook = {...data,Price:newPrice,price:newPrice,'origin':'US'}

    }
}