import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';
import { UserProfileService } from '@services/user-profile.service';

@Component({
  selector: 'app-toolbar-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './toolbar.component.html',
  styles: ``
})
export class ToolbarComponent implements OnInit {

  private authService = inject(MsalService);
  private userProfileService = inject(UserProfileService);
  private router = inject(Router);

  avatarUrl = signal<string | null>(null);
  loadingAvatarUrl = computed(() => this.avatarUrl());

  isAuthenticated = input.required<boolean>();
  userName = input<string>();

  onLogout = output();
  onProfile = output();

  authMenuVisible = signal(false);

  ngOnInit(): void {
      this.userProfileService.getProfilePhoto().subscribe(
        (blob) => {
          console.log(blob);
          this.avatarUrl.set(window.URL.createObjectURL(blob));
          console.log(this.avatarUrl());
        }
      );
  }

  setAuthMenuVisible(toggle: boolean | null = null) {
    this.authMenuVisible.update(value => !value);
  }

  navigateToProfile() {
    this.router.navigate(['/auth/profile']);
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: "/"
      });
    } else {
      this.authService.logoutRedirect();
    }
  }
}
