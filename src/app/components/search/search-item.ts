export interface SearchItem {
  name: string;
  src: string;
  label: string;
  link?: string;
  shortcut: Array<string>;
}

export enum SearchItemNames {
  ABOUT = 'about',
  BLOG = 'blog',
  CONTACT = 'contact',
  HOME = '/',
  LINK = 'link',
  PROJECTS = 'projects',
  SOURCE = 'source',
}

export enum SearchItemShortcuts {
  ABOUT = 'A',
  BLOG = 'B',
  CONTACT = 'C',
  ESCAPE = 'Escape',
  HOME = 'H',
  LINK = 'L',
  PROJECTS = 'P',
  SEARCH_MODULE = 'Control+m',
  SOURCE = 'S',
}
