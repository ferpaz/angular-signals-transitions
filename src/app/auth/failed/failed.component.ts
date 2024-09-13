import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-login-failed',
    standalone: true,
    template: `
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md border border-gray-300 text-center">
        <h2 class="text-2xl font-semibold mb-4">Error de Inicio de Sesión</h2>
        <p class="mb-6">Hubo un error al intentar iniciar sesión. Por favor, intente de nuevo.</p>
        <a class="text-blue-500 hover:text-blue-700 underline" routerLink="/dashboard">Login</a>
      </div>
    </div>
    `,
    imports: [RouterModule]
})
export default class FailedComponent {}
