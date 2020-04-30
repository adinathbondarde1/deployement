import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ShowService} from './services/show.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  shows:any;
  message:any;
  constructor(private showSearchService: ShowService, private router: Router) {

  }
  ngOnInit(){

  /*   this.showSearchService.liveShow().subscribe(data =>{
      console.log(data);
      this.shows=data; 

    },error=> this.message=error) */

   
  
  }
  performSearch(title: string) {
    this.showSearchService.performShowSearch(title);
    this.router.navigate(['showSearchResults']);
  }

}
