import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

@Component({
    selector: 'app',
    templateUrl: '../dev/app.component.html',
    directives : [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home' },
  { path: '/about', component: AboutComponent, name: 'About' }
])
export class AppComponent {

}
