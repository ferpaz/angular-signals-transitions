import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';

import type { User } from "@interfaces/user.interface";
import type { UserListResponse } from '@interfaces/user-list-response.interface';
import type { UserResponse } from '@interfaces/user-response.interface';

interface State {
  users: User[];
  currentUser?: User;
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // El numeral sirve para definir que el estado es privado,
  // pero desde el punto de vista del Javascript transpilado no solo de Typescript
  #state = signal<State>(this.newState());

  private baseUrl = 'https://reqres.in/api/users';

  private http = inject(HttpClient);

  public users = computed(() => this.#state().users);

  public loading = computed(() => this.#state().loading);

  constructor() {
    this.#state.set(this.newState(true));

    this.http.get<UserListResponse>(this.baseUrl)
      .pipe(
        delay(1500),
        catchError(() => {
          this.#state.set(this.newState());

          return of({
            data: [] as User[],
            page: 0,
            per_page: 0,
            total: 0,
            total_pages: 0,
            support: {
              text: '',
              url: ''
            },
          } as UserListResponse);
        }),
      )
      .subscribe(response => {
          this.#state.set({
              users: response.data,
              currentUser: undefined,
              loading: false
          });
        }
      );
  }

  private newState(isLoading: boolean = false) : State { return {
    users: [],
    currentUser: undefined,
    loading: isLoading
  }};


  getUserById(id: number): Observable<User | undefined> {
    return this.http.get<UserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map(response => response.data),
        catchError(() => {
          this.#state.set(this.newState());

          return of(undefined);
        }),
      );
  }
}
