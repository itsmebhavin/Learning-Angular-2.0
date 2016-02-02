import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
  selector: "contact-list",
  templateUrl: "../dev/contacts/contact-list.component.html",
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
  //info: if you want to pre-select first element from contact list then
  //      you can define constructor on this class and initialize defaults.
  constructor(){
    this.selectedContact = this.contacts[0];
  }
}
