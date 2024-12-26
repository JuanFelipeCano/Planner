import { Component, Input } from '@angular/core';

type Slot = 'start' | 'center' | 'end';

@Component({
  selector: 'app-ds-title',
  standalone: true,
  imports: [],
  templateUrl: './ds-title.component.html',
  styleUrl: './ds-title.component.scss'
})
export class DsTitleComponent {
  @Input() public slot!: Slot;
}
