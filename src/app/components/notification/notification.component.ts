import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isNotificationVisible" class="notification-container">
      <div class="notification">
        <div class="icon">
          <i class="ri-checkbox-circle-fill"></i>
        </div>
        <div class="content">
          <div class="title">{{ notification?.title }}</div>
          <div class="message">{{ notification?.message }}</div>
        </div>
        <div class="close-button">
          <i
            (click)="hideNotification()"
            (keyup)="hideNotification()"
            class="ri-close-fill"
            tabindex="0"></i>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public message$: Observable<Notification> | undefined;
  public notification: Notification | null = null;
  public isNotificationVisible = false;

  constructor(private notificationService: NotificationService) {}

  hideNotification() {
    this.isNotificationVisible = false;
  }

  ngOnInit() {
    this.message$ = this.notificationService.notification$;
    this.message$.subscribe((notificationReceived: Notification) => {
      this.notification = notificationReceived;
      this.isNotificationVisible = true;
      setTimeout(() => {
        this.isNotificationVisible = false;
      }, 3000);
    });
  }
}
