import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { product } from 'src/app/model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { category } from 'src/app/model/categori.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categori-by-id',
  templateUrl: './categori-by-id.component.html',
  styleUrls: ['./categori-by-id.component.scss']
})
export class CategoriByIDComponent implements OnInit {
  product : product[]=[];
  categori : category;
  p=1;
  constructor(private Productservice: ProductService,
    private route : ActivatedRoute,
    private categoriservice : CategoryService,
    private toastr : ToastrService,
    private Router : Router) {
      this.Router.routeReuseStrategy.shouldReuseRoute=()=>false
     }
param;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("idCate");

    this.categoriservice.getCategoryById(id).subscribe((result : any)=>{
      this.categori = result.dataCate;
    })
    this.Productservice.getAllProduct().subscribe((data : any) =>{          
      if(data.result == true)
      {
        let id = this.route.snapshot.paramMap.get("idCate");
        this.product = data.getDataProduct.filter(x => x.idCate._id == id);
     //   console.log(this.product);
        
      }
    })
  }

  goToPageDetail(product : product){
    this.Router.navigate(['/Detail/' + product._id]);
  }
  AddCard(product){
    // let id = this.route.snapshot.paramMap.get('idProduct');
 if(localStorage.getItem('giohang')){
 // this.notifyService.showSuccess("Đã Thêm vào giỏ hàng!!", "");

  this.toastr.success("Đã Thêm vào giỏ hàng!!");
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
