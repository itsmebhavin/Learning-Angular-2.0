import {Component, View}                                        from "angular2/core";
import {ContactService}                                         from "./contact.service";
import {Router}                                                 from 'angular2/router';
import {Contact}                                                from './contact';
import {FORM_PROVIDERS, ControlGroup, Validators, FormBuilder}  from 'angular2/common';


@Component({
  templateUrl:'../dev/contacts/newcontact.component.html',
  providers:[ContactService],
  styles:[`
      .ng-invalid{
        border:1px solid red;
      }
      table {
        border-collapse: collapse;
      }
      table, th, td {
        border: 1px solid black;
      }
    `]
})
export class NewContactComponent{

  myForm: ControlGroup;

  constructor(
    private _contactService:ContactService,
    private _router : Router,
    private _formBuilder : FormBuilder)
  {
    //initialize newContact to empty object
    this.myForm = this._formBuilder.group({
      //This should match with Contact.ts object
      'id'          : [Math.floor((Math.random() * 100) + 1).toString()],
      'firstname'   : ['', Validators.required],
      'lastname'    : ['', Validators.required],
      'email'       : ['']
    });
  }

  // onAddContact(_firstname, _lastname, _email){
  //   var _id =  Math.floor((Math.random() * 100) + 1).toString();
  //   const _contact = {id: _id, firstname:_firstname, lastname:_lastname, email:_email};
  //   this._contactService.insertContact(_contact);
  //   //navigate to contacts page once insert
  //   this._router.navigate(['Contacts']);
  // }

  onAddContact(value){
    console.log("Submitted value");
    console.log(value);
    if(this.myForm.dirty && this.myForm.valid)
      this._contactService.insertContact(value);
      this._router.navigate(['Contacts']);
  }

}
