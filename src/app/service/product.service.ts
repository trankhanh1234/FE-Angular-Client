import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { product } from '../model/product.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  getAllProduct():Observable<product[]>{
    let Url="http://localhost:3000/admin/product";
    return this.http.get<product[]>(Url).pipe(
      tap(data =>{ 
      }),catchError(error => of([]))
      )
  }
  getProduct(_id):Observable<product>{
    let Url = "http://localhost:3000/admin/product/"+_id;
    return this.http.get<product>(Url).pipe(tap());
  }
}
