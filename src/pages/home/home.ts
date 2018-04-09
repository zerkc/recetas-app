import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { NavigarionComponent } from '../../components/navigarioncomponent';
import { RecetasService } from '../../services/recetas.services';

@Component({
    selector: 'page-home',
    providers:[RecetasService],
    templateUrl: 'home.html'
})
export class HomePage extends NavigarionComponent {
    private items: any = [];
    private hasSearch:boolean=false;
    constructor(public navCtrl: NavController, private events: Events, private recetas: RecetasService) {
        super(navCtrl);
        recetas.getAllRecetas().subscribe(items=>{
            this.items=items;
        });
        events.subscribe("home:details", this.details);
    }
    details = (data) => {
        this.showNextView("details", data);
    }
    toogleSearch(){
        this.hasSearch=!this.hasSearch;
    }
    
}
