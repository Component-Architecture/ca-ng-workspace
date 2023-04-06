import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ca-ng-plain-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent<T> implements OnInit {

  @Input() header: string|null = null;
  @Input() headerTemplate: TemplateRef<any>|null = null;

  @Input() footer: string|null = null;
  @Input() footerTemplate: TemplateRef<any>|null = null;

  @Input() items: T[] = [];
  @Input() itemTemplate: TemplateRef<any>|null = null;

  ngOnInit(): void {
    if(this.header && this.headerTemplate) {
      console.warn('headerTemplate will override header text')
    }
    if (this.footer && this.footerTemplate) {
      console.warn('footerTemplate will override footer text')
    }
  }
}
