import { Pipe, PipeTransform } from '@angular/core';
import { Status, User } from '../Interfaces/user';

@Pipe({
  name: 'getFriendsOn'
})
export class GetFriendsOnPipe implements PipeTransform {

  transform(value: User[], ...args: unknown[]): User[]{
    return value.filter(x => x.status != Status.OFFLINE).sort(x => Object.values(Status).indexOf(x.status)).reverse();
  } 

}
