import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: Number;
  title: String;
  count: Number;
  isUpdating: boolean;
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private accessToken;
  private headers;

  constructor(private http: HttpClient) {
    this.init();
  }

  async init() {
    //Only left that piece of code to understand how headers are set.

    // this.accessToken = await this.oktaAuth.getAccessToken();
    // this.headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + this.accessToken,
    // });
  }

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(API_URL + '/movies', { headers: this.headers })
      .map((res) => {
        let modifiedResult = res;
        modifiedResult = modifiedResult.map(function (movie) {
          movie.isUpdating = false;
          return movie;
        });
        return modifiedResult;
      });
  }
  increaseCount(id): Observable<Movie> {
    return this.http
      .post<Movie>(API_URL + '/movies/' + id + '/count', {
        headers: this.headers,
      })
      .map((res) => res);
  }

  addMovie(movie): Observable<Movie> {
    return this.http.post<Movie>(API_URL + '/movies', movie,{
      headers: this.headers,
    }).map(res => res);
}
}
