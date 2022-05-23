import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({

  selector: 'app-noticias',

  templateUrl: './noticias.component.html',

  styleUrls: ['./noticias.component.scss'],

})

export class NoticiasComponent implements OnInit {

  @Input() noticias: Article[] = [];
  @Input() index: number;
  @Input() title: string = '';
  @Input() enFavoritos;

  constructor(private dataLocalService: DataLocalService) { }

  ngOnInit() {}


  
  
}
