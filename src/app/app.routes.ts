import { Routes } from '@angular/router';
import { PokemonTemplateDrivenFormComponent } from '../pages/pokemon-template-driven-form/pokemon-template-driven-form.component';
import { PokemonReactiveFormComponent } from '../pages/pokemon-reactive-form/pokemon-reactive-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon-template-form'
  },
  {
    path: 'pokemon-template-form',
    component: PokemonTemplateDrivenFormComponent
  },
  {
    path: 'pokemon-reactive-form',
    component: PokemonReactiveFormComponent
  }
];
