import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/* Services */
import { ModalService } from '@components/modal/modal.service';

@Component({
  selector: 'wlx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  public isViewModal: boolean = false;
  private readonly $unsubscribe = new Subject<boolean>()
  constructor(
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.listenerIsViewModal
      .pipe(
        takeUntil(this.$unsubscribe)
      ).subscribe((isViewModal: boolean) => this.isViewModal = isViewModal)
  }

  ngOnDestroy() {
    this.$unsubscribe.next(true);
    this.$unsubscribe.complete()
  }

  public closeModal() {
    this.modalService.setVisibleModal(false)
  }
}
