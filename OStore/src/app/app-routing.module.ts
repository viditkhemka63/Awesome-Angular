import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AuthguardGuard } from './services/authguard.guard';
import { AdminAuthGuard } from './services/admin-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'products', component: ProductsComponent},

  { path: 'shopping-cart', component: ShoppingCartComponent},

  { path: 'check-out', component: CheckOutComponent,
    canActivate: [AuthguardGuard]},

    { path: 'order-success', component: OrderSuccessComponent,
    canActivate: [AuthguardGuard]},

    { path: 'login', component: LoginComponent},

    { path: 'my/orders', component: MyOrdersComponent,
    canActivate: [AuthguardGuard]},

    { path: 'admin/products', component: AdminProductsComponent,
    canActivate: [AuthguardGuard, AdminAuthGuard]},

    { path: 'admin/orders', component: AdminOrdersComponent,
    canActivate: [AuthguardGuard, AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
