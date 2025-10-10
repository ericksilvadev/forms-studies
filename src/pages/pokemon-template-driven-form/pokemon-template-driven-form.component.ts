import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-template-driven-form',
  imports: [],
  templateUrl: './pokemon-template-driven-form.component.html',
  styleUrl: './pokemon-template-driven-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonTemplateDrivenFormComponent { }
