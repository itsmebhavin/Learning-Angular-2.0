import {Component}  from 'angular2/core';
import {HTTPTestService} from './http-test.service';

@Component({
  selector:'http-test',
  template:`
    <button (click)="onGet()">Get Data</button><br/>
    <div>Output:{{getData}}</div><br/>
    <button (click) = "onPost()">Post Data</button><br/>
    <div>Output:{{postData}}</div><br/>
    <button (click) = "onPromiseGet()">Get Data(w Promise)</button><br/>
    <div>Output:{{getPromiseData}}</div><br/>
  `,
  providers:[HTTPTestService]
})

export class HTTPTestComponent{
  getData:string;
  getPromiseData:string;
  postData:string;

  constructor(private _httpService:HTTPTestService){}

  onGet(){
    console.log('Getting user now.');
    this._httpService.getUser().subscribe(
      data =>this.getData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Get')
    );
  }

  onPromiseGet(){
    console.log('Getting user based on promise now.');
    this._httpService.getUsersByPromise()
      .then(
        res=>this.getPromiseData = JSON.stringify(res),
        err=>alert(err)
    );

  }

  onPost(){
    this._httpService.postJson().subscribe(
      data =>this.postData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Post')
    );
  }



}
