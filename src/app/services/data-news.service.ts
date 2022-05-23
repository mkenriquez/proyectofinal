import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResultNews, Article } from '../interfaces/interfaces';

//variables declaradas en environment
const URL = environment.URL;
const API_KEY = environment.API_KEY;

@Injectable({

  providedIn: 'root'

})

export class DataNewsService {



  constructor(private http: HttpClient) { }


  //optimizacion de url
  private execQuery<T>(query: string){

    query = URL + query;

    query += `country=mx&apiKey=${API_KEY}`;

    return this.http.get<T>(query);

  }

  //metodo para noticias 
  getNoticias(){
    return this.execQuery<ResultNews>(`/top-headlines?`);
  }

  //metodo para noticias para categoria
   getCategoria(categoria: string){
     //return this.http.get<ResultNews>(`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=mx&category=${categoria}`);
     return this.execQuery<ResultNews>(`/top-headlines?category=${categoria}`);
   }




}