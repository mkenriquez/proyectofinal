import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { IonicModule } from '@ionic/angular';
import { NoticiaComponent } from './noticia/noticia.component';


@NgModule({
  declarations: [ 
  NoticiasComponent,
  NoticiaComponent,
  
  FavoritesComponent],

  exports:[ NoticiasComponent,
   
    FavoritesComponent],
    
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
