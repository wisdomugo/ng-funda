import {Component, Input, Output, EventEmitter} from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';
@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>

    <!-- This is a comment showing how to use class binding to style component 
        [class.green]="event?.time === '8:00 am'"-->

    <!-- This shows how to apply css using ngClass but inline, it makes the code cumbersome to read so we
    rather applied it by calling a function
    [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" -->

    <div [ngClass]="getStartTimeClass()"  [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    
    <div *ngIf="event?.location">  <!-- this line hidden with ngIf which just comments it out -->
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event.location?.country}}</span>
    </div>

    <div *ngIf="event?.onlineUrl"> <!-- this line hidden with ngIf which just comments it out -->   
        Online URL: {{event?.onlineUrl}}
    </div>
    </div>
    `,
    styles: [`
    .pad-left {margin-left:10px;}
    .well div {color: #bbb; }
    .thumbnail{min-height: 210px;}
    .green { color: #003300 !important;}
    .bold {font-weight: bold;}
    `]

})

export class EventThumbnailComponent {
    @Input() event:any
    someProperty:any = "some value"

    logFoo(){
        console.log('foo')
    }

    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am'){
            return 'green bold'
            return ''
        }
    }
}