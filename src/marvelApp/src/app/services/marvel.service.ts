import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {Md5} from 'ts-md5/dist/esm/md5';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private baseUrl = environment.marvel.baseUrl;
  private publicKey = environment.marvel.publicKey;
  private privateKey = environment.marvel.privateKey;

  constructor(private http: HttpClient) {}

  // Generate the authentication parameters needed for Marvel API
  private getAuthParams(): HttpParams {
    const ts = new Date().getTime().toString();
    const hash = Md5.hashStr(ts + this.privateKey + this.publicKey);
    return new HttpParams()
      .set('apikey', this.publicKey)
      .set('ts', ts)
      .set('hash', hash);
  }

  // Fetch the first 20 superheroes (characters)
  getHeroes(): Observable<any> {
    const params = this.getAuthParams().set('limit', '20');
    return this.http.get(`${this.baseUrl}/characters`, { params });
  }
}