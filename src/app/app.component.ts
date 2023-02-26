import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  userData: unknown;
  title = '';
  constructor(private http: HttpClient,
    private router: Router,
    public oidcSecurityService: OidcSecurityService) { }
  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(async ({ isAuthenticated, userData }) => {
      let activatedRouteEvent: any = {};
      this.isAuthenticated = isAuthenticated;
      this.userData = userData;
      await this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(event => {
        activatedRouteEvent = event;
      });
      if (this.isAuthenticated) {
        this.router.navigateByUrl('/dashboard');
      }
    });
    window.addEventListener('storage', (event) => {
      if (event.storageArea === sessionStorage) {
        let token = sessionStorage.getItem('isAuthenticated');
        if (token === undefined) {
          this.router.navigate(['/']);
        }
      }
    });
  }
  login() {
    this.oidcSecurityService.authorize();
  }
  logout() {
    this.oidcSecurityService.logoff();
    sessionStorage.clear();
    return false;
  }
}
