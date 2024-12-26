import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { scaleUpDown } from '@shared/animations';
import { LoaderService } from '@shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [ scaleUpDown ],
})
export class LoaderComponent implements OnInit {
  public showLoader!: Observable<boolean>;

  constructor(
    private loaderService: LoaderService
  ) {}

  public ngOnInit(): void {
    this.showLoader = this.loaderService.getLoader();
  }
}
