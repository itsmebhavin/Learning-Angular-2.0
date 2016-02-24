System.register(['angular2/core', './http-test.service'], function(exports_1) {
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
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onGet = function () {
                    var _this = this;
                    console.log('Getting user now.');
                    this._httpService.getUser().subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished Get'); });
                };
                HTTPTestComponent.prototype.onPromiseGet = function () {
                    var _this = this;
                    console.log('Getting user based on promise now.');
                    this._httpService.getUsersByPromise()
                        .then(function (res) { return _this.getPromiseData = JSON.stringify(res); }, function (err) { return alert(err); });
                };
                HTTPTestComponent.prototype.onPost = function () {
                    var _this = this;
                    this._httpService.postJson().subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished Post'); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n    <button (click)=\"onGet()\">Get Data</button><br/>\n    <div>Output:{{getData}}</div><br/>\n    <button (click) = \"onPost()\">Post Data</button><br/>\n    <div>Output:{{postData}}</div><br/>\n    <button (click) = \"onPromiseGet()\">Get Data(w Promise)</button><br/>\n    <div>Output:{{getPromiseData}}</div><br/>\n  ",
                        providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});
//# sourceMappingURL=http-test.component.js.map