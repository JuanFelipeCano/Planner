import { FormControl, FormGroup, Validators } from '@angular/forms';

interface CreateTaskForm {
  title: FormControl<string>;
  observations: FormControl<string>;
  priority: FormControl<number>;
  date: FormControl<string>;
}

export class CreateTaskViewModel {
  private formGroup!: FormGroup;
  private titleControl!: FormControl;
  private obervationsControl!: FormControl;
  private priorityControl!: FormControl;
  private dateControl!: FormControl;

  public get form(): FormGroup<CreateTaskForm> {
    return this.formGroup;
  }

  public get title(): FormControl<string> {
    return this.titleControl;
  }

  public get observations(): FormControl<string> {
    return this.obervationsControl;
  }

  public get priority(): FormControl<number> {
    return this.priorityControl;
  }

  public get date(): FormControl<string> {
    return this.dateControl;
  }

  public createForm(): void {
    this.createControls();

    this.formGroup = new FormGroup<CreateTaskForm>({
      title: this.titleControl,
      observations: this.obervationsControl,
      priority: this.priorityControl,
      date: this.dateControl,
    });
  }

  private createControls(): void {
    this.titleControl = new FormControl<string>('', [
      Validators.required,
    ]);

    this.obervationsControl = new FormControl<string>('');

    this.priorityControl = new FormControl<number>(0, [
      Validators.required,
    ]);

    this.dateControl = new FormControl<string>('', [
      Validators.required,
    ]);
  }
}
