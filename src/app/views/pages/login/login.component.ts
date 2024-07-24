import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
} from '@coreui/angular';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/core/services/user-storage.service';
import { CONSTANTS } from 'src/app/shared/constants';
import { AuthService } from 'src/app/features/auth/auth.service';
import {
  AuthenticateRequest,
  PrivillageResponse,
  TokenResponse,
} from 'src/app/features/user-management/models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    FormsModule,
  ],
})
export class LoginComponent {
  public user: AuthenticateRequest = { emailOrPhone: '', password: '' };

  constructor(
    private router: Router,
    private userStorageService: UserStorageService,
    private _auth: AuthService
  ) {}

  onSubmit = () => {
    console.log('login');
    let model = {
      emailOrPhone: '01068011702',
      password: 'fl@!r$2k',
    };
    this._auth.authenticate(this.user).subscribe((res: TokenResponse) => {
      this.userStorageService.set(CONSTANTS.TOKEN, res.accessToken);
      this._auth
        .roleAuthenticate()
        .subscribe((roleResponse: Array<PrivillageResponse>) => {
          this.userStorageService.set(
            CONSTANTS.ROLEBASEDAUTHURIZATION,
            JSON.stringify(roleResponse)
          );
        });
      this.router.navigateByUrl('/dashboard');
    });
  };
}
