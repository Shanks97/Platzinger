import { Pipe, PipeTransform } from '@angular/core';
import { Status, User } from '../Interfaces/user';

@Pipe({
  name: 'getFriendsOff'
})
export class GetFriendsOffPipe implements PipeTransform {

  transform(value: User[], ...args: unknown[]): User[]{
    return value.filter(x => x.status == Status.OFFLINE);
  }

}
