import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={}
    issubmit = false
    correctAnswer=0
    get allnotselected(){
        return !(Object.keys(this.selected).length === this.quiz.length)
    }
    quiz=[
        {
            id:'Question1',
            question:'What is Apex?',
            answers:{
                a:'Programming Language.',
                b:'Trigger.',
                c:'None Of this.'
            },
            ans:'a'
        },
        {
            id:'Question2',
            question:'What is Array?',
            answers:{
                a:'Programming Language.',
                b:'Primitive Data Type.',
                c:'None Of this.'
            },
            ans:'c'
        },
        {
            id:'Question3',
            question:'Following Example of primitive data type.',
            answers:{
                a:'Array.',
                b:'Integer.',
                c:'Set.'
            },
            ans:'b'
        }
    ]

    get isscoredfull(){
        return `slds-text-heading_large ${this.quiz.length == this.correctAnswer ? 'slds-text-color_success': 'slds-text-color_error' }`

    }
    changehandler(event){
        console.log(event.target.name)
        console.log(event.target.value)
        const {name,value}=event.target
        this.selected={...this.selected,[name]:value}
    }

    submithandler(event){
        event.preventDefault()
        let correct=this.quiz.filter(item=>this.selected[item.id] === item.ans )
        this.correctAnswer=correct.length
        console.log(this.correctAnswer)
        this.issubmit = true


    }

    resethandler(event){
        this.selected = {}
        this.correctAnswer=0
        this.issubmit = false


    }





}