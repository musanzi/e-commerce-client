import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from 'app/shared/utils/types/models.type';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUser } from 'app/shared/store/auth/auth.reducers';
import { ILink } from '../../utils/types/link.type';
import { AuthService } from '../../../../auth/data-access/auth.service';
import { IAPIResponse } from '../../../services/api/types/api-response.type';
import { TOPBAR_LINKS } from '../../utils/data/links';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit, OnDestroy {
  #store = inject(Store);
  #authService = inject(AuthService);
  user$: Observable<IUser>;
  logout$: Observable<IAPIResponse<void>>;
  subscription = new Subscription();
  links = signal<Record<string, ILink[]>>({
    Parcourir: TOPBAR_LINKS
  });

  ngOnInit(): void {
    this.user$ = this.#store.pipe(select(selectUser));
  }

  signOut(): void {
    this.subscription = this.#authService.signOut().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
