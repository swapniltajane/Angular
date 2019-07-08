import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent {
  public selectedValue = 'All';
  @Input() public AllCount = 0;
  @Input() public ShoesCount = 0;
  @Input() public ElectronicsCount = 0;
  @Output() public ChangeCategory: EventEmitter<string> = new EventEmitter<string>();
  public onChangeValue() {
    this.ChangeCategory.emit(this.selectedValue);
  }
}
