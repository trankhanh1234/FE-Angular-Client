import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { category } from '../model/categori.model';
import {tap,map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

   }
   getCategory():Observable<category[]>{
    let Url="http://localhost:3000/admin/category";
    return this.http.get<category[]>(Url).pipe(
     tap(data=> {console.log(data)}),catchError(error => of([])))
  }
  getCategoryById(_id):Observable<category>{
    let Url="http://localhost:3000/admin/category/"+ _id;

    return this.http.get<category>(Url).pipe(
      tap(data => {
      }),catchError(error => of)
    )
  }
}
