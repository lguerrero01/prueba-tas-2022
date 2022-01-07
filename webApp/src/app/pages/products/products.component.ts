import { Category } from './../../shared/interfaces/Category';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/Product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // ======================================
  //			Atributes
  // ======================================
  // public nameProduct: string = '';
  public name: string = '';
  public allCategory: Category[] = [];
  public categories: number = 0;
  public listCategories: Category[] = [];
  public products: Product[] = [];
  public productsFilter: Product[] = [];

  // ======================================
  //			Constructor
  // ======================================

  constructor(private productsService: ProductsService) {}

  // ======================================
  //			Oninit
  // ======================================
  ngOnInit(): void {
    
    this.productsService
      .getCategories()
      .subscribe((categories) => (this.allCategory = categories));

    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.productsFilter = this.products;
      // console.log('estos son los productos', this.products);
    });
  }

  // ======================================
  //			Filtrar Productos
  // ======================================
  public filterProducts(event: KeyboardEvent) {
    const key = (event.target as HTMLInputElement).value;
    this.productsFilter = this.products.filter(
      (product) => product.name == key.toLowerCase()
    );
  }

  // ======================================
  //			Ordenar Productos
  // ======================================

  public orderDesc() {
    this.productsFilter.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
  }

  public orderAsc() {
    this.productsFilter.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  }
}
