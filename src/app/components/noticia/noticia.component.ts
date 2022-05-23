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
  @Input() Favoritos;

  constructor(private iab: InAppBrowser,
              private actionSheetCtrl: ActionSheetController,
              private dataLocalService: DataLocalService,
              private toastCtrl: ToastController,
             ) { }

  ngOnInit() {}
// metodo abrir noticia en navegador
  Abrir() {
    const browser = this.iab.create(this.noticia.url, '_blank');
  }

  async onClick() {

    let Options;

    if (this.Favoritos) {
      Options = {
        text: 'Eliminar',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
        console.log('Delete clicked');
        this.presentToast(`Eliminado`, 'danger');
        this.dataLocalService.borrarNoticia(this.noticia);
        }
      };
    } else {
      Options = {
        text: 'Favorito',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: async () => {
        console.log('Favorite clicked');
        const existe = await this.dataLocalService.guardarNoticia(this.noticia);

        if (existe) {
          this.presentToast(`Guardado`, 'success');
        } else {
          this.presentToast(`Ya se guardo`, 'danger');
        }

        }
      };
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
          console.log('Share clicked');
          }
        },
        Options,
        {
          text: 'Cancelar',
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
      mode: 'md'
    });
    toast.present();
  }
}
