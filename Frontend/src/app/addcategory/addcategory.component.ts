import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { MatSelect } from '@angular/material';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  name:string = "";
  description:string = "";
  private apiUrl = "http://localhost:8081/addcategory";

  constructor(public router: Router,private http: Http) { }

  ngOnInit() {
  }
  
  onSubmit() {
    let formData = {
      name : this.name,
      description:this.description,
    };
    console.log(formData);
    
    this.http.post(this.apiUrl,formData)  
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/']);
    })
  }

  
}
