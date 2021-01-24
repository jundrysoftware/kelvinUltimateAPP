import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  getNotifications() {
    return [
      {
        title: "Soport",
        message: "test.",
        date: "12/20",
        status: false,
      },
      {
        title: "Black Friday 2020",
        message: "test.",
        date: "12/20",
        status: true
      }
    ]
  }
}
