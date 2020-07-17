import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { cart } from '../model/cart.model';
import { catchError, tap } from 'rxjs/operators';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient,
    private notifyService : NotificationService) { }

  addcart(name, email, phone,address):Observable<cart>{
    let dataCart = window.localStorage.getItem('giohang');
    // dataCart = JSON.parse(dataCart);
    let options = {
      headers: new HttpHeaders().set(
          "Content-Type","application/x-www-form-urlencoded"
      )
    };
    let fd = new URLSearchParams();  
    fd.set('name',name);
    fd.set('email',email);
    fd.set('phone',phone);
    fd.set('address',address);
    fd.set('dataCart',dataCart);
    let url = "http://localhost:3000/checkout";
    return this.http.post<cart>(url,fd.toString(), options).pipe(tap(  
      data=> {}

    ,catchError(error => of([])
   ))
    );
  }
}
