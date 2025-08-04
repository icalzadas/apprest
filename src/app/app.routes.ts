import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PosLayoutComponent } from './layout/pos-layout/pos-layout.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

export const routes: Routes = [
    { 
      path: '', 
      component: MainLayoutComponent, 
      children: [
          { path: '', component: HomeComponent }          
      ] 
    },
    {
      path: 'order',
      component: PosLayoutComponent,
      children: [
        { path: '', component: OrderComponent }
      ]
    },
    { path: 'products', 
      component: AdminLayoutComponent, 
      children: [
        { path: '', component: ProductFormComponent }
      ]
    }
];
