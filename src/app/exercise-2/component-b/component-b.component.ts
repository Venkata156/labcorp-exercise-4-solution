import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  template: `<button class="btn btn-secondary" (click)="alertMessage()">{{ btnText }}</button>`,
})
export class ComponentB implements OnInit {

  btnText: string;
  message: string;

  ngOnInit(): void {
    this.btnText = 'Alert Message';
    this.message = 'Hello from Component "B"';
  }

  alertMessage(): void {
    alert(this.message);
  }

}
