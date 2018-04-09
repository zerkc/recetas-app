import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'stepmodal.html'
})
export class ModalStepDetails {
    @ViewChild('slides') slides: ElementRef;
    private steps:any = [];
    private imageurl:string ="";
    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        this.steps = this.navParams.data.steps;
        this.imageurl = this.navParams.data.imageurl;
    }
    slideChanged(e) {
    }
    dismiss() {
      this.viewCtrl.dismiss();
    }
  }
  