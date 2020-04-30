import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Config } from '../../assets/config';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ShowService {

  private empty: any[] = [];
  private searchDataSource = new BehaviorSubject<any>(this.empty);
  private searchDatashow = new BehaviorSubject<any>(this.empty);

  searchData = this.searchDataSource.asObservable();

  constructor(private http: HttpClient) {
  }

  public performShowSearch(title: string) {
    this.http.get(Config.apiUrl+'search/shows?q=' + title).subscribe(data => {
      this.searchDataSource.next(data);
      console.log("Data search "+JSON.stringify(data));
    });
  }

  public performShowLookup(id: string): Observable<any> {
    return this.http.get('https://api.tvmaze.com/shows/' + id);
  }

  public performEpisodesLookup(id: string): Observable<any> {
    return this.http.get('https://api.tvmaze.com/shows/' + id + '/episodes');
  }
  
  public liveShow(): Observable <any> {
    return this.http.get <any> (Config.apiUrl+'shows').pipe(catchError(this.handleError));
  }
  
  searchmovie(id,name):Observable<any>{
    return this.http.get <any> (Config.apiUrl+'shows/'+id+'/'+name).pipe(catchError(this.handleError));

  }

private handleError(error: HttpErrorResponse) {  
  if (error.error instanceof ErrorEvent)
  {  
    console.error('An error occurred:', error.error.message);  
  } 
    
  return throwError('Server not responding,Please try again later.');    
} 
}

