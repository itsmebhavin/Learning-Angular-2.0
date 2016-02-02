System.register(["angular2/core", "./contact.component"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_component_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent() {
                    this.contacts = [
                        { firstname: "Max", lastname: "Smith", email: "max@gmail.com" },
                        { firstname: "Chris", lastname: "Raches", email: "chris@gmail.com" },
                        { firstname: "Michael", lastname: "Alloy", email: "michael@gmail.com" },
                        { firstname: "John", lastname: "Doe", email: "john@gmail.com" },
                    ];
                    this.selectedContact = {};
                }
                ContactListComponent.prototype.onNameClick = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: "contact-list",
                        template: "\n  <ul>\n    <li\n      *ngFor = \"#contact of contacts\"\n      (click)=\"onNameClick(contact)\" [class.clicked]=\"selectedContact === contact\">\n        {{contact.firstname}} {{contact.lastname}}\n    </li>\n  </ul>\n  <contact [contact]=\"selectedContact\"></contact>\n  ",
                        directives: [contact_component_1.ContactComponent],
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map