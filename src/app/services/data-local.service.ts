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

  async guardarNoticia(noticia: Article) {

    const existe = await this.noticias.find( noticia => noticia.title === noticia.title);

    if (!existe) {
      this.noticias.unshift( noticia );
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
  async borrarNoticia(noticia: Article) {
    this.noticias = await this.noticias.filter( (noticia: Article) => noticia.title !== noticia.title );
    this.storage.set('favoritos', this.noticias);
  }

}
