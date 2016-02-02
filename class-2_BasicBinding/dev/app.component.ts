import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
      <h3>Angular2 Boilerplate</h3>
      <br/>
      <span (click)="onNameClick()" [class.clicked]="showdetails === true">
        {{contact.firstname}} {{contact.lastname}}
      </span>
      <input [(ngModel)]="contact.email" type="text">
      <div *ngIf="showdetails === true">
        email address : {{contact.email}}
      </div>
    `,
    styleUrls:["../src/css/app.css"]
})
export class AppComponent {
  public contact = {firstname : "Max" , lastname:"smith", email:"test@gmail.com"};
  public showdetails = false;
  public onNameClick(){
      if(this.showdetails == true)
        this.showdetails = false;
      else
        this.showdetails = true;
  }
}
