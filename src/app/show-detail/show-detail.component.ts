import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowService} from '../services/show.service';
import {Episode} from '../classes/episode';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  showDetail;
  seasonArray = [];
  loader:boolean=false;


  constructor(private route: ActivatedRoute, private showService: ShowService) {
  }

  ngOnInit() {
    this.showDetail = this.route.snapshot.data['showDetail'];
    //alert("details show "+this.route.snapshot.data['showDetail'])
    this.loader=true;
    this.showService.performEpisodesLookup(this.showDetail.id).subscribe(data => {
      console.log("show details"+JSON.stringify(data));
      var responce=data;
      this.loader=false;
      const episodeList = {};
      data.forEach(eppData => {
        const episode = new Episode();
        episode.season = eppData.season;
        episode.episodeNumber = eppData.number;
        episode.name = eppData.name;
        episode.firstAiredDate = eppData.airdate;
        episode.summary = eppData.summary;
        if (episodeList.hasOwnProperty(episode.season)) {
          episodeList[episode.season].push(episode);
        } else {
          const tempArray: Episode[] = [episode];
          episodeList[episode.season] = tempArray;
        }
      });
      for (const i in episodeList) {
        if (episodeList.hasOwnProperty(i)) {
          this.seasonArray.push(episodeList[i]);
        }
      }
    });
  }
}
