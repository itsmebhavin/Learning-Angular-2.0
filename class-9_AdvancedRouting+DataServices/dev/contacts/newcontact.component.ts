import {Component, View} from "angular2/core";
import {ContactService} from "./contact.service";

@Component({
  templateUrl:'../dev/contacts/newcontact.component.html',
  providers:[ContactService]
})
export class NewContactComponent{

  constructor(private _contactService:ContactService){

  }
  onAddContact(_firstname, _lastname, _email){
    const dummyContact = {firstname:_firstname, lastname:_lastname, email:_email};
    this._contactService.insertContact(dummyContact);
  }
}
