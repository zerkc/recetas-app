import { Component, Input, trigger, state, transition, animate, style, keyframes } from '@angular/core';
import { Events } from 'ionic-angular';
@Component({
    selector: 'comp-recipientitem',
    templateUrl: './recipientItem.html',
    animations: [
        trigger('stateAnimation', [
            state('1', style({ opacity: 1 })),
            state('0', style({ opacity: 0 })),
            transition('0 => 1', animate('200ms ease-in')),
            transition('void => *', [
                animate(600, keyframes([
                  style({ transform: 'scale(1)', offset: 0}),
                  style({ transform: 'scale(1.1)',  offset: 0.5}),
                  style({ transform: 'scale(1)',     offset: 1.0})
                ]))
              ]),
            transition('1 => 0', animate('200ms ease-out'))
        ]),
    ]
})
export class RecipientItemComponent {
    static index : number = 1;
    @Input() item: any;
    private expanded:boolean = false;
    private i:number=1;

    constructor(private events: Events) {
        this.i = RecipientItemComponent.index++;
    }

    ngOnInit() {
        setTimeout(_=>this.expanded=true,(this.i*150));
    }
    viewDetails(){
        this.events.publish("home:details",this.item);
    }
    ngOnDestroy() {
        this.expanded=false
    }
}
