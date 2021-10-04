import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* External services */
import { StorageService } from '@services/storage/storage.service';

/* Constants */
import { KEYS_STORAGE } from '@constants/storageKeys';

@Component({
  selector: 'wlx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService
  ) { }

  public logout(): void {
    this.storageService.localRemoveItem(KEYS_STORAGE.access_token)
    this.router.navigateByUrl('/')
  }
}
