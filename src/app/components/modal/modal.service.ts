import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ModalService {
  private readonly $behaviorModal = new BehaviorSubject<boolean>(false);

  public get listenerIsViewModal(): Observable<boolean> {
    return this.$behaviorModal
  }

  public setVisibleModal(isVisible: boolean) {
    this.$behaviorModal.next(isVisible)
  }
}
