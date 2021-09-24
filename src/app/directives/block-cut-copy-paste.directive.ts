import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[wlxBlockCutCopyPaste]'
})
export class BlockCutCopyPasteDirective {

  constructor() { }

  @HostListener('cut', ['$event']) blockCutCommand(e: KeyboardEvent) {
    console.log(e)
    e.preventDefault()
  }

  @HostListener('copy', ['$event']) blockCopyCommand(e: KeyboardEvent) {
    e.preventDefault()
  }

  @HostListener('paste', ['$event']) blockPasteCommand(e: KeyboardEvent) {
    e.preventDefault()
  }
}
