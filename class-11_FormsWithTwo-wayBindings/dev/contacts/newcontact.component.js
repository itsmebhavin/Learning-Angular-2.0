System.register(["angular2/core", "./contact.service", 'angular2/router'], function(exports_1) {
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
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router) {
                    this._contactService = _contactService;
                    this._router = _router;
                    //initialize newContact to empty object
                    this.newContact = { id: '', firstname: '', lastname: '', email: '' };
                }
                // onAddContact(_firstname, _lastname, _email){
                //   var _id =  Math.floor((Math.random() * 100) + 1).toString();
                //   const _contact = {id: _id, firstname:_firstname, lastname:_lastname, email:_email};
                //   this._contactService.insertContact(_contact);
                //   //navigate to contacts page once insert
                //   this._router.navigate(['Contacts']);
                // }
                NewContactComponent.prototype.onAddContact = function () {
                    this.newContact.id = Math.floor((Math.random() * 100) + 1).toString();
                    console.log(this.newContact);
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../dev/contacts/newcontact.component.html',
                        providers: [contact_service_1.ContactService],
                        styles: ["\n      .ng-invalid{\n        border:1px solid red;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});
//# sourceMappingURL=newcontact.component.js.map