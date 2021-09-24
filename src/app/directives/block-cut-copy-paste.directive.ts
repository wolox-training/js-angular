import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[wlxBlockCutCopyPaste]'
})
export class BlockCutCopyPasteDirective {

  @HostListener('cut', ['$event']) blockCutCommand(e: KeyboardEvent) {
    e.preventDefault()
  }

  @HostListener('copy', ['$event']) blockCopyCommand(e: KeyboardEvent) {
    e.preventDefault()
  }

  @HostListener('paste', ['$event']) blockPasteCommand(e: KeyboardEvent) {
    e.preventDefault()
  }
}
