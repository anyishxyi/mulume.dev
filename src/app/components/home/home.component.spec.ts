import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HomeComponent } from './home.component';
import { SearchService } from '../../services/search.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call displaySearchModule on button click', () => {
    const searchService = TestBed.inject(SearchService);
    const showSearchModuleSpy = vi.spyOn(searchService, 'showSearchModule');

    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();

    expect(showSearchModuleSpy).toHaveBeenCalled();
  });
});
