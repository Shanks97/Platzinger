import { Injectable } from '@angular/core';
import { Status, User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[];
  
  constructor() 
  {
    let usuario1: User = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1,
      status: Status.AWAY
    };
    let usuario2: User = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 2,
      status: Status.BUSY
    };
    let usuario3: User = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 3,
      status: Status.OFFLINE
    };
    let usuario4: User = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 4,
      status: Status.ONLINE
    };
    let usuario5: User = {
      nick: 'Marcos',
      age: 30,
      email:'marcos@aoe.aoe',
      friend: false,
      uid: 5,
      status: Status.ONLINE
    };

    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
  }

  getFriends()
  {
    return this.friends;
  }
}
