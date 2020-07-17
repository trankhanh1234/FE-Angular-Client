import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/model/categori.model';
import { CategoryService } from 'src/app/service/category.service';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categori: category[]=[];
  product =[];
  search ;
  constructor(private Router : Router,
    private categoriservice : CategoryService,) { 
      this.Router.routeReuseStrategy.shouldReuseRoute=()=>false
    }

  ngOnInit(): void {  
    this.product = JSON.parse(localStorage.getItem('giohang'));

    this.getDataCate();
  }
  getDataCate(){
    this.categoriservice.getCategory().subscribe((data: any)=>{
      if(data.result == true){
        this.categori = data.dataCate;
        this.search;
      }
    })
  }

  GoToPageHome(){
    this.Router.navigate(['/index']);
  }
  GoToPageBlog(){
    this.Router.navigate(['/Blog']);
  }
  goToPageCate(categori : category ){
    this.Router.navigate(['/CategoriByID/'+ categori._id]);
  }
  GoToPageContact(){
    this.Router.navigate(['/contact']);
  }
  goToPageCart(){
    this.Router.navigate(['/cart']);
  }
  goToPageLogin(){
    this.Router.navigate(['/login']);
  }
  goToPageCreate(){
    this.Router.navigate(['/create']);
  }
  goToPageImformation(){
    this.Router.navigate(['/Imformation']);
  }
  goToPageProduct(){
    this.Router.navigate(['/Product']);
  }

}
