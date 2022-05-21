import { Component } from '@angular/core';
import { DataNewsService } from '../services/data-news.service';
import { Article } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  noticias:  Article[] = [];

  constructor(private dataNews: DataNewsService) {}

  ngOnInit(): void{
    this.dataNews.getNoticias().
    subscribe(
      resp => {
       // console.log(resp) 
        this.noticias = resp.articles;
      });
  
  }
}