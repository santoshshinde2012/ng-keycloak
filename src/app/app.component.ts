import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-keycloak';
  public isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn()
      .subscribe((isLoggedIn: boolean) => {
        console.log('isLoggedIn', isLoggedIn);
        this.isLoggedIn = isLoggedIn;
      })
  }

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }
}
