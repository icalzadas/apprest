import { Component } from '@angular/core';
import { OrderSummaryComponent } from '../order/order-summary/order-summary.component';
import { ProductGridComponent } from '../order/product-grid/product-grid.component';
import { BottomBarComponent } from '../order/bottom-bar/bottom-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    OrderSummaryComponent,
    ProductGridComponent,
    BottomBarComponent
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {}
