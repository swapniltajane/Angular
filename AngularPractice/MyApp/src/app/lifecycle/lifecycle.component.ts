import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {
  @Input() public uname;
  public previousValue;
  public currentValue;

  ngOnChanges(changes: SimpleChanges) {
    for(let property in changes) {
      let change = changes[property];
      this.currentValue = change.currentValue;
      this.previousValue = change.previousValue;
    }
  }
}
