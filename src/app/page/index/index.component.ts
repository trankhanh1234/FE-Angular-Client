import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { product } from 'src/app/model/product.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  product : product[]=[];
  p:number=1;
  constructor(private Productservice : ProductService,
    private toastr : ToastrService,
    private notifyService : NotificationService,

    private Router : Router) { }

  ngOnInit(): void {
    this.Productservice.getAllProduct().subscribe((data : any) =>{          
      if(data.result == true)
      {
        this.product = data.getDataProduct; 
        //console.log(this.product);
      }
    })
   
  }

  goToPageDetail(product : product){
    this.Router.navigate(['/Detail/' + product._id]);
  }
  AddCard(product){
    // let id = this.route.snapshot.paramMap.get('idProduct');

 if(localStorage.getItem('giohang')){
  this.notifyService.showSuccess("Đã Thêm vào giỏ hàng!!", "");


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
