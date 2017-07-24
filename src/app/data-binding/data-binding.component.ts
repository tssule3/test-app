import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name = 'Tejas';
  btn = true;
  text = '';
  field = false;
  personName = '';
  inputField = true;
  p1 = false;
  constructor() {
    setTimeout(() => {this.field = true; this.inputField = false; }, 4000);
  }

  ngOnInit() {
  }

  onClickBtn() {
    this.btn = false;
  }

  clickBtn(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
  }

  showp1 () {
    this.p1 = true;
  }
  hidep1 () {
    this.p1 = false;
  }

}
