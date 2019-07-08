import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animationsdemo',
  templateUrl: './animationsdemo.component.html',
  styleUrls: ['./animationsdemo.component.css'],
  animations: [
    trigger('effects', [
      transition('void=>*', [
        style({
          backgroundColor: 'Red',
          opacity: -1,
          color: 'white'
        }),
        animate(5000)
      ]),
      transition('*=>void', [
        animate(3000, style({opacity: 0}))
      ])
    ])
  ]
})
export class AnimationsdemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
