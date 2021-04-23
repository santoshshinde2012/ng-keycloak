import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { AuthGuard } from './auth.guard';
import { initializer } from './keycloak-initializer';
import { AuthService } from './service/auth.service';
@NgModule({
  declarations: [],
  imports: [KeycloakAngularModule],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: initializer,
        multi: true,
        deps: [KeycloakService]
    },
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
