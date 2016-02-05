import {Component, View} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {AboutComponent} from './about/about.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

@Component({
    selector: 'app'
})
@View({
  templateUrl: '../dev/app.component.html',
  directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',        component: ContactListComponent,    name: 'Contacts' },
  { path: '/about',   component: AboutComponent,          name: 'About' }
])
export class AppComponent {

}
