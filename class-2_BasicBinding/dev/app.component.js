System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.contact = { firstname: "Max", lastname: "smith", email: "test@gmail.com" };
                    this.showdetails = false;
                }
                AppComponent.prototype.onNameClick = function () {
                    if (this.showdetails == true)
                        this.showdetails = false;
                    else
                        this.showdetails = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n      <h3>Angular2 Boilerplate</h3>\n      <br/>\n      <span (click)=\"onNameClick()\" [class.clicked]=\"showdetails === true\">\n        {{contact.firstname}} {{contact.lastname}}\n      </span>\n      <input [(ngModel)]=\"contact.email\" type=\"text\">\n      <div *ngIf=\"showdetails === true\">\n        email address : {{contact.email}}\n      </div>\n    ",
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map