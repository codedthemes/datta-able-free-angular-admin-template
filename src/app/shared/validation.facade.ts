import { Injectable } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";

@Injectable()
export class ValidationFacade {

    validateArrayFormInput(controlName: string, form: FormArray, index: number) {
        let field = form?.at(index).get(controlName);
        let error: any | null = field?.errors;
        
        if (error !== null && field?.touched) {
            let errorCode = Object.entries(error)[0][0];
            switch (errorCode) {
                case 'required':
                    return 'هذا الحقل مطلوب';
                case 'min':
                    return `القيمة تكون أكثر من ${error.min.min}`;
                case 'max':
                    return `القيمة تكون أقل من ${error.max.max}`;
            }
        }

        return false;
    }

    validateGroupFormInput(controlName: string, form: FormGroup) {
        let field = form?.get(controlName);
        let error: any | null = field?.errors;

        if (error !== null && field?.touched) {
            let errorCode = Object.entries(error)[0][0];
            switch (errorCode) {
                case 'required':
                    return 'هذا الحقل مطلوب';
                case 'min':
                    return `القيمة تكون أكثر من ${error.min.min}`;
                case 'max':
                    return `القيمة تكون أقل من ${error.max.max}`;
            }
        }

        return false;
    }

    markAsTouched(form: FormGroup | FormArray) {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }
}