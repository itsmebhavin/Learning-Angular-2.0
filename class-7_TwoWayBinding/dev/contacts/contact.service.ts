//Provide injectable to service, which will tell angular2 that what ever class
//we have here is injectable in our classes / components etc.
import {Injectable} from "angular2/core";
import {CONTACTS} from "./data";

@Injectable()
export class ContactService{
  getContacts(){
    return Promise.resolve(CONTACTS);
  }
}
