import { Component, OnInit, ViewChild } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { ProductData } from './productdata';
import { MatSelect } from '@angular/material';
import { RouterModule, Routes,Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  data: any = {
    name : "",
    description : "",
    price : "",
    category_id : {
      name : "Categories"
    },
    rating : "",
    imageName : ""
  };
  categories:any =[];
  imageName : Array<File> = [];
  id:any;

  private apiUrl = "http://localhost:8081/category";
  private apiUrl1 = "http://localhost:8081/addproduct";
  constructor(public route: ActivatedRoute,public router: Router,private http: Http) { 
    this.http.get(this.apiUrl).subscribe(res => {
      this.categories=res.json();
      console.log(this.categories);
    });

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id!=null){
      this.http.get("http://localhost:8081/product/" + this.id).subscribe(res => {
        this.data=res.json()[0];
      })
    }
  }

  ngOnInit() {
    
  }

  onSubmit() {
    if(this.id!=null){
      this.edit();
    }else{
      this.add();
    }
    
  }

  add(){
    const formData: any = new FormData();
    const files: Array<File> = this.imageName;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    formData.append('name',this.data.name);
    formData.append('description',this.data.description);
    formData.append('price',this.data.price);
    formData.append('rating',this.data.rating);
    formData.append('category_id',this.data.category_id);
    console.log('form data variable :   '+ formData.toString());
    this.http.post(this.apiUrl1, formData)
        .subscribe(files => {
          console.log('files', files);
          this.router.navigate(['/']);
        })

  }

  edit(){
    const formData: any = new FormData();
    const files: Array<File> = this.imageName;
    console.log(files);
   if(files.length!==0){
    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
   } 
    console.log(this.data.category_id);
    formData.append('name',this.data.name);
    formData.append('description',this.data.description);
    formData.append('price',this.data.price);
    formData.append('rating',this.data.rating);
    formData.append('category_id',JSON.stringify(this.data.category_id));
    console.log('form data variable :   '+ formData.toString());
    
    // let formdata = {
    //   name : this.data.name,
    //   description : this.data.description,
    //   price : this.data.price,
    //   rating : this.data.rating,
    //   category_id : this.data.category_id,
    //   uploads : [files]
    // }
    
    this.http.put("http://localhost:8081/product/" + this.id, formData)
        .subscribe(files => {
          console.log('files', files);
          this.router.navigate(['/']);
        })
  }
  
  fileChange(fileInput: any) {
      this.imageName = <Array<File>>fileInput.target.files;
      console.log('wow');
  }
}
