import {Component, View}      from "angular2/core";
import {ContactService}       from "./contact.service";
import {Router}               from 'angular2/router';
import {Contact}              from './contact';
@Component({
  templateUrl:'../dev/contacts/newcontact.component.html',
  providers:[ContactService],
  styles:[`
      .ng-invalid{
        border:1px solid red;
      }
    `]
})
export class NewContactComponent{

  newContact :Contact;


  constructor(
    private _contactService:ContactService,
    private _router : Router)
  {
    //initialize newContact to empty object
    this.newContact = {id:'',firstname:'',lastname:'',email:''};
  }

  // onAddContact(_firstname, _lastname, _email){
  //   var _id =  Math.floor((Math.random() * 100) + 1).toString();
  //   const _contact = {id: _id, firstname:_firstname, lastname:_lastname, email:_email};
  //   this._contactService.insertContact(_contact);
  //   //navigate to contacts page once insert
  //   this._router.navigate(['Contacts']);
  // }

  onAddContact(){
      this.newContact.id = Math.floor((Math.random() * 100) + 1).toString();
      console.log(this.newContact);
      this._contactService.insertContact(this.newContact);
      this._router.navigate(['Contacts']);
  }

}
