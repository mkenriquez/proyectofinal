import { Component,  Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
//import Plugin
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {

  @Input() noticia: Article;
  @Input() index: number;


  constructor(private actionSheetController: ActionSheetController , private web: InAppBrowser) { }

  
  //Metodo para action-sheet
  onClick(){
    this.presentActionSheet();
  }
  //copiado de ionicframework
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      //backdropDismiss: false,
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          //this.dataLocalService.setNoticia(this.);
          //console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  //metodo para abrir noticia
  Abrir(){

    window.open(this.noticia.url, '_blank');

  }
}
