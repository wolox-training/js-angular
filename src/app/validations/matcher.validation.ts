import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matcher = (control: string, controlMatcher: string): ValidatorFn => {
  return (group: AbstractControl): ValidationErrors | null => {
    const firstControl = group.get(control)
    const nextControl = group.get(controlMatcher)
    const isEqual = firstControl?.value === nextControl?.value
    const result = isEqual ? null : { isNotEqual: true }
    return result
  }
}
