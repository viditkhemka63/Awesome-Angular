import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShopComponent } from './components/shop/shop.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { ShowProductsComponent } from './components/admin/show-products/show-products.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'createProduct/new', component: CreateProductComponent},
  {path: 'createProduct/:id', component: CreateProductComponent},
  {path: 'showProduct', component: ShowProductsComponent},
  {path: 'shopSingle/:id', component: ShopSingleComponent},
  {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
