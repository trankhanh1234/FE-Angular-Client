import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHomeComponent } from './layout-home/layout-home/layout-home.component';
import { ComponentsModule } from './conponent/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactComponent } from './page/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ImformationComponent } from './page/imformation/imformation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Blog1Component } from './page/blog1/blog1.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutHomeComponent,
    ContactComponent,
    Blog1Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
