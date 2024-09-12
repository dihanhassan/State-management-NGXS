import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalGet } from '../api-models/animal-get.model';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  constructor(private http : HttpClient) { }

  baseUri = 'https://jsonplaceholder.typicode.com'

  getAnimalService(){
    return this.http.get<AnimalGet>(this.baseUri + '/posts');
  }

}
