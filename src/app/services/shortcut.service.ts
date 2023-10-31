import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/services/notification';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class ShortcutService {
  private shortcuts: Map<string, () => void> = new Map();
  private sequence = '';

  constructor(private notificationService: NotificationService, private searchService: SearchService) {}

  registerShortcut(key: string, action: () => void) {
    this.shortcuts.set(key, action);
  }

  handleKeyPress(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Shift' || key === 'Control' || key === 'Alt') {
      return;
    }

    if (event.ctrlKey && key === 'k') {
      this.searchService.showSearchModule();
      event.preventDefault();
      return;
    }

    this.sequence += key;

    for (const [shortcut, action] of this.shortcuts.entries()) {
      if (this.sequence === shortcut) {
        action();
        if (this.sequence === 'L') {
          this.notifyLinkCopy();
        }
      }
    }
    this.sequence = '';
  }

  private notifyLinkCopy(): void {
    const notification: Notification = {
      title: $localize`Copied ;)`,
      message: $localize`You can now share this link...`,
    };
    this.notificationService.showNotification(notification);
  }
}
