import { Component, OnInit } from '@angular/core';
import { DataNewsService } from 'src/app/services/data-news.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  public categories: string[]= ['business','entertaiment','general','health','science','sport','technology'];

  constructor(private DataNews: DataNewsService) { }

  ngOnInit() {}

}
