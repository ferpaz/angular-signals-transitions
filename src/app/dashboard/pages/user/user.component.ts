import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import type { User } from '@interfaces/user.interface';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {
  private userService = inject(UserService)
  private routes = inject(ActivatedRoute);
  private router = inject(Router)

  //public user = signal<User | undefined>(undefined);

  public user = toSignal<User | undefined>(
    this.routes.params
      .pipe(
        // Convierte el observable de params en un observable de user
        switchMap(({ id }) => this.userService.getUserById(id)),

        // si el user regresa undefined entonces se debe navegar a la url /dashboard/users
        tap(user => !user && this.router.navigate(['/dashboard/user-list'])),
      )
    );

  public userFullName = computed(() => `Información del Usuario ${this.user()?.first_name} ${this.user()?.last_name}`);
}
