import { NgModule } from '@angular/core';
import { StorageServiceModule } from '@services/storage/storage.module';

@NgModule({
  imports: [
    StorageServiceModule
  ]
})
export class UnauthGuardModule { }
