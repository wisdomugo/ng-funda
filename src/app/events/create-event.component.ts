import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { EventService } from './shared/index'

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em{float: right; color: #e05c65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {#999}
    .error :-moz-placeholder {color:#999}
    .error :ms-input-placeholder {color:#999;}
  `]
})

export class CreateEventComponent {

    isDirty:boolean = true
    event

    constructor(private router:Router, private eventService:EventService){ 

    }

    ngOnInit(){
        this.event = {
            name: 'Ng Spectacular',
            date: '8/8/2028',
            time: '10 am',
            price: 799.99,
            location: {
                address: '456 Happy St',
                city: 'Felicity',
                country: 'Angularistan'
            },
            onlineUrl: 'http://ngSpectacular.com',
            imageUrl: 'http://ngSpectacular.com/logo.png'
        }
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
    cancel(){
        this.router.navigate(['/events'])
    }
}