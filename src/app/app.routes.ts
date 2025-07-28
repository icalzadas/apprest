import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PosLayoutComponent } from './layout/pos-layout/pos-layout.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
    { 
        path: '', component: MainLayoutComponent, 
        children: [
            { path: '', component: HomeComponent },            
        ] 
    },
    {
      path: 'order',
      component: PosLayoutComponent,
      children: [
        { path: '', component: OrderComponent }
      ]
    }
];
