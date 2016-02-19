//Provide injectable to service, which will tell angular2 that what ever class
//we have here is injectable in our classes / components etc.
import {Injectable} from "angular2/core";
import {CONTACTS} from "./data";
import {Contact} from "./contact";

@Injectable()
export class ContactService{
  getContacts(){
    return Promise.resolve(CONTACTS);
  }
  getContactById(id){
    return Promise.resolve(CONTACTS.find(x=>x.id == id));
  }
  insertContact(contact:Contact){
    Promise.resolve(CONTACTS)
      .then(
        (contacts:Contact[])=> contacts.push(contact)
      );
  }
}
