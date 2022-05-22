import { Component , OnInit} from '@angular/core';
import { DataNewsService } from '../services/data-news.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public categories : string[]= [ 'business','entertainment','general','health','science','sports','technology'];
  public selected: string = this.categories[0];
  public noticias: Article[]=[];

  constructor(private DataNews: DataNewsService) { }

  ngOnInit(){
    this.DataNews.getCategoria(this.selected)
    .subscribe(resp=>{this.noticias = resp.articles;
    });
  }

  segmentChanged(event: any  ) {
    this.selected = event.detail.value;
    this.DataNews.getCategoria(this.selected)
    .subscribe(resp=>{this.noticias = resp.articles;
    });
  }

}
