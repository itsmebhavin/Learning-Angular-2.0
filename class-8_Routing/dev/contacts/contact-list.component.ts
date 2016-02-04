import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
  selector: "contact-list",
  templateUrl: "../dev/contacts/contact-list.component.html",
  directives: [ContactComponent],
  providers:[ContactService],
  styleUrls:["../src/css/app.css"]
})
// Without Lifecycle hooks - call thru constructor
/*
export class ContactListComponent{
  public contacts : Contact[];

  public selectedContact = {};

  public onNameClick(contact){
        this.selectedContact = contact;
  }
  //info: if you want to pre-select first element from contact list then
  //      you can define constructor on this class and initialize defaults.
  //this is same as
  // private contactService : ContactService
  // this.contactService = contactService;
  constructor(private _contactService: ContactService){
      this.getContacts();
  }

  // Call service now
  getContacts(){
    this._contactService.getContacts().then((contacts:Contact[])=>this.contacts = contacts);
  }
}
*/


// With Lifecycle hooks
export class ContactListComponent implements OnInit{
  public contacts : Contact[];

  public selectedContact = {};

  public onNameClick(contact){
        this.selectedContact = contact;
  }
  //info: if you want to pre-select first element from contact list then
  //      you can define constructor on this class and initialize defaults.
  //this is same as
  // private contactService : ContactService
  // this.contactService = contactService;
  constructor(private _contactService: ContactService){
      this.getContacts();
  }

  // Call service now
  getContacts(){
    this._contactService.getContacts().then((contacts:Contact[])=>this.contacts = contacts);
  }

  ngOnInit () :any {
      this.getContacts();
  }
}
