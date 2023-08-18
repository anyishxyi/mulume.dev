// shortcut.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShortcutService {
  private shortcuts: Map<string, () => void> = new Map();
  private sequence: string = '';

  registerShortcut(key: string, action: () => void) {
    this.shortcuts.set(key, action);
  }

  handleKeyPress(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Shift' || key === 'Control' || key === 'Alt') {
      return;
    }
    this.sequence += key;

    for (const [shortcut, action] of this.shortcuts.entries()) {
      if (this.sequence === shortcut) {
        this.sequence = '';
        action();
        return;
      }
    }
  }

}
