import {Component, Input, OnInit} from '@angular/core';
import {ToastService} from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() uID: string;
  @Input() toastTitle: string;
  @Input() toastCaption: string;
  @Input() toastClass: string;

  public isShow: boolean;

  constructor(public toastEvent: ToastService) {
    this.isShow = false;
  }

  ngOnInit() {
    this.toastEvent.toggleToast.subscribe((toast) => {
      document.querySelector('#' + toast.uid).classList.add('show');
      setTimeout(() => {
        document.querySelector('#' + toast.uid).classList.remove('show');
      }, toast.delay ? toast.delay : 500);
    });
  }

  closeToast(uid) {
    document.querySelector('#' + uid).classList.remove('show');
  }

}
