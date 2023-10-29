import { LightningElement } from 'lwc';

export default class NewComponent extends LightningElement {
    arr=['Hello','How','Are','You']

    fetchtag(){
        let cont = this.template.querySelector('h1')
        console.log(cont.innerText)
        const fectarr= this.template.querySelectorAll('.ame')
        Array.from(fectarr).forEach(element => {
            console.log(element.innerText)
            element.setAttribute("title",element.innerText)

        });

        let ab=this.template.querySelector('.aa')
        ab.innerHTML='<p>Hello from another tag</p>'
    }
}