/**
 * Order Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  // Slider Options
  slideOpts = {
    initialSlide: 0,
    autoplay: true,
  };

  // Order Options
  options: any = [{
    title: 'Delivered',
    isSelected: true
  }, {
    title: 'Processing',
    isSelected: false
  }, {
    title: 'Cancelled',
    isSelected: false
  }];

  // Orders Sample Data
  orders: any = [{
    orderId: '#2',
    date: '16/12/2020',
    trackingNumber: 'AQWNQWEIC',
    quantity: 4,
    totalPrice: 245
  }, {
    orderId: '#1',
    date: '20/11/2020',
    trackingNumber: 'WNQWEIC',
    quantity: 2,
    totalPrice: 500
  }];

  constructor() { }

  ngOnInit() { }

  // Change Order Option Function
  changeOption(option, index) {
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].isSelected = false;
    }

    this.options[index].isSelected = true;
  }
}
