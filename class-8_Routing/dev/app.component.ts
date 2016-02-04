import {View, Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {Router, RouterOutlet, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "angular2/router";


@Component({
    selector: 'app'
})
@View({
  templateUrl: '../dev/app.component.html',
  directives:[ContactListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/contacts', name:'Contacts', component:ContactListComponent , useAsDefault: true},
  {path:'/newcontact', name:'NewContact', component:ContactListComponent}
])

export class AppComponent {
  
}
