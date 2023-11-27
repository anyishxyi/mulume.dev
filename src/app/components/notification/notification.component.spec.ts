import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { Notification, NotificationType } from '../../services/notification';
import { Observable, of } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { By } from '@angular/platform-browser';
import spyOn = jest.spyOn;

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let notificationService: NotificationService;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;

    notificationService = TestBed.inject(NotificationService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show notification when a message is received', () => {
    const notification: Notification = {
      title: 'Test Title',
      message: 'Test Message',
      type: NotificationType.SUCCESS,
    };

    const message$: Observable<Notification> = of(notification);
    spyOn(notificationService, 'getNotification').mockReturnValue(message$);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const notificationElement = fixture.debugElement.query(By.css('.notification-container'));
      expect(notificationElement).toBeTruthy();

      const titleElement = fixture.debugElement.query(By.css('.title')).nativeElement;
      const messageElement = fixture.debugElement.query(By.css('.message')).nativeElement;

      expect(titleElement.textContent).toBe('Test Title');
      expect(messageElement.textContent).toBe('Test Message');
    });
  });

  it('should hide notification after a timeout', async () => {
    const notification: Notification = {
      title: 'Test Title',
      message: 'Test Message',
      type: NotificationType.SUCCESS,
    };

    const message$: Observable<Notification> = of(notification);

    spyOn(notificationService, 'getNotification').mockReturnValue(message$);

    fixture.detectChanges();

    await fixture.whenStable();

    const notificationElement = fixture.debugElement.query(By.css('.notification-container'));
    expect(notificationElement).toBeTruthy();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    fixture.detectChanges();
    const hiddenNotificationElement = fixture.debugElement.query(By.css('.notification-container'));
    expect(hiddenNotificationElement).toBeNull();
  });
});
