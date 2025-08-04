import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderItems = new BehaviorSubject<any[]>([]);
  orderItems$ = this.orderItems.asObservable();
  private currentItems: any[] = [];

  constructor() {}

  updateOrder(items: any[]) {
    this.orderItems.next(items);
  }

  addOrUpdateItem(product: any) {
    const existingItem = this.currentItems.find(p => p.name === product.name);
    if (existingItem) {
      existingItem.qty = product.qty;
    } else {
      this.currentItems.push({ ...product });
    }
    this.orderItems.next(this.currentItems);
  }
}

