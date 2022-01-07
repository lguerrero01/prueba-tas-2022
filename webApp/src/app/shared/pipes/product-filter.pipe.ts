import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/Product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(list: Product[], filters: any) {
    filters.name = filters.name ? filters.name.toLowerCase() : '';
    filters.categories = parseInt(filters.categories);

    const keys = Object.keys(filters).filter((key) => filters[key]);

    return keys.length
      ? list.filter((product: any) => {
          return keys.every((key) => {
            return product[key].includes(filters[key]);
          });
        })
      : list;
  }
}
