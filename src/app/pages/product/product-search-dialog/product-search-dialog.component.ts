import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-search-dialog',
  imports: [
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './product-search-dialog.component.html',
  styleUrl: './product-search-dialog.component.css'
})
export class ProductSearchDialogComponent implements OnInit {

  products: any[] = [];
  displayedColumns = ['name', 'category', 'price', 'select'];

  constructor(private productService: ProductService, private dialogRef: MatDialogRef<ProductSearchDialogComponent>) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: any) {
    this.dialogRef.close(product);
  }
}
