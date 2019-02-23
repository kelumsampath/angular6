import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
  constructor(
    private auth:AuthService
  ) { }

  ngOnInit() {
    this.auth.getUsers().subscribe(
      data=>{this.users=data
      console.log(data)}
    )
    this.auth.postUsers().subscribe(
      data=>{this.users=data
      console.log(data)}
    )
  }

}
