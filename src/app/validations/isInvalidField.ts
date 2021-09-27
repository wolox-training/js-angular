import { AbstractControl } from "@angular/forms";

export const isInvalidField = (control: AbstractControl): boolean => {
  return Boolean(control.invalid && control.errors && (control.dirty || control.touched))
}
