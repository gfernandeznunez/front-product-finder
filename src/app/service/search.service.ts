import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/';
import { Product } from '../model/product.model';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient
  ) {}

  public getProducts(search: string): Observable<Product[]> {
    return this.http.get<Product[]> (environment.urlProductService+search);
  }


}
