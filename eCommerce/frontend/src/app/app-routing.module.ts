import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShopComponent } from './components/shop/shop.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { ShowProductsComponent } from './components/admin/show-products/show-products.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'createProduct', component: CreateProductComponent},
  {path: 'showProduct', component: ShowProductsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
