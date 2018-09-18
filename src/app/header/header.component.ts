import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public local = false;
  user: User;
  username = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.local = true;
      this.username = this.user.email;
    }
  }
  SignOut() {
    localStorage.clear();
    location.reload();
  }
}
