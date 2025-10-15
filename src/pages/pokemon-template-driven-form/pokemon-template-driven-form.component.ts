import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ForbiddenNamesDirective } from "../../directives/forbidden-names.directive";
import { PokemonExistsDirective } from "../../directives/pokemon-exists.directive";
import { LegendarySwitchComponent } from '../../components/legendary-switch/legendary-switch.component';

interface PokemonForm {
  name: string;
  weight: number | null;
  height: number | null;
  imageUrl?: string;
  legendary: boolean;
}

@Component({
  selector: 'app-pokemon-template-driven-form',
  imports: [FormsModule, JsonPipe, ForbiddenNamesDirective, PokemonExistsDirective, LegendarySwitchComponent],
  templateUrl: './pokemon-template-driven-form.component.html',
  styleUrls: ['./pokemon-template-driven-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonTemplateDrivenFormComponent {
  protected model = signal<PokemonForm>({
    name: '',
    weight: null,
    height: null,
    imageUrl: '',
    legendary: true,
  });

  onSubmit(form: NgForm) {
    if (form.invalid || form.pending) return;

    console.log('Form submitted', form.value);
  }
}
