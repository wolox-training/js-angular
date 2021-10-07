import { NgModule } from '@angular/core';
import { FilterPipe } from '@pipes/filter/filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  exports: [FilterPipe]
})
export class FilterPipeModule { }
