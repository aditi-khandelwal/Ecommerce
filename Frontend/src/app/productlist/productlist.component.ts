import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Routes,Router } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  products:any = [];
  private apiUrl = "http://localhost:8081/product";
  
  constructor(public router: Router,private http: Http) {
    this.getData();
  }

  getData(){
      this.http.get(this.apiUrl).subscribe(res => {
      this.products=res.json();
      console.log(this.products);
    });
  }

  ngOnInit() {
  }

  addProductFormRedirection() {
    console.log('Works');
    this.router.navigate(['/addProduct']);
  }


  deleteData(pId:any) {
    console.log(pId);
    this.apiUrl += "/" + pId;
    this.http.delete(this.apiUrl).subscribe(res => {
      this.products=res.json();
      console.log(this.products);
    });
    window.location.reload();
  }

  updateData(pId:any){
    this.router.navigate(['/addProduct',{id:pId}]);
  }

  
}
