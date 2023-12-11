export interface SearchItem {
  name: string;
  src: string;
  label: string;
  link?: string;
  shortcut: Array<string>;
}

export enum SearchItemNames {
  ABOUT = 'about',
  CONTACT = 'contact',
  HOME = 'home',
  LINK = 'link',
  PROJECTS = 'projects',
  SOURCE = 'source',
}

export enum SearchItemShortcuts {
  ABOUT = 'A',
  CONTACT = 'C',
  ESCAPE = 'Escape',
  HOME = 'H',
  LINK = 'L',
  PROJECTS = 'P',
  SEARCH_MODULE = 'Control+m',
  SOURCE = 'S',
}
