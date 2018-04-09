import { NavController } from "ionic-angular";
declare function require(name:string);

export class NavigarionComponent{
    
    constructor(public navCtrl: NavController) {

    }

    showNextView(page_nav,data = {}){
		let pageData =  require(`../pages/${page_nav}/${page_nav}`); 
		this.navCtrl.swipeBackEnabled = true;
		this.navCtrl.push(
            pageData[this.capitalize(page_nav)+"Page"],
            data
        );
	}

	capitalize(str){
	//	console.log(str.charAt(0).toUpperCase() + str.slice(1));
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}