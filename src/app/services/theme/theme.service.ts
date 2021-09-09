import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ITheme } from '../../interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`, { headers: this.headers });
  }
}
