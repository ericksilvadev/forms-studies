import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  catchError,
  map,
  Observable,
  of
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private readonly http = inject(HttpClient);

  pokemonExists(name: string): Observable<boolean> {
    return this.http
      .get<unknown>(`${this.apiUrl}/${name.toLocaleLowerCase()}`)
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}
