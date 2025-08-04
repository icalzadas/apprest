import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {

  categories = [
    { name: 'Tacos', id: 'tacos' },
    { name: 'Bebidas', id: 'bebidas' },
    { name: 'Combos', id: 'combos' }
  ];

  products = [
    { name: 'Taco Pastor', category: 'tacos', image: '', qty: 1, price: 50 },
    { name: 'Taco alambre', category: 'tacos', image: '', qty: 1, price: 60 },
    { name: 'Taco loco', category: 'tacos', image: '', qty: 1, price: 80 },
    { name: 'Refresco', category: 'bebidas', image: '', qty: 1, price: 20 },
    { name: 'Combo 1', category: 'combos', image: '', qty: 1, price: 100 }
  ];

  selectedCategory = 'tacos';

  constructor(private orderService: OrderService) {}

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(cat: any) {
    this.selectedCategory = cat.id;
  }

  increase(product: any) {
    product.qty++;
  }

  decrease(product: any) {
    if (product.qty > 0) {
      product.qty--;
    }
  }

  syncOrder() {
    const selectedItems = this.products.filter(p => p.qty > 0);
    this.orderService.updateOrder(selectedItems);
  }

  selectProduct(product: any) {
    this.orderService.addOrUpdateItem(product);
  }


}
