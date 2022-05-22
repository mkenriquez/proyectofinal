import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';
import {DataLocalService} from 'src/app/services/data-local.service'

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() index: number;
  @Input() enFavoritos;

  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private dataLocalService: DataLocalService,
              private toastCtrl: ToastController,
             ) { }

  ngOnInit() {}

  Abrir() {
    const browser = this.iab.create(this.noticia.url, '_blank');
  }

  async lanzarMenu() {

    let Options;

    if (this.enFavoritos) {
      Options = {
        text: 'Delete',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
        console.log('Delete clicked');
        this.presentToast(`Deleted`, 'danger');
        this.dataLocalService.borrarNoticia(this.noticia);
        }
      };
    } else {
      Options = {
        text: 'Favorite',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: async () => {
        console.log('Favorite clicked');
        const existe = await this.dataLocalService.guardarNoticia(this.noticia);

        if (existe) {
          this.presentToast(`Saved`, 'success');
        } else {
          this.presentToast(`This news already exists`, 'danger');
        }

        }
      };
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
          console.log('Share clicked');

          //this.compartirNoticia();

          }
        },
        Options,
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
          console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  async presentToast(message: string, color) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1000,
      color,
      mode: 'ios'
    });
    toast.present();
  }

  // compartirNoticia() {

  //   if (this.platform.is('cordova') ) {

  //     this.socialSharing.share(
  //       this.noticia.title,
  //       this.noticia.source.name,
  //       '',
  //       this.noticia.url
  //     );

  //   } else {

  //     // tslint:disable-next-line:no-string-literal
  //     if (navigator['share'] ) {
  //       // tslint:disable-next-line:no-string-literal
  //       navigator['share']({
  //           title: this.noticia.title,
  //           text: this.noticia.description ,
  //           url: this.noticia.url,
  //       })
  //         .then(() => console.log('Successful share'))
  //         .catch((error) => console.log('Error sharing', error));
  //     } else {
  //       this.presentToast(`Could not share, your device does not support this function.`, 'warning');
  //     }

  //   }

  // }

}
