import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowSearchComponent} from './show-search/show-search.component';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {ShowResolver} from './services/show-resolver.service';
import {ShowSearchResultsComponent} from './show-search-results/show-search-results.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const routes: Routes = [
  {path: 'home', component: ShowSearchComponent},
  {path: 'showList', component: ShowSearchResultsComponent},
  {path: 'showDetail/:id', component: ShowDetailComponent, resolve: {showDetail: ShowResolver}},
  {path:'moviedetail',component:MoviedetailComponent},
  {path:'moviedetail/:mid/:name',component:MoviedetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

/*  */
/* [{
  path: 'shows',
  
   children: [{
    path: 'showSearchResults',
    component: ShowSearchResultsComponent,
  },
   {
    path:'showDetail/:id',
    component: ShowDetailComponent,
    resolve: {showDetail: ShowResolver}
  },
  {path: 'showSearch', component: ShowSearchComponent},

   
],   
},  {path: '', redirectTo: 'shows/showSearch', pathMatch: 'full'}


]; */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ShowResolver]
})
export class AppRoutingModule {
}
