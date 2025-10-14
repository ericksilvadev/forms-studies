import { Directive, input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { forbiddenNamesValidator } from '../validators/forbidden-names.validator';

@Directive({
  selector: '[appForbiddenNames]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNamesDirective,
      multi: true,
    },
  ],
})
export class ForbiddenNamesDirective implements Validator {
  forbiddenNames = input<string[]>(['bosta', 'palavrao'])

  validate(control: AbstractControl): ValidationErrors | null {
    const validator = forbiddenNamesValidator(this.forbiddenNames());

    return validator(control);
  }
}
