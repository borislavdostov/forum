import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = (control.value as string);
    if (!value) {
        return null;
    }
    const isValidEmail = /^[a-zA-Z\.-0-9]{6,}@\w+\.(com|bg)$/.test(value);
    return isValidEmail ? null : { emailValidator: true };
}

export function repeatPasswordValidatorFactory(targetControl: AbstractControl): ValidationErrors | null {
    return function repeatPasswordValidator(control: AbstractControl) {
        const areTheSame = targetControl.value === control.value;
        return areTheSame ? null : { repeatPasswordValidator: true }
    };
}