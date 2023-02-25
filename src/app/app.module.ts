import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: "", component: DashboardComponent}
      ]
    )
  ],
  providers: [OidcSecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
