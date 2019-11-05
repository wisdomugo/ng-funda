import {Component, Input, Output, EventEmitter} from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';
import {IEvent} from './shared/index';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase}}</h2>
    <div>Date: {{event?.date | date: 'shortDate'}}</div>

    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event?.price | currency: 'USD'}}</div>

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
    `]

})

export class EventThumbnailComponent {
    @Input() event: IEvent;
    someProperty: any = 'some value';

    logFoo() {
        console.log('foo');
    }

    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am') {
            return {color: '#003300', 'font-weight': 'bold'};
            return {};
        }
    }
}
