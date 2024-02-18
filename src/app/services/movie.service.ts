import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_KEY, BASE_URL } from '../constants/global';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() { }

  getTopRatedMovies(page:number = 1) {
    return this.http.get(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`);
  }

  getMovieDetails(id: string) {
    return this.http.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  }
}
