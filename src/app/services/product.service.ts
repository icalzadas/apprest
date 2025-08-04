import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: any[] = [
    { name: 'Taco Pastor', category: 'tacos', price: 20 },
    { name: 'Refresco', category: 'bebidas', price: 15 }
  ];

  getProducts() {
    return [...this.products];
  }

  saveProduct(product: any) {
    const index = this.products.findIndex(p => p.name === product.name);
    if (index >= 0) {
      this.products[index] = product;
    } else {
      this.products.push(product);
    }
  }
}
