# Class-13 Working with HTTP GET & POST
- In Angular 2, Http is accessed as an injectable class from angular2/http and, just like other classes, we import it when we want to use it in our components.
- Angular 2 also comes with a set of injectable providers for Http, which are imported via HTTP_PROVIDERS which will go into Boot.ts
- With these we get providers such as RequestOptions and ResponseOptions, which allow us to modify requests and responses by extending the base class for each. - What can we do with Observables?
  - You might be wondering why Http doesn't just return promises like it used to, so we can stick to our familiar methods for resolving HTTP calls. The fact of the matter is that we can do much more with observables than promises. With observables, we have a whole bunch of operators to pull from, which let us customize our streams in nearly any way we want.
-  If we were expecting network connectivity issues, we could define a number of times to retry the request.
  ```
  onPost().retry(3)
  ```
##### Dependent calls
- Another common scenario is a call sequence of dependent http calls. In the below example I will make an initial call to load a customer. The returned customer object contains a contract url that I will be using to load a contract for that particular customer.
 ```
    this.http.get('./customer.json').map((res: Response) => {
       this.customer = res.json();
       return this.customer;
    })
    .flatMap((customer) => this.http.get(customer.contractUrl)).map((res: Response) => res.json())
    .subscribe(res => this.contract = res);
 ```
##### Parallel requests
- Another common use case is to make independent requests in parallel. In Angular 1.x this is done using $q.all, but in the new http service, this can be done using the forkJoin operator. The idea is very similar though in that you list out the parallel calls and get the result back in an array. Below is an example of how to request a list of friends and a customer in parallel.
```
    import {Observable} from 'rxjs/Observable';
    Observable.forkJoin(
      this.http.get('./friends.json').map((res: Response) => res.json()),
      this.http.get('./customer.json').map((res: Response) => res.json())
    ).subscribe(res => this.combined = {friends:res[0].friends, customer:res[1]});
```
##### Promises
- Angular 2.0 has moved in the direction of Observables but it's still possible to work with promises if that is your preference. Here is a quick sample where I show how to make an http request using a promise.
```
    this.http.get('./friends.json').toPromise()
        .then((res: Response) => {
            this.friendsAsPromise.friends = res.json().friends;
        });
```
