import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ShowSearchComponent} from './show-search/show-search.component';
import {ShowService} from './services/show.service';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {ShowSearchResultsComponent} from './show-search-results/show-search-results.component';
import { FooterComponent } from './footer/footer.component';
import { HeadersComponent } from './headers/headers.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
 
 
@NgModule({
  declarations: [
    AppComponent,FooterComponent,HeadersComponent,
    ShowSearchComponent,MoviedetailComponent,
    ShowDetailComponent,
    ShowSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
