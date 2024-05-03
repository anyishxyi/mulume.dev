import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HeaderComponent } from './header.component';
import { SearchService } from '../../services/search.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let searchService: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit pageChange event when navigateTo is called', () => {
    const page = 'home';
    let emittedPage: string | undefined;

    component.pageChange.subscribe((p) => {
      emittedPage = p;
    });

    component.navigateTo(page);

    expect(emittedPage).toBe(page);
  });

  it('should call displaySearchModule on button click', () => {
    searchService = TestBed.inject(SearchService);
    const showSearchModuleSpy = vi.spyOn(searchService, 'showSearchModule');

    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();

    expect(showSearchModuleSpy).toHaveBeenCalled();
  });
});
