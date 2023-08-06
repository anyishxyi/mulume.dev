import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  public notification$ = this.notificationSubject.asObservable();

  showNotification(notif: Notification) {
    this.notificationSubject.next(notif);
  }
}
