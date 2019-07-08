import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
public userData = [
  {id: 1, user_name: 'nwycliffe0', password: 'LokytT6'},
  {id: 2, user_name: 'aandreotti1', password: 'LVP7PfvCj1Bm'},
  {id: 3, user_name: 'bcouve2', password: 'q5IXI0m'},
  {id: 4, user_name: 'zlighten3', password: 'miT4wCYlt61'},
  {id: 5, user_name: 'jbeakes4', password: 'QPLt6rb'},
  {id: 6, user_name: 'scrennan5', password: 'D5TTaIUB3Vqy'},
  {id: 7, user_name: 'mclapson6', password: 'yZNm43Eqeac'},
  {id: 8, user_name: 'ttetther7', password: '9fbUzodtMcFr'},
  {id: 9, user_name: 'sscanes8', password: 'Mh1s0S'},
  {id: 10, user_name: 'tsteeples9', password: '3dRy57oVrg'}];

public userName;
public userPwd;
public confirmUserPwd;
public msgUser;
public msgPwd;
public msgConfirmPwd;
public regExp = /(?=.*[A-Z]\w{4,8})/;
public pwdColor;
public cPwdColor;
public cPwdColor1;
public min;
public max;
public low;
public high;
public value;
public display = 'none';
public umd = 'none';
public msg = true;
public flag1; flag2; flag3 = false;

public UserNameValidation() {
  this.msg = false;
  for (let i = 0; i < this.userData.length; i++) {
    if (this.userData[i].user_name == this.userName) {
      this.msgUser = 'This userid is taken, try another one';
      this.flag1 = false;
      return;
    } else {
      this.msgUser = 'Userid is available';
      this.flag1 = true;
    }
  }
}

public PasswordValidation() {
  if (this.userPwd.match(this.regExp)) {
    this.display = 'block';
    this.msgPwd = 'Strong Password';
    this.ShowGrade(1, 100, 0, 0, 100);
    this.pwdColor = 'green';
    this.flag2 = true;
  } else if (this.userPwd.length < 4) {
    this.display = 'block';
    this.msgPwd = 'Poor Password';
    this.ShowGrade(1, 100, 60, 80, 100);
    this.pwdColor = 'red';
    this.flag2 = false;
  } else {
    this.display = 'block';
    this.msgPwd = 'Weak Password';
    this.pwdColor = 'orange';
    this.ShowGrade(1, 100, 40, 80, 100);
    this.flag2 = false;
  }
}
public msgPwdColor() {
const obj = {
  color : this.pwdColor,
  display : this.display
};
return obj;
}

public ShowGrade(min, max, low, high, value) {
  this.min = min;
  this.max = max;
  this.low = low;
  this.high = high;
  this.value = value;
  this.msg = true;
}

public ConfirmPasswordValidation() {
  this.msg = false;
  if (this.userPwd == this.confirmUserPwd) {
    this.msgConfirmPwd = 'Passwords are matched';
    this.cPwdColor = true;
    this.cPwdColor1 = !this.cPwdColor;
    this.flag3 = true;

  } else {
    this.msgConfirmPwd = 'Passwords are not matched';
    this.cPwdColor = false;
    this.cPwdColor1 = !this.cPwdColor;
    this.flag3 = false;
  }
}

public AddRecord() {
  if ((this.flag3 && this.flag1 && this.flag2) === true) {
    let id1 = this.userData.length;
    alert('Registration Successful');
    this.userData.push({id: ++id1, user_name: this.userName, password: this.userPwd});
    this.Reset();
    this.display = 'none';
  } else {
    alert('Please Verify Entered Records.');
  }
}

public Reset() {
  this.userName = '';
  this.userPwd = '';
  this.confirmUserPwd = '';
  this.msg = true;
  this.flag1 = false;
  this.flag2 = false;
  this.flag3 = false;
}
}

