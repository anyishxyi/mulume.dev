import { AfterViewInit, Component } from '@angular/core';
import { ShortcutInput, ShortcutEventOutput } from "ng-keyboard-shortcuts";

@Component({
  selector: 'app-shortcut',
  standalone: true,
  template: ``
})
export class ShortcutComponent implements AfterViewInit {
  title = "Angular Router Demo";
  shortcuts: ShortcutInput[] = [];

  ngAfterViewInit() {
    this.shortcuts.push({
      key: "ctrl + a",
      preventDefault: true,
      command: (output: ShortcutEventOutput) => console.log("control + a", output),
    });
  }
}
