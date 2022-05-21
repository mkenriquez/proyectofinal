import { Injectable } from '@angular/core';
import { Article, Source } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular'; 
import { Storage } from '@ionic/storage-angular'; 

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Source[] = []; constructor(private storage: Storage , private toastController: ToastController) {}

  async presentToast(message: string) {
     const toast = await this.toastController.create({ message, duration: 1500, }); toast.present(); 
   }
   public setNoticia(noticia: Source) { 
     let exist = false; 
     let message: string; 
     for (const m of this.noticias) {
        if (m.id === noticia.id) { exist = true; break; } 
       } 
       if (exist) { 
        this.noticias = this.noticias.filter((m) => m.id !== noticia.id);
          message = 'Favorito Eliminado '; } else 
       { this.noticias.push(noticia); message = 'Favorito Agregado' 
     } 
     this.storage.set('noticias', this.noticias); 
     this.presentToast(message) } 
     async getNoticias() { 
       const noticias = await this.storage.get('noticias'); 
       this.noticias = noticias || []; 
       return this.noticias; } 

}
