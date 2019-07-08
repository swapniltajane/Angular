import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DatafilterComponent {
  public SelectedCategoryValue = 'All';
  @Output() public CategoryChanged: EventEmitter<string> = new EventEmitter<string>();
  public OnCategoryChanged() {
    this.CategoryChanged.emit(this.SelectedCategoryValue);
  }
}
