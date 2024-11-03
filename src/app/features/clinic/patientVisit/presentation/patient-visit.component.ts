import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.scss']
})
export default class PatientVisitComponent implements OnInit {
  ngOnInit(): void {}
  medicineName: string = "";

}
