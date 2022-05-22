import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResultNews, Article } from '../interfaces/interfaces';

const URL = environment.URL;
const API_KEY = environment.API_KEY;

@Injectable({

  providedIn: 'root'

})

export class DataNewsService {



  constructor(private http: HttpClient) { }



  private execQuery<T>(query: string){

    query = URL + query;

    query += `country=us&apiKey=${API_KEY}`;

    return this.http.get<T>(query);

  }



  getNoticias(){

    return this.execQuery<ResultNews>('/top-headlines?');

  }

  getCategorias(event: string){

  return this.execQuery<Article>('/top-headlines?category=${category}');
  }

}