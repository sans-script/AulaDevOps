import { Component } from '@angular/core';
import { IconStockeeLogoBwComponent } from '../../icons/icon-stockee-logo-bw/icon-stockee-logo-bw.component';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonPrimaryComponent } from '../../shared/button-primary/button-primary.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconStockeeLogoBwComponent,InputComponent,ButtonPrimaryComponent,FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:FormGroup;
  FormData!:any
  Condition:boolean = false

  constructor( private formBuilder:FormBuilder){

    this.loginForm = formBuilder.group({
      email:[''],
      senha:[''],
      user:[''],
    })

  }



  onSubmit(){
    this.Condition = !this.Condition
    // this.FormData = this.loginForm.getRawValue()
    // alert( JSON.stringify(this.FormData))
  }

}
