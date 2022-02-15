import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  template: `<button class="btn btn-primary" (click)="alertMessage()">{{ btnText }}</button>`,
})
export class ComponentA implements OnInit {

  btnText: string;
  message: string;

  ngOnInit(): void {
    this.btnText = 'Alert Message';
    this.message = 'Hello from Component "A"'
  }

  alertMessage(): void {
    alert(this.message);
  }

}
