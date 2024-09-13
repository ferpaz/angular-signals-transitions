import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private graphEndpoint = environment.MSGraph.uri;

  constructor(private http: HttpClient, private msalService: MsalService) { }

  getProfile(): Observable<any> {
    return from(this.msalService.instance.acquireTokenSilent({
      scopes: ['User.Read']
    })).pipe(
      switchMap(response => {
        const headers = {
          Authorization: `Bearer ${response.accessToken}`
        };
        return this.http.get<any>(this.graphEndpoint, { headers });
      })
    );
  }

  getProfilePhoto(): Observable<Blob> {
    return from(this.msalService.instance.acquireTokenSilent({
      scopes: ['User.Read']
    })).pipe(
      switchMap(response => {
        const headers = {
          Authorization: `Bearer ${response.accessToken}`
        };
        return this.http.get('https://graph.microsoft.com/v1.0/me/photo/$value', { headers, responseType: 'blob' });
      })
    );
  }
}
