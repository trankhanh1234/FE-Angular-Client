import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product = [];
  cart : cart;
  ssMgs ="";
  paralysis = false;
  submitted = false;


  step: number = 1;
  registerForm: FormGroup;
  hasError: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private cartservice : CartService,
    private toastr : ToastrService,
    private notifyService : NotificationService,
    private router : Router) { }

  ngOnInit(): void {
    
    

    this.product = JSON.parse(localStorage.getItem('giohang'));
  //  console.log(this.product);
    this.TotalChange();
    this.registerForm = this.formBuilder.group({
      name :['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone : ['', [Validators.required, Validators.minLength(10)]],
      
      address:  ['', [Validators.required, Validators.minLength(6)]],
    }, );
  }

  get f(){
    return this.registerForm.controls;
  }
  
  ngOnChanges(){
    this.TotalChange()
    
    
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  s = 0;
  TotalChange() {
   // this.s = 0;
   let z=0;
    this.product.forEach((e) => {
      z = z + e.item.price * e.soluong;
    });
    
    this.s=z;
    localStorage.setItem('giohang',JSON.stringify(this.product))
  }
  Totalqty() {
    let s = 0;
    this.product.forEach((e) => {
      
      s = s + e.soluong;
    });
    return s;
  }
  onSubmit(f){
    this.submitted = true;
    if(localStorage.getItem("giohang")==null){
      alert("Giỏ Hàng Trống, vui lòng Chọn Sản Phẩm!!")
      return;
    }
   
    

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
   
    this.cartservice.addcart(f.value.name,f.value.email,f.value.phone,f.value.address).subscribe((data :any) =>{
      if(data.result == true){
        

        localStorage.removeItem("giohang");
       // console.log(data);
        this.goToPageIndex();
        alert("Đặt Hàng Thành Công !!")
        this.notifyService.showSuccess("Đặt Hàng Thành Công !!", "");
      }
      else {
        this.notifyService.showError(data.ssMgs,"");
      }
    });
  }

  goToPageIndex(){
    this.router.navigate(['/index']);
  }


  cartarray(cart : product){


  }
 

  delete(item) {
    this.product.splice(this.product.indexOf(item), 1);
    localStorage.setItem('giohang', JSON.stringify(this.product));
    this.notifyService.showSuccess("Xóa Thành Công !!", "")
  }

}
