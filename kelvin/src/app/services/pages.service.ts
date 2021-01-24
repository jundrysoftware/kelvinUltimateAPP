import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getPages() {
    return [
      {
        title: 'Home',
        url: '/tabs/tab1',
        icon: 'home'
      },
      {
        title: 'Categories',
        url: '/tabs/categories',
        icon: 'grid'
      },
      {
        title: 'Cart',
        url: '/cart',
        icon: 'cart'
      },
      {
        title: 'Search',
        url: '/tabs/search',
        icon: 'search'
      },
      {
        title: 'Wishlist',
        url: '/tabs/tab3',
        icon: 'heart'
      },
      {
        title: 'Notification',
        url: '/tabs/tab4',
        icon: 'notifications-outline'
      },
      {
        title: 'Orders',
        url: '/tabs/orders',
        icon: 'checkmark-circle-outline'
      }
    ];
  }
}
