import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

import { UserProfileService } from '@services/user-profile.service';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';
import { ToolbarComponent } from '@shared/toolbar/toolbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, SideMenuComponent, RouterModule],
  templateUrl: './profile.component.html',
  styles: ``
})
export default class ProfileComponent implements OnInit {
  loginDisplay!: boolean;

  accountInfo: any;

  private authService = inject(MsalService);
  private userProfileService = inject(UserProfileService);

  ngOnInit(): void {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

    if (this.loginDisplay) {
      this.userProfileService.getProfile().subscribe(
        (profile) => {
          this.accountInfo = profile
        }
      );
    }
  }

}
