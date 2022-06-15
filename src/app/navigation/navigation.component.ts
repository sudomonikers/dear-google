import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('navOpen', [
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(600)
      ]),
      transition('* => void', [
        animate(800, style({ transform: 'translateY(100%)' }))
      ])
    ]),
  ],
})
export class NavigationComponent implements OnInit {
  navOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
