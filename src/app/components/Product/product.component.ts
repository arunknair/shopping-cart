import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';
import {Item} from '../../entities/item.entity';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {
  private products: Product[];
  isImportChecked = false;
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.findAll();
    this.productService.itemToAdd = '';
  }

  importTax(product: Product) {
    product.isChecked = !(product.isChecked);
    // let cart: any = JSON.parse(localStorage.getItem('cart'));
    // let index: number = -1;
    // for (let i = 0; i < cart.length; i++) {
    //   let item: Item = JSON.parse(cart[i]);
    //   if (item.product.id === id) {
    //     item.product.tax += 5;
    //   }
    // }




    // this.isImportChecked = !(this.isImportChecked);
    // if (this.isImportChecked) {
    //   product.tax = this.productService.find(product.id).tax + 5;
    // } else{
    //   product.tax = this.productService.find(product.id).tax
    // }
  }

  addToCart(id: string) {
    this.productService.itemToAdd = id;
    this.router.navigate(['/cart']);
  }
}
