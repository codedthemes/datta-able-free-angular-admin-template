import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {

  static requiredSelect(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && c.value.id == '') {
        return { requiredSelect: true };
      }
      return null;
    };
  }


  static requiredSelectU(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && c.value.userId == '') {
        return { requiredSelect: true };
      }
      return null;
    };
  }
}