import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  registerForm: FormGroup;
  image;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      password :['',Validators.compose([Validators.required, Validators.minLength(9)])],
      phoneNumber :[''],
      address: ['',Validators.compose([Validators.required, Validators.minLength(5)])],
      avatar :[''],
  }, );
  }
  get f(){
    return this.registerForm.controls;
  }
  onFileSelected(event){
    //this.selectedFile = <File>event.target.file[0];
    if( event.target.files.length >0)
    {
      const file = event.target.files[0];
      this.image = file;
      console.log(file); 
    }  
  }
  createProvider(f){

  }

}
