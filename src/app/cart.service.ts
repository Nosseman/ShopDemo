import { Injectable } from '@angular/core';
//import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Movies',
      products: [
        // tslint:disable-next-line: max-line-length
        { id: 0, name: 'Infinity War', price: '10', img: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX140_CR0,0,140,207_AL_.jpg' },
        // tslint:disable-next-line: max-line-length
        { id: 1, name: 'Endgame', price: '15', img: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX140_CR0,0,140,207_AL_.jpg' },
        // tslint:disable-next-line: max-line-length
        { id: 2, name: 'Last Jedi', price: '15', img: 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX140_CR0,0,140,207_AL_.jpg' },
        // tslint:disable-next-line: max-line-length
        { id: 3, name: 'Force', price: '7', img: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY207_CR0,0,140,207_AL_.jpg' }
      ]
    },
    {
      category: 'Games',
      products: [
        // tslint:disable-next-line: max-line-length
        { id: 4, name: 'RDR2', price: '69', img: 'https://images-na.ssl-images-amazon.com/images/I/51J6PtRgQrL._SX215_.jpg' },
        // tslint:disable-next-line: max-line-length
        { id: 5, name: 'GTA V', price: '30', img: 'https://images-na.ssl-images-amazon.com/images/I/61%2Bs8HfeFoL._SX215_.jpg' },
        // tslint:disable-next-line: max-line-length
        { id: 6, name: 'God of War', price: '49', img: 'https://m.media-amazon.com/images/I/811czebxtnL._AC_UL320_ML3_.jpg' }
      ]
    },
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }

}
