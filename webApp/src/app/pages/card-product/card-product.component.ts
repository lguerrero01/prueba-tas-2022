import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/Product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent implements OnInit {
  @Input('product') product!: Product;

  constructor() {}

  ngOnInit(): void {}

  public addCart(product: Product) {
  }
}
