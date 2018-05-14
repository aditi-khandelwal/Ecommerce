import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {HttpModule} from '@angular/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';






import { AppComponent } from './app.component';
import { MenutopComponent } from './menutop/menutop.component';
import {MatButtonModule} from '@angular/material/button';
import { CategoryComponent } from './category/category.component';
import { LatestComponent } from './latest/latest.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ROUTING,AppRoutes } from './app.routing';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MenutopComponent,
    CategoryComponent,
    LatestComponent,
    AddproductComponent,
    MainpageComponent,
    AddcategoryComponent,
    ProductpageComponent,
    ProductlistComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpModule,
    ROUTING,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatGridListModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
