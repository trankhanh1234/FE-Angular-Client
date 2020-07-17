import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product : product[]=[];
  p:number=1;
  constructor(private Productservice : ProductService,
    private notifyService : NotificationService,
    private Router : Router) { }

  ngOnInit(): void {
    this.Productservice.getAllProduct().subscribe((data : any) =>{          
      if(data.result == true)
      {
        this.product = data.getDataProduct; 
     //   console.log(this.product);
      }
    })
  }

  goToPageDetail(product : product){
    this.Router.navigate(['/Detail/' + product._id]);
  }
  AddCard(product){
    // let id = this.route.snapshot.paramMap.get('idProduct');
    this.notifyService.showSuccess("Đã Thêm vào giỏ hàng!!", "");
 if(localStorage.getItem('giohang')){

   let list = JSON.parse(localStorage.getItem('giohang'));
   const ind = list.findIndex(x=>x.item._id === product._id);
        if(ind !== -1){
          list[ind].soluong++;
          localStorage.setItem('giohang',JSON.stringify(list));
        } else {
          list.push({soluong:1,item:product});
          localStorage.setItem('giohang',JSON.stringify(list));
        }
 //  list.push(product);
   
 } else {
   let list = []
   list.push({soluong:1,item:product});
   localStorage.setItem('giohang',JSON.stringify(list));
 }    
   }

}
