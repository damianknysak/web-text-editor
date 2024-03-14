import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-text-editor-area',
  templateUrl: './text-editor-area.component.html',
  styleUrls: ['./text-editor-area.component.css'],
})
export class TextEditorAreaComponent {
  key: string | undefined;
  currentString: string | undefined;
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    this.currentString += event.key;
    console.log(this.key);
  }
}
