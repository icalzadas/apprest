import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  items = [
    { name: 'Item 1', quantity: 1, price: 50 },
    { name: 'Item 2', quantity: 2, price: 30 }
  ];

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }

}
