import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selectedItems = [];

  total = 0;

  constructor(private cartService: CartService, private alertControl: AlertController) { }

  ngOnInit() {
    const items = this.cartService.getCart();
    const selected = {};
    for (const obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

  async checkOut() {
    const alert = await this.alertControl.create({
      header: 'Thank You!',
      message: 'Your order has been placed.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
