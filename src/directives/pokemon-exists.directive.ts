import { Directive, forwardRef, inject } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { pokemonExists } from '../validators/pokemon-exists.validator';

@Directive({
  selector: '[appPokemonExists]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => PokemonExistsDirective),
      multi: true,
    },
  ],
})
export class PokemonExistsDirective implements Validator {
  private pokemonService = inject(PokemonService);

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const validator = pokemonExists(this.pokemonService);
    return validator(control) as Observable<ValidationErrors | null>;
  }
}
