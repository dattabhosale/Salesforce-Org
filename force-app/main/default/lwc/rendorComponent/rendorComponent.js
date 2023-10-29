import { LightningElement } from 'lwc';
import signuptemplate from './signup.html'
import signintemplate from './signin.html'
import rendortemplate from './rendorComponent.html'

export default class RendorComponent extends LightningElement {
    
    selected=''
    render(){
        return this.selected == 'SignUp' ? signuptemplate :
                this.selected == 'Sign In' ? signintemplate :
                rendortemplate
    }

    onclickhandler(event){
        this.selected = event.target.label
        

    }
    
}