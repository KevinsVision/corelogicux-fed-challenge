import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ArtifactDetailComponent} from './artifact-detail/artifact-detail.component';
import { ArtifactListingComponent } from './artifact-listing/artifact-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtifactDetailComponent,
    ArtifactListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
