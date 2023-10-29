import { LightningElement, track } from 'lwc';

export default class TestCommunication extends LightningElement {
    course='Hello'
    num=50
    visible=false
    m
    inp1
    inputHandler(event){
        this.m = event.detail
    }
}