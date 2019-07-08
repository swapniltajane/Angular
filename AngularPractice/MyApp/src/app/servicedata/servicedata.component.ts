import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { CaptchaService } from '../captcha.service';

@Component({
  selector: 'app-servicedata',
  templateUrl: './servicedata.component.html',
  styleUrls: ['./servicedata.component.css']
})
export class ServicedataComponent implements OnInit {

  constructor(private data: ProductDataService, private captcha: CaptchaService) { }
  public products;
  public code;
  public enteredCode;
  public msg = '';
  public number = 4;
  ngOnInit() {
    this.products = this.data.GetData();
    this.code = this.captcha.GenerateCode();
  }
  public CodeEntered() {
    if (this.enteredCode !== this.code) {
      this.msg = 'Entered code is not matched';
    } else {
      this.msg = 'Code matched successfully';
    }
  }

}
