import { Component, Input } from '@angular/core';

@Component({
  selector: 'wlx-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() sizeNotifications: number = 0;
}
