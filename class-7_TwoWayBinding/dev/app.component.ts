import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';

@Component({
    selector: 'app',
    templateUrl: '../dev/app.component.html',
    directives:[ContactListComponent]
})
export class AppComponent {

}
