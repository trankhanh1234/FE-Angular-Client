import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { category } from 'src/app/model/categori.model';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss']
})
export class LayoutHomeComponent implements OnInit {
  categori : category[]=[];
  product = [];

  constructor(private Router : Router,
    private categoriservice : CategoryService) { }

  ngOnInit(): void {

    this.categoriservice.getCategory().subscribe((data: any)=>{
      if(data.result == true){
        this.categori = data.dataCate; 
        console.log(this.categori);
      }
    })
  }
  goToPageCate(categori : category ){
    this.Router.navigate(['/CategoriByID/'+ categori._id]);
  }

}
