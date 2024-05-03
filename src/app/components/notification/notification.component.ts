import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { Notification, NotificationType } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  template: `
    @if (visibility) {
      <div class="notification-container">
        <div class="notification">
          @if (type === NotificationType.SUCCESS) {
            <div class="icon icon-color-success">
              <i class="ri-checkbox-circle-fill"></i>
            </div>
          }
          @if (type === NotificationType.FAILED) {
            <div class="icon icon-color-failed">
              <i class="ri-close-circle-fill"></i>
            </div>
          }
          <div class="content">
            <div class="title">{{ title }}</div>
            <div class="message">{{ message }}</div>
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
    }
  `,
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, Notification {
  public message$: Observable<Notification> | undefined;
  message: string = '';
  title: string = '';
  type: NotificationType = NotificationType.SUCCESS;
  visibility: boolean = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.message$ = this.notificationService.getNotification();
    this.message$.subscribe((notificationReceived: Notification) => {
      this.title = notificationReceived.title;
      this.type = notificationReceived.type;
      this.message = notificationReceived.message;
      this.visibility = notificationReceived.visibility;

      if (this.visibility) {
        setTimeout(() => {
          this.hideNotification();
        }, 3000);
      }
    });
  }

  hideNotification(): void {
    this.visibility = false;
  }

  protected readonly NotificationType = NotificationType;
}
