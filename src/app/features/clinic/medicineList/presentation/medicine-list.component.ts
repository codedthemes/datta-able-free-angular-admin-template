import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})

export default class MedicineListComponent implements OnInit {
  medicineName: string = "";
   medicinesInventory = [
    { serialNo: "0001", medicineName: "Amoxil 1000mg Pharma", package: "10 Film-Coated Tablets", category: "Infection", quantity: "0000", manufacturer: "Sandoz", expiryDate: "06/2023", price: "00000.000" },
    { serialNo: "0002", medicineName: "Amoxil 250mg Caps", package: "21 Cap Pack", category: "Infection", quantity: "0000", manufacturer: "Athlone Lab", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0003", medicineName: "Amoxil Syrup 125mg/5ml Oral Suspension", package: "100ml Pack", category: "Infection", quantity: "0000", manufacturer: "GSK", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0004", medicineName: "Augmentin 250mg/125mg Tablet", package: "21 Tab-Pack", category: "Infection", quantity: "0000", manufacturer: "GSK", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0005", medicineName: "Augmentin 500mg/125mg Tablet", package: "14 Tab-Pack", category: "Infection", quantity: "0000", manufacturer: "GSK", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0006", medicineName: "Augmentin 875mg/125mg Tablet", package: "10 Tab Pack", category: "Infection", quantity: "0000", manufacturer: "GSK", expiryDate: "08/2023", price: "00000.000" },
    { serialNo: "0007", medicineName: "Azithromycin 200mg/5ml Oral Suspension", package: "30ml Pack", category: "Infection", quantity: "0000", manufacturer: "Lachipharma", expiryDate: "03/2022", price: "00000.000" },
    { serialNo: "0008", medicineName: "Azithromycin 500mg Tablets", package: "5 Tab Pack", category: "Infection", quantity: "0000", manufacturer: "Lachipharma", expiryDate: "12/2022", price: "00000.000" },
    { serialNo: "0009", medicineName: "Bactrim 400mg Tablets", package: "20-Pack", category: "Infection", quantity: "0000", manufacturer: "Roche", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0010", medicineName: "Bactroban Ointment 2%", package: "5g Pack", category: "Infection", quantity: "0000", manufacturer: "GSK", expiryDate: "11/2022", price: "00000.000" },
    { serialNo: "0011", medicineName: "Cifran 500mg Tablets", package: "75 HIPack", category: "Infection", quantity: "0000", manufacturer: "Sandoz", expiryDate: "07/2023", price: "00000.000" },
    { serialNo: "0012", medicineName: "Ciprofloxacin 750mg Tab", package: "75 HIPack", category: "Infection", quantity: "0000", manufacturer: "Sandoz", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0013", medicineName: "Curam 156mg/5ml Oral Suspension", package: "5 Pcs Pack", category: "Infection", quantity: "0000", manufacturer: "Kent", expiryDate: "05/2023", price: "00000.000" },
    { serialNo: "0014", medicineName: "Curam 228mg/5ml Oral Suspension", package: "5 Pcs Pack", category: "Infection", quantity: "0000", manufacturer: "Normon", expiryDate: "07/2023", price: "00000.000" },
    { serialNo: "0015", medicineName: "Curam 457mg/5ml Oral Suspension", package: "1 Pack", category: "Infection", quantity: "0000", manufacturer: "Sandoz", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0016", medicineName: "Fluclox 500mg Capsules", package: "8 Cap Pack", category: "Infection", quantity: "0000", manufacturer: "Sandoz", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0017", medicineName: "Fluclox Syrup 125mg/5ml", package: "70ml Pack", category: "Infection", quantity: "0000", manufacturer: "Kent", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0018", medicineName: "Klaricid 125mg/5ml Oral Suspension", package: "70ml Pack", category: "Infection", quantity: "0000", manufacturer: "Abbott", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0019", medicineName: "Klaricid Forte 250mg/5ml Oral Suspension", package: "10 Tab-Pack", category: "Infection", quantity: "0000", manufacturer: "Abbott", expiryDate: "11/2022", price: "00000.000" },
    { serialNo: "0020", medicineName: "Metronidazole 500mg Tablets", package: "21 Tab-Pack", category: "Infection", quantity: "0000", manufacturer: "Lachipharma", expiryDate: "01/2023", price: "00000.000" },
    { serialNo: "0021", medicineName: "Retarpen (Benzathine Penicillin 1,200,000 IU) Powder for IM Injection", package: "Pack", category: "Infection", quantity: "0000", manufacturer: "Sandoz", expiryDate: "", price: "00000.000" },
    { serialNo: "0022", medicineName: "Septrin 480mg Tabs", package: "24Tab-Pack", category: "Infection", quantity: "0000", manufacturer: "Seochow-heroes", expiryDate: "12/2022", price: "00000.000" },
    { serialNo: "0023", medicineName: "Sulphin 400mg Capsules", package: "56Cap-Pack", category: "Infection", quantity: "0000", manufacturer: "Kima", expiryDate: "10/2023", price: "00000.000" }
];

  ngOnInit(): void {}
}
