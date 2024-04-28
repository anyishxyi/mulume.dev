import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AboutComponent } from './about.component';
import { NotificationService } from '../../services/notification.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger downloadCV and show notification', () => {
    const notificationService = TestBed.inject(NotificationService);
    const downloadSpy = vi.spyOn(notificationService, 'showNotification');

    component.downloadCV();

    expect(downloadSpy).toHaveBeenCalled();
  });

  it('should calculate seniority correctly', () => {
    // Define test cases for seniority function
    const testCases = [
      { start: '2022-01-01', end: '2023-01-01', expected: '1 year' },
      { start: '2022-01-01', end: '2022-02-01', expected: '1 month' },
      { start: '2022-01-01', end: '2022-02-15', expected: '2 months' },
      { start: '2021-01-01', end: '2023-01-06', expected: '2 years 1 month' },
    ];

    for (const testCase of testCases) {
      const result = component.seniority(testCase.start, testCase.end);
      expect(result).toBe(testCase.expected);
    }
  });
});
