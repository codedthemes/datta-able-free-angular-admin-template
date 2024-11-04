import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.scss']
})
export default class PatientVisitComponent implements OnInit {
  ngOnInit(): void {}
  // medicineName: string = '';
  medicalRecords = [
    {
      empNo: '7041',
      empName: 'Habib Mohamed Elhaj',
      location: 'A119',
      department: 'General Services Department',
      visitDate: '2023-12-05',
      medicineName: 'Panadol Advance 500mg Tablet',
      quantity: 1,
      serialNo: '0001'
    },
    {
      empNo: '275',
      empName: 'Suha Omar Alburogh',
      location: 'A119',
      department: 'Finance Department',
      visitDate: '2023-12-05',
      medicineName: 'Augmentin 1g Tablet',
      quantity: 1,
      serialNo: '0002'
    },
    {
      empNo: '8517',
      empName: 'Naief Mohamed Benha',
      location: 'A119',
      department: 'Purchasing & Materials Dept',
      visitDate: '2023-12-05',
      medicineName: 'Neuramin 500mg Gastro-Resistant Capsule',
      quantity: 1,
      serialNo: '0003'
    },
    {
      empNo: '554',
      empName: 'Fikrat Abab Aswit',
      location: 'A119',
      department: 'Engineering Planning Department',
      visitDate: '2023-12-05',
      medicineName: 'Panadol Sinus 12 Tablets',
      quantity: 1,
      serialNo: '0004'
    },
    {
      empNo: '8566',
      empName: 'Mazen Gamal Amer',
      location: 'A119',
      department: 'Legal Department',
      visitDate: '2023-12-05',
      medicineName: 'Dihydral Cream 2%',
      quantity: 1,
      serialNo: '0005'
    },
    {
      empNo: '868',
      empName: 'Maad Abderrazag Latar',
      location: 'A119',
      department: 'Purchasing & Materials Dept',
      visitDate: '2023-12-05',
      medicineName: 'Augmentin 875mg/125mg Tablet',
      quantity: 1,
      serialNo: '0006'
    },
    {
      empNo: '8318',
      empName: 'Tariq Salah Benbaalol',
      location: 'A119',
      department: 'Purchasing & Materials Dept',
      visitDate: '2023-12-05',
      medicineName: 'Ciprofloxacin 750mg Tablet',
      quantity: 1,
      serialNo: '0007'
    },
    {
      empNo: '8338',
      empName: 'Osama Omar Bensaad',
      location: 'A119',
      department: 'Engineering Planning Department',
      visitDate: '2023-12-05',
      medicineName: 'Fluclox Cream 2%',
      quantity: 1,
      serialNo: '0008'
    },
    {
      empNo: '8338',
      empName: 'Osama Omar Bensaad',
      location: 'A119',
      department: 'Engineering Planning Department',
      visitDate: '2023-12-05',
      medicineName: 'Puden Cream 2%',
      quantity: 1,
      serialNo: '0009'
    },
    {
      empNo: '8338',
      empName: 'Osama Omar Bensaad',
      location: 'A119',
      department: 'Engineering Planning Department',
      visitDate: '2023-12-05',
      medicineName: 'Panadol Joint Tablets',
      quantity: 1,
      serialNo: '0010'
    }
  ];
}
