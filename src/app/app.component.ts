import { Component } from '@angular/core';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toggle', [
      transition(':enter', [style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      animate(400)
      ])
    ])
  ]
})

export class AppComponent {
  title = 'angular-interview-challenge';
  dragActionBar: boolean = false;
  showSubContainer = true;
  statusClass = 'expand';

  ngOnInit() {}

  handleDragStart(event: CdkDragStart): void {
    this.dragActionBar = true;
  }

  toggleStatus() {
    this.showSubContainer = !this.showSubContainer;
    this.statusClass = 'collapse';
  }
}
