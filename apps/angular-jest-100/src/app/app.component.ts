import { Component } from '@angular/core';

@Component({
  selector: 'angular-jest-100-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'angular-jest-100';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
