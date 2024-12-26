import { Component, OnInit } from '@angular/core';
import { SignInRequest } from '@api/requests';
import { SessionStorageProvider } from '@common/providers';
import { I18nConfig } from '@config';
import { AuthenticationContract } from '@features/authentication/core/contracts';
import { BaseComponent } from '@shared/components';
import { SignInConfig } from './config/sign-in.config';
import { SIGN_IN_IMPORTS } from './config/sign-in.imports';
import { SignInViewModel } from './config/sign-in.view-model';
import { AppData } from '@common/app-data';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ ...SIGN_IN_IMPORTS ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent extends BaseComponent implements OnInit {

  public readonly config = SignInConfig;
  public viewModel!: SignInViewModel;

  constructor(
    private authenticationContract: AuthenticationContract,
    private sessionStorageProvider: SessionStorageProvider,
  ) {
    super();
    this.viewModel = new SignInViewModel();
  }

  public ngOnInit(): void {
    this.initComponent();
  }

  public sigIn(): void {
    if (!this.viewModel.form.valid) {
      return;
    }

    this.loaderService.show();

    const params = this.viewModel.form.value as SignInRequest;

    this.authenticationContract.signIn(params).subscribe({
      next: (response) => {
        this.saveToken(response.data!.token);
        this.loaderService.hide();
        this.navigateToHome();
      },
      error: () => {
        const invalidCredentialsText = this.translateProvider.get(this.config.i18n.errors.invalidCredentials);
        this.loaderService.hide();
        this.toastService.danger(invalidCredentialsText);
      }
    });
  }

  public goToForgotPassword(): void {
    console.log('Forgot password clicked');
  }

  public goToCreateAccount(): void {
    this.routerProvider.navigateByUrl(this.config.routes.register);
  }

  private async initComponent(): Promise<void> {
    this.viewModel.createForm();
    await this.translateProvider.loadModule(I18nConfig.modules.SIGN_IN);
  }

  private navigateToHome(): void {
    this.routerProvider.navigateByUrl(this.config.routes.planner);
  }

  private async saveToken(token: string): Promise<void> {
    await this.sessionStorageProvider.set(AppData.AuthToken, token);
  }
}
