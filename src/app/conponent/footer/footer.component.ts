import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  GoToPagePolicy(){
    this.router.navigate(['/chinh-sach-bao-hanh-va-doi-tra-san-pham']);
  }
  GoToPageContact(){
    this.router.navigate(['/contact']);
  }

}
