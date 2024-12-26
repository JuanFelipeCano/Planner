import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@shared/validators';

interface CompleteRegistryForm {
  name: FormControl<string>;
  lastname: FormControl<string>;
  phone: FormControl<number>;
}

export class CompleteRegistryViewModel {
  private formGroup!: FormGroup;
  private nameControl!: FormControl;
  private lastnameControl!: FormControl;
  private phoneControl!: FormControl;

  public get form(): FormGroup<CompleteRegistryForm> {
    return this.formGroup;
  }

  public get name(): FormControl<string> {
    return this.nameControl;
  }

  public get lastname(): FormControl<string> {
    return this.lastnameControl;
  }

  public get phone(): FormControl<number> {
    return this.phoneControl;
  }

  public createForm(): void {
    this.createControls();

    this.formGroup = new FormGroup<CompleteRegistryForm>({
      name: this.nameControl,
      lastname: this.lastname,
      phone: this.phone,
    });
  }

  private createControls(): void {
    this.nameControl = new FormControl<string>('', [
      CustomValidators.onlyLetters,
    ]);

    this.lastnameControl = new FormControl<string>('', [
      CustomValidators.onlyLetters,
    ]);

    this.phoneControl = new FormControl<number | null>(null, [
      CustomValidators.onlyNumbers,
    ]);
  }
}
