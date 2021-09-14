import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { emailValidator } from './validators';

@Directive({
  selector: '[ngModel][appEmailValidator]'
})
export class EmailValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator(control);
  }
}
