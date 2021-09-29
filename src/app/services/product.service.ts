import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  Get(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.apiUrl);
  }
}
