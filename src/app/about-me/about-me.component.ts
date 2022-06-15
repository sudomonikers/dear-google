import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('typeFinished', [
      transition('void => *', [
        style({ opacity: '0' }),
        animate(1000)
      ])
    ]),
    trigger('flyIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ])
    ]),
  ],
})
export class AboutMeComponent implements OnInit {
  baseText: string = `Hello Melissa.** You may be staring at a screen,* but I like to think we are still having a human interaction here.** Meet me,* the man behind the computer screen.*** I enjoy reading*, photography*, chess*, muay thai*, and eating at over-priced restaurants.**** I spend quite some time travelling and experiencing different cultures and food with my lovely girlfriend,* and just exploring as much of life as I possibly can.*** Below you can find a link to my instagram to see my photography,* book recommendations,* and a link to my chess.com account** (feel free to send me a game invite!).**** If you'd like to get in contact with me,** please reach out to me at my email: `;
  typeWriter: string = '';
  typeFinished: boolean = false;

  constructor() {
   }

  ngOnInit(): void {
    this.appendText();
  }

  async appendText() {
    for (let i = 0; i < this.baseText.length; i++) {
      if(this.baseText[i] === '*') {
        await this.timeout(175);
      } else {
        this.typeWriter += this.baseText[i];
        await this.timeout(40);
      }
    }
    this.typeFinished = true;
  }

  timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

}
