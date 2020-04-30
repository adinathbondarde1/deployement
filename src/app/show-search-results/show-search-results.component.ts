import {Component, OnInit} from '@angular/core';
import {ShowService} from '../services/show.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-show-search-results',
  templateUrl: './show-search-results.component.html',
  styleUrls: ['./show-search-results.component.css']
})
export class ShowSearchResultsComponent implements OnInit {

  public showList;
  loader:boolean=false;

  constructor(private showSearchService: ShowService,private router:Router) {
  }

  ngOnInit() {
    this.loader=true;

    this.showSearchService.searchData.subscribe(data => {
      this.showList = data;
      this.loader=false;
      console.log("result search"+data);
      this.showList = data;
      if(this.showList==null || this.showList==''){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'No Data found',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['home']);


      } 
    });
  }

  onclickImage(id){
   // alert("id "+id); 
    this.router.navigate(['showDetail',id])
  }

}
