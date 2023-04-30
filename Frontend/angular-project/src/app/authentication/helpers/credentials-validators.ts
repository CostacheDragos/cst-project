import { FormControl, ValidationErrors } from '@angular/forms';

export class CredentialsValidators {
  public static emailValidator(email: FormControl): ValidationErrors | null {
    // Regular expression to match the email format
    const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (email && !EMAIL_REGEXP.test(email.value)) {
      return { invalidEmail: true };
    }

    return null;
  }
}
