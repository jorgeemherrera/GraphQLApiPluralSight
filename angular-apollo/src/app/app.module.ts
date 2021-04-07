import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpLink } from 'apollo-angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

const uri = "http://localhost:4000/";
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any>{
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

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
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(
  //   apollo: Apollo,
  //   httpLink: HttpLink
  // ){

  //   apollo.create({
  //     link: httpLink.create({uri: 'http://localhost:4000/'}),
  //     cache: new InMemoryCache()
  //   })
  // }
}
