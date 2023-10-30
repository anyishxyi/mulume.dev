import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { NotificationService } from 'src/app/services/notification.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      providers: [NotificationService],
    });

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger downloadCV and show notification', () => {
    const notificationService = TestBed.inject(NotificationService);
    const downloadSpy = spyOn(notificationService, 'showNotification');

    component.downloadCV();

    expect(downloadSpy).toHaveBeenCalled();
  });

  it('should calculate seniority correctly', () => {
    // Define test cases for seniority function
    const testCases = [
      { start: '2022-01-01', end: '2023-01-01', expected: '1 year' },
      { start: '2022-01-01', end: '2022-02-01', expected: '1 month' },
      { start: '2022-01-01', end: '2022-02-15', expected: '1 month 15 days' },
      { start: '2022-01-01', end: '2022-01-15', expected: '15 days' },
      { start: '2022-01-01', end: '2022-01-01', expected: '1 month' },
    ];

    for (const testCase of testCases) {
      const result = component.seniority(testCase.start, testCase.end);
      expect(result).toBe(testCase.expected);
    }
  });
});
