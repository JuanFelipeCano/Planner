import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@shared/validators';

interface RegisterForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export class RegisterViewModel {
  private formGroup!: FormGroup;
  private emailControl!: FormControl;
  private passwordControl!: FormControl;

  public get form(): FormGroup<RegisterForm> {
    return this.formGroup;
  }

  public get email(): FormControl<string> {
    return this.emailControl;
  }

  public get password(): FormControl<string> {
    return this.passwordControl;
  }

  public createForm(): void {
    this.createControls();

    this.formGroup = new FormGroup<RegisterForm>({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  public setEmailAndPassword(email: string, password: string): void {
    this.emailControl.setValue(email);
    this.passwordControl.setValue(password);
  }

  private createControls(): void {
    this.emailControl = new FormControl<string>('', [
      Validators.required,
      CustomValidators.email,
    ]);

    this.passwordControl = new FormControl<string>('', [
      Validators.required,
    ]);
  }
}
