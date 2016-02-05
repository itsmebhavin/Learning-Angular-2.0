### Class-8 Basic routing
- in this chapter, we will learn
    - basic router setup
    - will create basic top header on page for navigation
    - will setup base href element in main index.html page (this is main things to do routing)
    - changes made in boots.ts and injected ROUTER_PROVIDERS

#### Some information about Routing in angular2
  - router-link – router-link directive is use to declare link into view . Its can contains optional parameters also.
    Example :
    ```
    <a [router-link]="['/AboutUs']">About Us</a>
    ```
    RouterLink is used in the HTML to link to pages defined in the RouteConfig
  - router-outlet - Its work as a placeholder for views to render then component. Means template and templateUrl will be render on that location where you will use router-outlet directive.
    Example :
    ```
    <router-outlet></router-outlet>
    ```
    RouterOutlet is used to render the result of the current route, similar to angular’s <ng-view>

- @RouteConfig – We map URLs to components in this section which used inside the .
    Example :
    ```
    @RouteConfig([
    {path: '/',        component: HomeComponent, as: 'Home'},
    {path: '/aboutus', component: AboutUsComponent, as: 'AboutUs'  }
    {path: '/contactus', component: ContactUsComponent, as: 'ContactUs'  }
    ])

    ```
    RouteConfig is used for setting up the routes, similar the angular’s $routeProvider

- RouteParams – Parameter to a component which rendered by the router.
    
