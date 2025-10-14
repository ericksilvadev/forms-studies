import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn
} from '@angular/forms';

export function forbiddenNamesValidator(forbiddenNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isForbidden = forbiddenNames.includes(control.value);

    if (isForbidden) return { forbiddenName: { value: control.value } };

    return null;
  };
}