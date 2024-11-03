import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})

export default class MedicineComponent implements OnInit {
  medicineName: string = "";
  medicines = [
    { name: 'Amoxil 1000mg Pharma', madeBy: 'Sandoz', package: '10 Film-Coated Tablets', expiryDate: '06/2023', category: 'Infection' },
    { name: 'Amoxil 250mg Caps', madeBy: 'Athlone Lab', package: '21 Cap Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Amoxil Syrup 125mg/5ml Oral Suspension', madeBy: 'GSK', package: '100ml Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Augmentin 250mg/125mg Tablet', madeBy: 'GSK', package: '21Tab-Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Augmentin 500mg/125mg Tablet', madeBy: 'GSK', package: '14Tab-Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Augmentin 875mg/125mg Tablet', madeBy: 'GSK', package: '10Tab Pack', expiryDate: '03/2023', category: 'Infection' },
    {
      name: 'Augmentin 400mg/57mg/5ml Oral Suspension',
      madeBy: 'LACHIFARMA',
      package: '30ml Pack',
      expiryDate: '03/18',
      category: 'Infection'
    },
    {
      name: 'Azithromycin 200mg/5ml Oral Suspension',
      madeBy: 'Pfizer',
      package: '30ml Pack',
      expiryDate: '01/2023',
      category: 'Infection'
    },
    { name: 'Bactrim 400mg Tablets', madeBy: 'Roche', package: '20-Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Bactroban Ointment 2%', madeBy: 'GSK', package: '5g Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Cifran 500mg Tablets', madeBy: 'LACHIFARMA', package: '6 Tab-Pack', expiryDate: '05/2023', category: 'Infection' },
    { name: 'Ciprofloxacin 750mg Tab', madeBy: 'Sandoz', package: '75-HIPack', expiryDate: '05/2023', category: 'Infection' },
    { name: 'Curam 156mg/5ml Oral Suspension', madeBy: 'Sandoz', package: '75-HIPack', expiryDate: '03/2023', category: 'Infection' },
    { name: 'Curam 228mg/5ml Oral Suspension', madeBy: 'Sandoz', package: '5 Pcs Pack', expiryDate: '05/2023', category: 'Infection' },
    { name: 'Curam 457mg/5ml Oral Suspension', madeBy: 'Sandoz', package: '1Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Fluclox 500mg Capsules', madeBy: 'KENT', package: '25 Pack', expiryDate: '02/2023', category: 'Infection' },
    { name: 'Fluclox Syrup 125mg/5ml', madeBy: 'Sanofi', package: '70ml Pack', expiryDate: '01/2023', category: 'Infection' },
    { name: 'Klaricid 125mg/5ml Oral Suspension', madeBy: 'Abbott', package: '70ml Pack', expiryDate: '01/2023', category: 'Infection' },
    {
      name: 'Klaricid Forte 250mg/5ml Oral Suspension',
      madeBy: 'Abbott',
      package: '10Tab-Pack',
      expiryDate: '11/2022',
      category: 'Infection'
    },
    { name: 'Metronidazole 500mg Tablets', madeBy: 'Sandoz', package: '21Tab-Pack', expiryDate: '01/2023', category: 'Infection' },
    {
      name: 'Retarpen (Benzathine Penicillin 1,200,000 IU) Powder for IM Injection',
      madeBy: 'Sandoz',
      package: 'Pack',
      expiryDate: '',
      category: 'Infection'
    }
  ];
  getMedicines(){
    return this.medicines.filter(item => item.name.toLowerCase().includes(this.medicineName.toLowerCase()));
  }
  ngOnInit(): void {}
}
