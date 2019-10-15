import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QualquerCoisaService {

  apiEndpoint = 'https://api.chucknorris.io/jokes/random';
  apiEndpointCategories = 'https://api.chucknorris.io/jokes/categories';
  byCategoryEndpoint = 'https://api.chucknorris.io/jokes/random?category=';
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.apiEndpointCategories);
  }
  getJokes() {
    return this.http.get(this.apiEndpoint);
  }

  getJokeByCategory(category){
    return this.http.get(`${this.byCategoryEndpoint}${category}`);
  }
}
