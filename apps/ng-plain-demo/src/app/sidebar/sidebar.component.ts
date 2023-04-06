import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {ActivatedRoute, Router, RouterLink, Routes} from '@angular/router';
import {appRoutes} from '../app.routes';

@Component({
  selector: 'ca-ng-plain-demo-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  componentRoutes: Routes | undefined;

  constructor(public readonly router: Router) {
    console.log(this.router.url);
    this.componentRoutes = appRoutes
      .filter(route => route.path === '')[0].children
      ?.filter(route => route.path === 'components')[0].children
    console.log(this.componentRoutes);
  }
}
