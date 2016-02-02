import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
  selector: "contact-list",
  template: `
  <ul>
    <li
      *ngFor = "#contact of contacts"
      (click)="onNameClick(contact)" [class.clicked]="selectedContact === contact">
        {{contact.firstname}} {{contact.lastname}}
    </li>
  </ul>
  <contact [contact]="selectedContact"></contact>
  `,
  directives: [ContactComponent],
  styleUrls:["../src/css/app.css"]
})
export class ContactListComponent{
  public contacts =
  [
    {firstname : "Max" , lastname:"Smith", email:"max@gmail.com"},
    {firstname : "Chris" , lastname:"Raches", email:"chris@gmail.com"},
    {firstname : "Michael" , lastname:"Alloy", email:"michael@gmail.com"},
    {firstname : "John" , lastname:"Doe", email:"john@gmail.com"},
  ];
  public selectedContact = {};
  public onNameClick(contact){
        this.selectedContact = contact;
  }
}
