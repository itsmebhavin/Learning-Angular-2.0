import {bootstrap}          from 'angular2/platform/browser';
import {AppComponent}       from "./app.component";
import {ROUTER_PROVIDERS}   from 'angular2/router';
import {FORM_PROVIDERS}     from 'angular2/common';
import {HTTP_PROVIDERS}     from 'angular2/http';

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [ROUTER_PROVIDERS, FORM_PROVIDERS, HTTP_PROVIDERS]);
