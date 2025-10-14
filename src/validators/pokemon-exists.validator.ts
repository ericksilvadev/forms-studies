import {
  AsyncValidatorFn
} from '@angular/forms';
import { map, of, switchMap, timer } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

export const pokemonExists = (service: PokemonService): AsyncValidatorFn => {
  return (control) => {
    if (!control.value) {
      return of(null);
    }

    return timer(300).pipe(
      switchMap(() =>
        service.pokemonExists(control.value).pipe(
          map((exists) => {
            return exists ? { pokemonExists: { value: control.value } } : null;
          })
        )
      )
    );
  };
};
