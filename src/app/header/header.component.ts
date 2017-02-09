import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  id: String = null;
  photo: String = null;
  name: String = null;

  constructor(private as: AuthService, private router: Router, private route: ActivatedRoute,){
    this.as.af.auth.subscribe(data => {
      if (data != null){
          this.id = data.auth.uid;
          this.photo = data.auth.photoURL;
          this.name = data.auth.displayName;
      } else {
        this.id = null;
        this.photo = null;
        this.name = null;
      }
    });
  }

  loginWithGoogle(): void {
    this.as.loginWithGoogle();
  }

  loginWithGitgub(): void {
    this.as.loginWithGithub();
  }

  loginWithTwitter(): void {
    this.as.loginWithTwitter();
  }

  loginWithFacebook(): void {
    this.as.loginWithFacebook();
  }

  logout(): void {
    this.as.logout();
    this.router.navigate(['/dashboard']);
  }
}
