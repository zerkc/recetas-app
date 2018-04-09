import { Component, Input } from '@angular/core';
@Component({
    selector: 'comp-recipientList',
    templateUrl: './recipientList.html'
})
export class RecipientListComponent {
    @Input() items: any = [];
    @Input() hasSearch: boolean = false;
    private tempItems: any = [];
    constructor() {
    }

    ngOnInit() {
    }
    onInput(evt) {
        if (this.tempItems.length == 0) {
            this.tempItems = this.items;
        }

        let str = evt.target.value;
        if (str && str.trim() != '') {
            this.items = this.tempItems.filter(item => {
                return item.name.toLowerCase().indexOf(str.toLowerCase()) > -1;
            })
        }else{
            this.items = this.tempItems
        }
        //let index = Math.floor(Math.random() * this.items.length);
        //this.items.splice(index, 1);
    }
}
