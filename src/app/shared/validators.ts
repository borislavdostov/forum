import { AbstractControl, ValidationErrors } from "@angular/forms";

export function repeatPasswordValidatorFactory(targetControl: AbstractControl): ValidationErrors | null {
    return function repeatPasswordValidator(control: AbstractControl) {
        const areTheSame = targetControl.value === control.value;
        return areTheSame ? null : { repeatPasswordValidator: true }
    };
}