import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES } from '@angular/router';
import {layoutroutes} from './layout-home.routing'
import { IndexComponent } from 'src/app/page/index/index.component';
import { BlogComponent } from 'src/app/page/blog/blog.component';
import { ProductComponent } from 'src/app/page/product/product.component';
import { CartComponent } from 'src/app/page/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from 'src/app/page/detail/detail.component';
import { CreateUserComponent } from 'src/app/page/create-user/create-user.component';
import { LoginUserComponent } from 'src/app/page/login-user/login-user.component';
import { ReturnPolicyComponent } from 'src/app/page/return-policy/return-policy.component';
import { CategoriByIDComponent } from 'src/app/page/categori-by-id/categori-by-id.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { ImformationComponent } from 'src/app/page/imformation/imformation.component';
@NgModule({
  declarations: [
    IndexComponent,
    BlogComponent,
    ProductComponent,
    CartComponent,
    DetailComponent,
    LoginUserComponent,
    CreateUserComponent,
    ReturnPolicyComponent,
    CategoriByIDComponent,
    ImformationComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(layoutroutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
    
    CommonModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ]
})
export class LayoutHomeModule {

  
 }
