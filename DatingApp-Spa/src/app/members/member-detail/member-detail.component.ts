import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../../services/alertify.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();  after adding the member-detail.resolver we get the user from the route
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertifyService.error(error);
    });
  }
}
