import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';

@Injectable()
export class ProductService {

  private products: Product[];
  checkedProductId: string;
  itemToAdd: string;
  totalItems = new Array<Item>();

  constructor() {
    this.products = [
      { id: '01', name: 'Book 1', price: 10, tax: 0, isChecked: false},
      { id: '02', name: 'Book 2', price: 15, tax: 0, isChecked: false },
      { id: '03', name: 'Music CD', price: 20, tax: 10, isChecked: false },
      { id: '04', name: 'Small Chocolate', price: 5, tax: 0, isChecked: false },
      { id: '05', name: 'Big Chocolate', price: 12, tax: 0, isChecked: false },
      { id: '06', name: 'Headache Pills', price: 5, tax: 0, isChecked: false },
      { id: '07', name: 'Cold Syrup', price: 15, tax: 0, isChecked: false },
      { id: '08', name: 'Mobile Phone', price: 100, tax: 10, isChecked: false },
      { id: '09', name: 'Laptop', price: 450, tax: 10, isChecked: false },
      { id: '10', name: 'Perfume', price: 35, tax: 10, isChecked: false },
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  public getSelectedIndex(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return i;
      }
    }
    return -1;
  }

}
