import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-reactive-form',
  imports: [],
  templateUrl: './pokemon-reactive-form.component.html',
  styleUrl: './pokemon-reactive-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonReactiveFormComponent { }
