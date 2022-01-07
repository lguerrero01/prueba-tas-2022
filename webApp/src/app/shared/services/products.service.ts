import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
// ======================================
//				Interfaces
// ======================================
import { Category } from '../interfaces/Category';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // ======================================
  //				Atributes
  // ======================================
  private CATEGORIES = `${environment.BaseUrl}/categories`;
  private PRODUCTS = `${environment.BaseUrl}/products`;

  constructor(private http: HttpClient) {}

  // ======================================
  //				Obtener Todas las categorias
  // ======================================
  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CATEGORIES).pipe(
      catchError((error) => {
        return [];
      })
    );
  }

  // ======================================
  //				Obtener Todos los productos
  // ======================================
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS).pipe(
      catchError((error) => {
        return [];
      })
    );
  }
}
