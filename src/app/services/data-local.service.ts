import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'; 
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {


  constructor(private storage: Storage) {
    this.cargarFavoritos();
   }

  noticias: Article[] = [];


  //se valida mediante el titulo de la noticia 
  async guardarNoticia(nota: Article) {

    const existe = await this.noticias.find( noti => noti.title === nota.title);

    if (!existe) {
      this.noticias.unshift( nota );
      this.storage.set('favoritos', this.noticias);
      return true;
    }
    return false;
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');

    if (favoritos) {
      this.noticias = favoritos;
    }

  }

  async borrarNoticia(nota: Article) {
    this.noticias = await this.noticias.filter( (noti: Article) => noti.title !== nota.title );
    this.storage.set('favoritos', this.noticias);
  }

}
