### Class-9 Advanced Routing
- In this class, we will learn
    - more about routing in angular 2
    - finishing previous new Contact form and insert code
    - how to work with Routing navigate()
    - add code to NewComponent typescript

###### Some more information and cheatsheet details about Routing
- Configures routes for the decorated component. Supports static, parameterized, and wildcard routes.

```
var MyComponent = ng.router.RouteConfig([
  { path: '/:myParam', component: MyComponent, name: 'MyCmp' },
  { path: '/staticPath', component: ..., name: ...},
  { path: '/*wildCardParam', component: ..., name: ...}
]).Class({
  constructor: function() {}
});

```

- Marks the location to load the component of the active route.
```
<router-outlet></router-outlet>
```
- Creates a link to a different view based on a route instruction consisting of a route name and optional parameters. The route name matches the as property of a configured route. Add the '/' prefix to navigate to a root route; add the './' prefix for a child route.
```
<a [routerLink]="[ '/MyCmp', {myParam: 'value' } ]">
```
- A component decorator defining a function that the router should call first to determine if it should activate this component. Should return a boolean or a promise.
```
var MyComponent = ng.router.CanActivate(function() { ... }).Component({...}).Class({constructor: ...});
```
- After navigating to a component, the router calls the component's routerOnActivate method (if defined).
```
routerOnActivate: function(nextInstruction, prevInstruction) { ... }
```
- The router calls a component's routerCanReuse method (if defined) to determine whether to reuse the instance or destroy it and create a new instance. Should return a boolean or a promise.
```
routerCanReuse: function(nextInstruction, prevInstruction) { ... }
```
- The router calls the component's routerOnReuse method (if defined) when it re-uses a component instance.
```
routerOnReuse: function(nextInstruction, prevInstruction) { ... }
```
- The router calls the routerCanDeactivate methods (if defined) of every component that would be removed after a navigation. The navigation proceeds if and only if all such methods return true or a promise that is resolved.
```
routerCanDeactivate: function(nextInstruction, prevInstruction) { ... }
```
- Called before the directive is removed as the result of a route change. May return a promise that pauses removing the directive until the promise resolves.
```
routerOnDeactivate: function(nextInstruction, prevInstruction) { ... }
```
