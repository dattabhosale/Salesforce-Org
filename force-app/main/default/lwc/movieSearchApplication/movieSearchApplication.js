import { LightningElement, wire } from 'lwc';
import getMovie from '@salesforce/apex/IMDBIntegration.searchByName'

export default class MovieSearchApplication extends LightningElement {

    searchKeyword
    res
    isSearch=false
    @wire(getMovie,{movieName:'$searchKeyword'})
    getData({data,error}){
        this.res= data
        console.log(data);
    }

    handleClick(){
        this.isSearch=true
    }

    searchHandler(event){
        this.searchKeyword = event.detail.value
    }
}