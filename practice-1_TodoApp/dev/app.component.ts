import {Component} from 'angular2/core';
import {ToDoListComponent} from './todo-list/todo-list.component';

const store = new ToDoListComponent();

@Component({
    selector: 'app',
    template: `
      <h3>Todo app using Angular 2.0</h3>
      <br/>
      <label>Please enter an item</label>
      <input #newitem
        (keyup.enter) = "addItem(newitem.value)"
        (blur) = "addItem(newitem.value);newitem.value=''">

      <button (click)="addItem(newitem.value)">Add</button>

      <todo-list></todo-list>
    `
})
export class AppComponent {
   addItem(item){
     if(item){
       store.items.push(item);
       console.log(store.items);
     }
   }
}
