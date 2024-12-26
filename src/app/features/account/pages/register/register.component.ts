import { Component, OnInit } from '@angular/core';
import { CreateAccountRequest } from '@api/requests';
import { ExceptionResponseBase } from '@common/bases';
import { I18nConfig } from '@config';
import { AccountContract } from '@features/account/core/contracts';
import { ExistingUserException } from '@features/account/core/exceptions';
import { UserData } from '@features/account/data/user.data';
import { BaseComponent } from '@shared/components';
import { RegisterConfig } from './config/register.config';
import { REGISTER_IMPORTS } from './config/register.imports';
import { RegisterViewModel } from './config/register.view-model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ...REGISTER_IMPORTS ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent extends BaseComponent implements OnInit {

  public readonly config = RegisterConfig;
  public viewModel!: RegisterViewModel;

  constructor(
    private accountContract: AccountContract,
    private userData: UserData,
  ) {
    super();
    this.viewModel = new RegisterViewModel();
  }

  public ngOnInit(): void {
    this.initComponent();
  }

  public register(): void {
    if (!this.viewModel.form.valid) return;

    this.loaderService.show();

    const params = this.viewModel.form.value as CreateAccountRequest;

    this.accountContract.validateExistingUser({ email: params.email }).subscribe({
      next: () => {
        this.userData.email = params.email;
        this.userData.password = params.password;

        this.loaderService.hide();
        this.goToCompleteRegistry();
      },
      error: (error) => this.handleError(error),
    });
  }

  public goToSignIn(): void {
    this.routerProvider.navigate([this.config.routes.signIn]);
  }

  private handleError(error: ExceptionResponseBase): void {
    this.loaderService.hide();

    if (error instanceof ExistingUserException) {
      const existingUSerText = this.translateProvider.get<string>(this.config.i18n.errors.existingUser);
      this.toastService.danger(existingUSerText);
      return;
    }

    this.toastService.danger(
      this.translateProvider.get<string>(this.config.i18n.errors.general)
    );
  }

  private goToCompleteRegistry(): void {
    this.routerProvider.navigate([this.config.routes.completeRegistry]);
  }

  private async initComponent(): Promise<void> {
    this.viewModel.createForm();
    this.setInitialValues();
    await this.translateProvider.loadModule(I18nConfig.modules.account.REGISTER);
  }

  private setInitialValues(): void {
    const { email, password } = this.userData;

    if (email && password) {
      this.viewModel.setEmailAndPassword(this.userData.email, this.userData.password);
    }
  }
}
