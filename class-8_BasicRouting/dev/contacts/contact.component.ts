import {Component} from "angular2/core";

@Component({
  selector: "contact",
  templateUrl: "../dev/contacts/contact.component.html",
  inputs:["contact"]
})
export class ContactComponent{
  public contact = {};

}
