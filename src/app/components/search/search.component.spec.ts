import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should handle a search event and return correct values', () => {
    const searchTerm = 'a';
    const inputElement = new ElementRef(document.createElement('input'));

    component.searchInput = inputElement;
    fixture.detectChanges();

    const inputElementNative = inputElement.nativeElement;
    inputElementNative.value = searchTerm;
    const event = new Event('input');
    inputElementNative.dispatchEvent(event);

    const filterItemsSpy = vi.spyOn(component, 'filterItems');

    component.performSearch(event);

    expect(filterItemsSpy).toHaveBeenCalledTimes(2);
    expect(filterItemsSpy).toHaveBeenNthCalledWith(1, component.generalItems, searchTerm);
    expect(filterItemsSpy).toHaveBeenNthCalledWith(2, component.pageItems, searchTerm);

    expect(filterItemsSpy.mock.results[0].value).toEqual([
      {
        name: 'contact',
        src: '/src/assets/svg/contact.svg',
        label: `Send email`,
        shortcut: ['C'],
      },
    ]);
    expect(filterItemsSpy.mock.results[1].value).toEqual([
      {
        name: 'about',
        src: '/src/assets/svg/about.svg',
        label: `About`,
        shortcut: ['A'],
      },
      {
        name: 'articles',
        src: '/src/assets/svg/articles.svg',
        label: 'Articles',
        shortcut: ['R'],
      },
    ]);
  });

  it('should handle a search event and return an empty list', () => {
    const searchTerm = 'test';
    const inputElement = new ElementRef(document.createElement('input'));

    component.searchInput = inputElement;
    fixture.detectChanges();

    const inputElementNative = inputElement.nativeElement;
    inputElementNative.value = searchTerm;
    const event = new Event('input');
    inputElementNative.dispatchEvent(event);

    const filterItemsSpy = vi.spyOn(component, 'filterItems');

    component.performSearch(event);

    expect(filterItemsSpy).toHaveBeenCalledTimes(2);
    expect(filterItemsSpy).toHaveBeenNthCalledWith(1, component.generalItems, searchTerm);
    expect(filterItemsSpy).toHaveBeenNthCalledWith(2, component.pageItems, searchTerm);

    expect(filterItemsSpy.mock.results[0].value).toEqual([]);
    expect(filterItemsSpy.mock.results[1].value).toEqual([]);
  });
});
