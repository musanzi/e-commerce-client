import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-auth-card',
  imports: [RouterModule, NgIcon],
  templateUrl: './auth-card.component.html'
})
export class AuthCardComponent {
  title = input.required<string>();
}
