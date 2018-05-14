import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductlistComponent } from './productlist/productlist.component';




export const AppRoutes: Routes = [
    { path: '', component: MainpageComponent},
    { path: 'addProduct', component: AddproductComponent },
    { path: 'addCategory', component: AddcategoryComponent },
    { path: 'productPage', component: ProductpageComponent },
    { path: 'allProducts', component: ProductlistComponent },
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);