import {Component, View} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {AboutComponent} from './about/about.component';
import {NewContactComponent} from './contacts/newcontact.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTPTestComponent} from './http-test.component';

@Component({
    selector: 'app'
})
@View({
  templateUrl: '../dev/app.component.html',
  directives:[ROUTER_DIRECTIVES, HTTPTestComponent]
})
@RouteConfig([
  { path: '/',                component: ContactListComponent,        name: 'Contacts',   useAsDefault:true },
  { path: '/new',             component: NewContactComponent,         name: 'Newcontact' },
  { path: '/about/:contactid',  component: AboutComponent,              name: 'About' }
])
export class AppComponent {

}
