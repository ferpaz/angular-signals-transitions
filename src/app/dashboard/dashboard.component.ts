import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

import { SideMenuComponent } from '@shared/side-menu/side-menu.component';
import { ToolbarComponent } from '@shared/toolbar/toolbar.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent implements OnInit {
  loginDisplay!: boolean;

  private _accountInfo: AccountInfo | null = null;

  private authService = inject(MsalService);

  accountInfo = computed(() => this._accountInfo);

  ngOnInit(): void {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

    if (this.loginDisplay) {
      this._accountInfo = this.authService.instance.getActiveAccount();
    }
  }
}
