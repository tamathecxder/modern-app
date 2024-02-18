import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_KEY, BASE_URL } from '../constants/global';
import { Observable } from 'rxjs';
import { ApiResult, MovieResult } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() { }

  getTopRatedMovies(page:number = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`);
  }

  getMovieDetails(id: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  }
}
