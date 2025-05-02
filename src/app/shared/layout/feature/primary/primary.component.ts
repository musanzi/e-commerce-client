import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../../ui/topbar/topbar.component';
import { FooterComponent } from '../../ui/footer/footer.component';

@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary.component.html',
  imports: [RouterOutlet, TopbarComponent, FooterComponent]
})
export class PrimaryLayoutComponent {}
