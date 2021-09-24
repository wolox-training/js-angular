import { NgModule } from '@angular/core';

/* Directives */
import { BlockCutCopyPasteDirective } from './block-cut-copy-paste.directive';

@NgModule({
  declarations: [BlockCutCopyPasteDirective],
  exports: [BlockCutCopyPasteDirective]
})
export class DirectivesModule { }
