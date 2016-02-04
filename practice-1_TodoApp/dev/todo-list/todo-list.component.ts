import {Component} from 'angular2/core';

@Component({
    selector: 'todo-list',
    templateUrl: '../dev/todo-list/todo-list.component.html'
})
export class ToDoListComponent {
   items = ["Superman", "Cyclops", "Thor", "Batman", "Aquaman"];

   /*
   removeItem(item){
     if(item){
       var index = this.items.indexOf(item);
       if(index > -1){
         this.items.splice(index,1);
       }
     }
   }
   */
}
