import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { product } from 'src/app/model/product.model';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product : product;
  products : product[]=[];
  p=1;
  relatetoproduct: product[]=[];
  constructor(private route: ActivatedRoute,
    private productservice : ProductService,
    private notifyService : NotificationService,
    private Router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('idProduct');
    this.productservice.getProduct(id).subscribe((data : any) => {
      if(data.result == true)
      {
        this.product = data.getProductById; 
      }
    })
    this.productservice.getAllProduct().subscribe((data : any) => {
      if(data.result == true)
      {
        let id = this.product.idCate._id; 
        this.products = data.getDataProduct.filter(x => x.idCate._id == id);
       // console.log(this.products);
        
      }
    })
  }
  AddCard(product){
    // let id = this.route.snapshot.paramMap.get('idProduct');
    this.notifyService.showSuccess("Đã Thêm vào giỏ hàng!!", "");

  //  console.log(JSON.parse(localStorage.getItem('giohang')))
 if(localStorage.getItem('giohang')){
 //  console.log('11')
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

   goToPageDetail(product : product){
    this.Router.navigate(['/Detail/' + product._id]);
  }

}
