/* eslint-disable @angular-eslint/no-host-metadata-property */
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  host: { 'class': 'icon-wrapper' },
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class IconComponent {
  @Input() public name!: string;
  @Input() public size?: number;
}
