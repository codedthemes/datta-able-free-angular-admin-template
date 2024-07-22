import {Component, OnInit} from '@angular/core';
import {SharedFacade} from '../shared.facade';
// import {MatDialog} from '@angular/material/dialog';
// import Swal from 'sweetalert2';
import {MessageType} from '../shared.interfaces';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  // constructor(private sharedFacade: SharedFacade,
  //             private dialog: MatDialog,) {
  // }

  ngOnInit(): void {
    // this.sharedFacade.messages$.subscribe(res => {
    //   Swal.fire({
    //     position: 'center',
    //     icon: res.type,
    //     title: res.title,
    //     text: res.text,
    //     showConfirmButton: false,
    //     timer: res.type == MessageType.success ? 2000 : 7000
    //   })
    // });
  }

}
