import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { Notification, NotificationType } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="visibility" class="notification-container">
      <div class="notification">
        <div *ngIf="type === NotificationType.SUCCESS" class="icon icon-color-success">
          <i class="ri-checkbox-circle-fill"></i>
        </div>
        <div *ngIf="type === NotificationType.FAILED" class="icon icon-color-failed">
          <i class="ri-close-circle-fill"></i>
        </div>
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
      console.log({ notificationReceived });
      this.title = notificationReceived.title;
      this.type = notificationReceived.type;
      this.message = notificationReceived.message;
      this.visibility = notificationReceived.visibility;

      if (this.visibility) {
        setTimeout(() => {
          this.hideNotification();
          console.log('visibility: ', this.visibility);
        }, 3000);
      }
    });
  }

  hideNotification(): void {
    this.visibility = false;
  }

  protected readonly NotificationType = NotificationType;
}
