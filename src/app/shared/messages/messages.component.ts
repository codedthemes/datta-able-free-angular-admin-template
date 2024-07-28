import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import {SharedFacade} from '../shared.facade';
import {Messages, MessageType} from '../shared.interfaces';
import {Observable, throttleTime} from "rxjs";
import {tap} from "rxjs/operators";
type MessageWidth = 'login' | 'main';
import Swal from 'sweetalert2';
import { resolve } from '@angular/compiler-cli';

declare var $: any;
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MessagesComponent implements OnInit {
  @Input() messageWidth = 'login';
  showAlert: boolean = false;
  messageContent$ = new Observable<Messages | null>();
  constructor(protected sharedFacade: SharedFacade) {

  }

  ngOnInit(): void {
    // this.messageContent$ = this.sharedFacade.messages$;
    // this.showAlert = true;
    //   this.showNotification(this.sharedFacade.messages$);
    const type = ['','info','success','warning','danger'];
    this.sharedFacade.messages$.subscribe(null);
    this.sharedFacade.messages$.subscribe(res => {

      $.notify({
        icon: "notifications",
        // message: res.title+".",
        message: res.title+ ' <br> '+ res.text +'.'

      },{
        type: res.type == 'error'? 'danger': res.type,
        timer: 200,
        placement: {
          from: 'top',
          align: 'center'
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<a mat-button (click)="closeAlert()" type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons text-black">close</i></a>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });

    });

  }
  closeAlert() {
    this.showAlert = false; // Set showAlert to false to hide the alert
  }
  // showNotification(color){
  //   const type = ['','info','success','warning','danger'];
  //
  //   // const color = Math.floor((Math.random() * 4) + 1);
  //
  //   $.notify({
  //     icon: "notifications",
  //     message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
  //
  //   },{
  //     type: type[color],
  //     timer: 4000,
  //     placement: {
  //       from: 'top',
  //       align: 'center'
  //     },
  //     template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
  //       '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
  //       '<i class="material-icons" data-notify="icon">notifications</i> ' +
  //       '<span data-notify="title">{1}</span> ' +
  //       '<span data-notify="message">{2}</span>' +
  //       '<div class="progress" data-notify="progressbar">' +
  //       '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
  //       '</div>' +
  //       '<a href="{3}" target="{4}" data-notify="url"></a>' +
  //       '</div>'
  //   });
  // }

}



// export default class MessagesComponent implements OnInit {
//   @Input() messageWidth = 'login';
//   showAlert: boolean = false;
//   messageContent$ = new Observable<Messages | null>();
//
//   constructor(private sharedFacade: SharedFacade) {
//   }
//
//   ngOnInit(): void {
//     // this.messageContent$ = this.sharedFacade.messages$;
//     // this.showAlert = true;
//     this.sharedFacade.messages$.subscribe(res => {
//       Swal.fire({
//         position: 'center',
//         icon: res.type,
//         title: res.title,
//         text: res.text,
//         showConfirmButton: false,
//         timer: res.type == MessageType.success ? 2000 : 7000
//       })
//     });
//
//   }
//   closeAlert() {
//     this.showAlert = false; // Set showAlert to false to hide the alert
//   }
// }
