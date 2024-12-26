import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '@shared/validators';

interface LoginForm {
  login: FormControl<string>;
  password: FormControl<string>;
}

export class SignInViewModel {
  private formGroup!: FormGroup;
  private emailControl!: FormControl;
  private passwordControl!: FormControl;

  public get form(): FormGroup<LoginForm> {
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

    this.formGroup = new FormGroup<LoginForm>({
      login: this.emailControl,
      password: this.passwordControl,
    });
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
