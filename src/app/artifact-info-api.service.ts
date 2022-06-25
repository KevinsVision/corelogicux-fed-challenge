import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtifactInfoApiService {

  constructor(private http: HttpClient) {
  }

  getArtifactDetail() {
    return this.http.get('https://api.artic.edu/api/v1/artworks/120081');
  }
}
