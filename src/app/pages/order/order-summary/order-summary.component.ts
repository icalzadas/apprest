import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {

  items: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.orderItems$.subscribe(items => {
      this.items = items;
    });
  }

  increaseQuantity(item: any) {
    item.qty++;
    this.orderService.updateOrder(this.items);
  }

  decreaseQuantity(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.orderService.updateOrder(this.items);
    } else {
      this.items = this.items.filter(i => i !== item);
      this.orderService.updateOrder(this.items);
    }
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.qty * item.price), 0);
  }

}
