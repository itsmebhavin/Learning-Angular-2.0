import {Component} from "angular2/core";

@Component({
  selector: "contact",
  template: `
  <div>
    Email Address: {{contact.email}}
  </div>
  `,
  inputs:["contact"]
})
export class ContactComponent{
  public contact = {};

}
