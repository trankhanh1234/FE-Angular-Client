import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from 'src/app/page/index/index.component';
import { BlogComponent } from 'src/app/page/blog/blog.component';
import { ProductComponent } from 'src/app/page/product/product.component';
import { DetailComponent } from 'src/app/page/detail/detail.component';
import { CartComponent } from 'src/app/page/cart/cart.component';
import { ContactComponent } from 'src/app/page/contact/contact.component';
import { LoginUserComponent } from 'src/app/page/login-user/login-user.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateUserComponent } from 'src/app/page/create-user/create-user.component';
import { ReturnPolicyComponent } from 'src/app/page/return-policy/return-policy.component';
import { CategoriByIDComponent } from 'src/app/page/categori-by-id/categori-by-id.component';
import { ImformationComponent } from 'src/app/page/imformation/imformation.component';

export const layoutroutes: Routes = [

    {path : "index" , component : IndexComponent},
    {path : "Blog" , component : BlogComponent},
    {path : "Product" , component : ProductComponent},
    {path : "cart" , component : CartComponent},
    {path : "Detail/:idProduct" , component : DetailComponent},
    {path : "contact" , component : ContactComponent},
    {path : "login" , component : LoginUserComponent},
    {path : "create" , component : CreateUserComponent},
    {path : "chinh-sach-bao-hanh-va-doi-tra-san-pham" , component : ReturnPolicyComponent},
    {path : "CategoriByID/:idCate" , component : CategoriByIDComponent},
    {path : "Imformation" , component : ImformationComponent},

];


export class LayoutHomeModule { }