import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { RecetasService } from '../../services/recetas.services';
import { ModalStepDetails } from '../../components/modals/stepmodal/stepmodal';

@Component({
    selector: 'page-details',
    providers: [RecetasService],
    templateUrl: 'details.html'
})
export class DetailsPage {
    private item: any = {
        preparation:[]
    };
    private preparations:any = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, private recetas: RecetasService, private modalCtrl: ModalController) {
        this.navParams.data;
        recetas.getReceta(this.navParams.data.id).subscribe(item => {
            this.item = item;
            this.preparations = this.item.preparation.map(r=>{
                r.checked=false;
                return r;
            });
        });
    }

    showSteps() {
        let modal = this.modalCtrl.create(ModalStepDetails, {imageurl:this.item.imageurl,steps:this.item.preparation});
        modal.present();
    }
    checkPreparation(index){
        if(this.preparations[index].checked){
            for(let i=index;i<this.preparations.length;i++){
                this.preparations[i].checked = false;
            }
        }else{
            for(let i=0;i<=index;i++){
                this.preparations[i].checked = true;
            }
        }
    }
}

