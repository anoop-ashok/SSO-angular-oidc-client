import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(private http: HttpClient,
    private router: Router,
    public oidcSecurityService: OidcSecurityService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'SSO-angular-oidc-client';
}
