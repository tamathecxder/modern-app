import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  private movieService = inject(MovieService);

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getTopRatedMovies().subscribe((movies) => {
      console.log(movies);
    })
  }
}
