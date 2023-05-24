import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ArtifactDetailComponent} from './artifact-detail/artifact-detail.component';
import {ArtifactListingComponent} from './artifact-listing/artifact-listing.component';
import {NewsletterFormComponent} from './newsletter-form/newsletter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtifactDetailComponent,
    ArtifactListingComponent,
    NewsletterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
