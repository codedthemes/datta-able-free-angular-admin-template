import {EventEmitter, Injectable, Output} from '@angular/core';
interface Toast {
  id: string;
  delay: number;
}

@Injectable()
export class ToastService {
  @Output() toggleToast: EventEmitter<Toast> = new EventEmitter();
  constructor() { }

  toast(event) {
    this.toggleToast.emit(event);
  }
}
