import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {ShowService} from './show.service';

@Injectable()
export class ShowResolver {

  constructor(private showService: ShowService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.showService.performShowLookup(route.paramMap.get('id'));
  }

}
