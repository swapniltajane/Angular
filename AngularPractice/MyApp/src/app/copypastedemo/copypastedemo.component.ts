import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copypastedemo',
  templateUrl: './copypastedemo.component.html',
  styleUrls: ['./copypastedemo.component.css']
})
export class CopypastedemoComponent {
  public  name;
  public msg;
  public m1;
  public OnPaste() {
    this.msg = 'Text is inserted from clipboard';
  }
  public OnCopy() {
    this.msg = 'Text is copied to clipboard';
  }
  public OnCut() {
    this.msg = 'Text is removed and copied to clipboard';
  }
  public OnBlur() {
    this.msg = 'blur event';
    this.name = this.name.toUpperCase();
  }
  public f1() {
    alert(this.m1);
  }
}
