import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  
  friendId: any;   
  friends: User[];
  friend: User;
  price: number = 78.4314123515162342541231;
  date: any = Date.now();
  
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) 
  {
    this.friendId = activatedRoute.snapshot.params["uid"];
    this.friends = userService.getFriends();
    this.friend = this.friends.find(x => x.uid == this.friendId);
  }


  ngOnInit(): void {
  }

}
