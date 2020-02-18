import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../../theme/shared/components/toast/toast.service';

@Component({
  selector: 'app-basic-toasts',
  templateUrl: './basic-toasts.component.html',
  styleUrls: ['./basic-toasts.component.scss']
})
export class BasicToastsComponent implements OnInit {

  constructor(public toastEvent: ToastService) { }

  ngOnInit() {
  }

}
