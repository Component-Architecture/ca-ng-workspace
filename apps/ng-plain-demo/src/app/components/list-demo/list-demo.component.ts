import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from '@ca/ng-plain';

@Component({
  selector: 'ca-ng-plain-demo-list-demo',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss'],
})
export class ListDemoComponent {

  items = [
    'Item 1',
    'Item 2',
    'Item 3',
  ];

  customItems = [
    {name: 'Item 1', value: 1},
    {name: 'Item 2', value: 2},
    {name: 'Item 3', value: 3},
  ];
}
