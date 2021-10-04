import { NgModule } from '@angular/core';
import { StorageModule } from '@services/storage/storage.module';

@NgModule({
  imports: [
    StorageModule
  ]
})
export class UnauthGuardModule { }
