import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* External services */
import { StorageService } from '@services/storage/storage.service';

/* Constants */
import { KEYS_STORAGE } from '@constants/storageKeys';
import { ShoppingService } from '@books/services/shopping/shopping.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from '@components/modal/modal.service';

@Component({
  selector: 'wlx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public sizeBookSelected: number = 0;
  private readonly $unsubscriber: Subject<boolean> = new Subject()
  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly shoppingService: ShoppingService,
    private readonly modalService: ModalService,
  ) { }

  ngOnInit() {
    this.listenSizeBooksSelected()
  }

  ngOnDestroy() {
    this.$unsubscriber.next(true)
    this.$unsubscriber.complete()
  }

  private listenSizeBooksSelected() {
    this.shoppingService.getTotalAdded().pipe(
      takeUntil(this.$unsubscriber)
    ).subscribe((size: number) => {
      this.setSizeBookSelected(size)
    })
  }

  private setSizeBookSelected(size: number) {
    this.sizeBookSelected = size;
  }

  public logout(): void {
    this.storageService.localRemoveItem(KEYS_STORAGE.access_token)
    this.router.navigateByUrl('/')
  }

  public openModal(): void {
    this.modalService.setVisibleModal(true)
  }
}
