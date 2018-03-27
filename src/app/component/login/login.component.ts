import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  inputValue: string;
  constructor() { }

  ngOnInit() {
  }
  _console(value) {
    console.log(value);
  }
}
