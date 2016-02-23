import {Component}  from 'angular2/core';
import {HTTPTestService} from './http-test.service';

@Component({
  selector:'http-test',
  template:`
    <button (click)="onGet()">Get Data</button><br/>
    <div>Output:{{getData}}</div><br/>
    <button (click) = "onPost()">Post Data</button><br/>
    <div>Output:{{postData}}</div><br/>
  `,
  providers:[HTTPTestService]
})

export class HTTPTestComponent{
  getData:string;
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

  onPost(){
    this._httpService.postJson().subscribe(
      data =>this.postData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Post')
    );
  }


}
