import {Component, View} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {ContactService} from "../contacts/contact.service";
import {Contact} from "../contacts/contact";

@Component({
  selector:'about',
  providers:[ContactService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl:'../dev/about/about.component.html'
})
export class AboutComponent{

  public _contact : Contact = null;
  id = null;

  constructor(
    private _contactService:ContactService,
    private _router:Router,
    private _routeParams:RouteParams
  ){}

  //OnInit is best place to fetch all our route params.
  ngOnInit():any {
    this.id = this._routeParams.get('contactid');
    this._contactService.getContactById(this.id).then(lContact=>{
      if(lContact){
        console.log("About");
        console.log(lContact);
        this._contact = lContact;
      }
    })
  }

}
