import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router,ActivatedRoute } from '@angular/router';
import {Http,Response} from '@angular/http';



@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  id:any;
  data:any = {};
  private apiUrl = "http://localhost:8081/product"
  constructor(public route: ActivatedRoute,private http: Http) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiUrl += "/" + this.id;
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.http.get(this.apiUrl).subscribe(res => {
      this.data=res.json();
      console.log(this.data);
    });
  }
}
