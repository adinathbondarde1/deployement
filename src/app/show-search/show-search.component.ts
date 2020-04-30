import {Component, OnInit} from '@angular/core';
import {ShowService} from '../services/show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  public arialShows;
  loader:boolean=false;
  constructor(private showSearchService: ShowService,private router:Router) {
  }

  ngOnInit() {
    this.loader=true;
    this.showSearchService.liveShow().subscribe(data => {
      this.arialShows = data;
      this.loader=false;
      console.log("arial shows"+JSON.stringify(data));
      //alert(JSON.stringify(this.arialShows))
    });
  }
  showMovieDetails(id,name){
   this.router.navigate(['showDetail',id])

  }
 
}
