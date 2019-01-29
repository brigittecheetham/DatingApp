import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './../../services/alertify.service';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUsers();
    this.route.data.subscribe(data => this.users = data['users']);
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    },
    error => {
      this.alertifyService.error(error);
    });
  }
}
