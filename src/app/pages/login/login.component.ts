import { Component } from '@angular/core';
import { IconStockeeLogoBwComponent } from '../../icons/icon-stockee-logo-bw/icon-stockee-logo-bw.component';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonPrimaryComponent } from '../../shared/button-primary/button-primary.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconStockeeLogoBwComponent,InputComponent,ButtonPrimaryComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:FormGroup;
  FormData!:any

  constructor( private formBuilder:FormBuilder){

    this.loginForm = formBuilder.group({
      email:[''],
      senha:[''],
    })

  }



  onSubmit(){
    this.FormData = this.loginForm.getRawValue()
    alert( JSON.stringify(this.FormData))
  }

}
