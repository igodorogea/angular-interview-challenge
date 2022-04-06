import { CdkDragStart } from '@angular/cdk/drag-drop';
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Directive, Input, TemplateRef, ContentChild, HostBinding, HostListener } from '@angular/core';

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

//------------------------------New Action Bar Code-----------------------------------

@Directive({
  selector: 'button[appNewactionBarToggle]',
})
export class NewActionBarToggleDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.newActionBar.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.newActionBar.contentId;
  @HostListener('click') toggleNewActionBar() {
    this.newActionBar.expanded = !this.newActionBar.expanded;
  }
  constructor(public newActionBar: NewActionBarComponent) {}
}

@Directive({
  selector: '[appNewActionBarContent]'
})
export class NewactionBarContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

let nextId = 0;

@Component({
  selector: 'app-new-action-bar',
  templateUrl: 'new-action-bar.template.html',
})
export class NewActionBarComponent {
  contentId = `newActionBar-${nextId++}`;
  @Input() expanded = false;
  @ContentChild(NewactionBarContentDirective) content!: NewactionBarContentDirective;
}