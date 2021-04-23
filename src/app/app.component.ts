import { Component } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-keycloak';
  public loggedIn: boolean = false;
  public userProfile: KeycloakProfile = {};

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = await this.authService.isLoggedIn();
    if (this.loggedIn) {
        this.userProfile = await this.authService.loadUserProfile();
    }
  }

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }
}
