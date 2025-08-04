import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductSearchDialogComponent } from '../product-search-dialog/product-search-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  product = { name: '', category: '', price: null };

  constructor(private dialog: MatDialog, private productService: ProductService) {}

  saveProduct() {
    this.productService.saveProduct({ ...this.product });
    this.product = { name: '', category: '', price: null };
  }

  openSearchDialog() {
    const dialogRef = this.dialog.open(ProductSearchDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(selectedProduct => {
      if (selectedProduct) {
        this.product = { ...selectedProduct };
      }
    });
  }

}
