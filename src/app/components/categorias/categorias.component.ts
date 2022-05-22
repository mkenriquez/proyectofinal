import { Component} from '@angular/core';
import { DataNewsService } from 'src/app/services/data-news.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  {


  public categories: string[]= ['business','entertaiment','general','health','science','sport','technology'];
  public selectedCategory: string = this.categories[0];

  constructor(private DataNews: DataNewsService) { }


  segmentChanged(event : any){
    this.selectedCategory = event.detail.value;
    console.log(event.detail.value);
  }

}
