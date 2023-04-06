import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {ListDemoComponent} from './components/list-demo/list-demo.component';

@Component({
  standalone: true,
  imports: [RouterModule, ListDemoComponent, MatSidenavModule],
  selector: 'ng-plain-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
