import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() 
  {
    let c = 1;
    let b = 2;
    console.log(c + b);
  }

  ngOnInit(): void {
  }

}
