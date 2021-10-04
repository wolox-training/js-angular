import { Component, Input } from '@angular/core';

@Component({
  selector: 'wlx-company-name',
  templateUrl: './company-name.component.html',
  styleUrls: ['./company-name.component.scss']
})
export class CompanyNameComponent {
  @Input() size: string | number = 3
}
