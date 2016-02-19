System.register(["angular2/core", "angular2/router", "../contacts/contact.service"], function(exports_1) {
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
    var core_1, router_1, contact_service_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._contact = null;
                    this.id = null;
                }
                //OnInit is best place to fetch all our route params.
                AboutComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = this._routeParams.get('contactid');
                    this._contactService.getContactById(this.id).then(function (lContact) {
                        if (lContact) {
                            console.log("About");
                            console.log(lContact);
                            _this._contact = lContact;
                        }
                    });
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        providers: [contact_service_1.ContactService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: '../dev/about/about.component.html'
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map