import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map, Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArtifactInfoApiService {

  apiURL: string = 'https://api.artic.edu/api/v1/artworks/120081';

  constructor(private http: HttpClient) {
  }

  getArtifactDetail(): Observable<any> {
    return this.http.get(this.apiURL);
  }

}



