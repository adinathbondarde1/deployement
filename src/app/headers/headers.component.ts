import { Component, OnInit } from '@angular/core';
import { ShowService } from '../services/show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(private showSearchService: ShowService, private router: Router) {

  }
  ngOnInit() {
  }

  performSearch(title: string) {
    this.showSearchService.performShowSearch(title);
    this.router.navigate(['showList']);
  }
}