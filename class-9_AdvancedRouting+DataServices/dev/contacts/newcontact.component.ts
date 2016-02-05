import {Component, View}      from "angular2/core";
import {ContactService}       from "./contact.service";
import {Router}               from 'angular2/router';

@Component({
  templateUrl:'../dev/contacts/newcontact.component.html',
  providers:[ContactService]
})
export class NewContactComponent{
  constructor(
    private _contactService:ContactService,
    private _router : Router)
  {}

  onAddContact(_firstname, _lastname, _email){
    const _contact = {firstname:_firstname, lastname:_lastname, email:_email};
    this._contactService.insertContact(_contact);
    //navigate to contacts page once insert
    this._router.navigate(['Contacts']);
  }
}
