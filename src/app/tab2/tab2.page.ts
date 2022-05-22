import { Component } from '@angular/core';
import { DataNewsService } from '../services/data-news.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public categories: string[]= ['business','entertaiment','general','health','science','sport','technology'];
  public selectedCategory: string = this.categories[0];

  constructor(private DataNews: DataNewsService) { }


  segmentChanged(event : any){
    this.selectedCategory = event.detail.value;
    //console.log(event.detail.value);
  }

}
