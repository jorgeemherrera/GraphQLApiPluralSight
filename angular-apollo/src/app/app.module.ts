import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ){

    apollo.create({
      link: httpLink.create({uri: 'http://localhost:4000/'}),
      cache: new InMemoryCache()
    })
  }
}
