import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  movieId:number;
  moviName:string;
  MovieData
  constructor(private route: ActivatedRoute,private showSearchService: ShowService, private router: Router) {

  }
  ngOnInit() {
    this.movieId=this.route.snapshot.params['mid'];
    this.moviName=this.route.snapshot.params['name']
    console.log("movi id=>>"+this.movieId+"movi name==>"+this.moviName);

    

    this.showSearchService.searchmovie(this.movieId,this.moviName).subscribe(data => {
      this.MovieData= data;
      console.log("show Movie"+JSON.stringify(data));
      alert(JSON.stringify(this.MovieData))
    });
  }

 
}