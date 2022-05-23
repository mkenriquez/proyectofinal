import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { NotaComponent } from './nota/nota.component';
import { HeaderComponent } from './header/header.component';



@NgModule({

  declarations: [ 
  NoticiasComponent,
  NotaComponent,
  HeaderComponent
],

  exports:[ 
    NoticiasComponent,
    HeaderComponent
    ],
    
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
