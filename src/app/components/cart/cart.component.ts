import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../entities/item.entity';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;
  private totaltax: number = 0;
  private includetax: number = 0;
  item: Item;
  


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
      let id = this.productService.itemToAdd;
      if (id) {
        this.item = {
          product: this.productService.find(id),
          quantity: 1
        };
        this.productService.totalItems.push(this.item);
        // if (localStorage.getItem('cart') == null) {
        //   let cart: any = [];popl;./56
        //   cart.push(JSON.stringify(this.item));
        //   localStorage.setItem('cart', JSON.stringify(cart));
        // } else {
        //   let cart: any = JSON.parse(localStorage.getItem('cart'));
        //   let index: number = -1;
        //   for (let i = 0; i < cart.length; i++) {
        //     let item: Item = JSON.parse(cart[i]);
        //     if (item.product.id === id) {
        //       index = i;
        //       break;
        //     }
        //   }
        //   if (index === -1) {
        //     cart.push(JSON.stringify(this.item));
        //     localStorage.setItem('cart', JSON.stringify(cart));
        //   } else {
        //     let item: Item = JSON.parse(cart[index]);
        //     item.quantity += 1;
        //     cart[index] = JSON.stringify(item);
        //     localStorage.setItem('cart', JSON.stringify(cart));
        //   }
        // }
        this.loadCart();
      } else {
        this.loadCart();
      }
    // });
  }

  loadCart(): void {
    this.total = 0;
    this.includetax = 0;
    this.totaltax = 0;
    this.items = this.productService.totalItems;
    // let cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < this.items.length; i++) {
      // let item = JSON.parse(cart[i]);
      // this.items.push({
      //   product: item.product,
      //   quantity: item.quantity
      // });
      this.total += (this.items[i].product.price * this.items[i].quantity);
      if ( this.total > 100) {
        this.total += this.total * 0.02;
      }
      if (this.items[i].product.isChecked) {
        this.totaltax += (this.items[i].product.price * (this.items[i].product.tax + 5) / 100) * this.items[i].quantity;
      } else {
        this.totaltax += (this.items[i].product.price * this.items[i].product.tax / 100) * this.items[i].quantity;
      }

      this.includetax = this.total + this.totaltax;
    }
  }

  remove(id: string): void {
    // let cart: any = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < this.productService.totalItems.length; i++)
    {
      if (id === this.productService.totalItems[i].product.id) {
        this.productService.totalItems.splice(i);
        break;
      }
    }
    
    // let index: number = -1;
    // for (let i = 0; i < cart.length; i++) {
    //   let item: Item = JSON.parse(cart[i]);
    //   if (item.product.id === id) {
    //     cart.splice(i, 1);
    //     break;
    //   }
    // }
    // localStorage.setItem('cart', JSON.stringify(cart));
    console.log('aaaaaaaa', this.productService.totalItems);
    this.loadCart();
  }
}
