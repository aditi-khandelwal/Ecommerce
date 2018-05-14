import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private apiUrl = "http://localhost:8081/product";
  data:any = [];
  constructor(public router: Router,private http: Http) {
    
    this.getData();
    // console.log(this.data);
   
  }

   getData(){
      this.http.get(this.apiUrl).subscribe(res => {
        this.data=res.json();
        console.log(this.data);
      })
    
  }
  ngOnInit() {
  }
  reDirect(item: any){
    // console.log(item);
    this.router.navigate(['/productPage',{id:item._id}]);

  }

}
