import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Contact} from "./contact";

@Component({
  selector: "contact",
  templateUrl: "../dev/contacts/contact.component.html",
  inputs:["contact"]
})
export class ContactComponent{
  public contact:Contact = null;

  constructor (private _router:Router){}

  onMore(_contact:Contact){
    console.log('Contact');
    console.log(_contact);
    this._router.navigate(['About', {contactid:_contact.id}]);
  }
}
