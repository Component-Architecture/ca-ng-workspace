import { Route } from '@angular/router';
import {ListDemoComponent} from './components/list-demo/list-demo.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'components',
        children: [
          {
            path: 'list',
            component: ListDemoComponent,
          }
        ],
      },
    ]
  },

  { path: '**', redirectTo: '' },
];
