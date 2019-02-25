import { User } from './../../models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MemberListComponent } from './member-list.component';

import { Observable, of } from 'rxjs';
import { Params } from '@angular/router';
import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

class MockActivatedRoute extends ActivatedRoute {
    params: Observable<Params>;

    constructor(parameters?: { [key: string]: any; }) {
      super();
      this.params = of(parameters);
    }
}

describe('MemberListComponent', () => {
    let fixture: ComponentFixture<MemberListComponent>;
    let mockActivatedRoute;
    let mockUserService;
    let mockAlertifyService;
    let users;

    @Component({
        selector: 'app-member-card',
        template: '<div></div>'
      })
      class FakeMemberCardComponent {
        @Input() user: User;
      }

    beforeEach(() => {
        mockActivatedRoute = new MockActivatedRoute({'id': 1});
        mockUserService = jasmine.createSpyObj(['getUsers']);
        mockAlertifyService = jasmine.createSpyObj(['confirm', 'success', 'error', 'warning', 'message']);

        TestBed.configureTestingModule({
            declarations: [MemberListComponent,
                FakeMemberCardComponent
            ],
            providers: [{provide: UserService, useValue: mockUserService},
                {provide: ActivatedRoute, useValue: mockActivatedRoute},
                {provide: AlertifyService, useValue: mockAlertifyService}
            ]
        });
        fixture = TestBed.createComponent(MemberListComponent);

        users = [{id: 1, username: 'Justin', knownAs: 'Justin', age: 42, gender : 'male'}];
    });

    it('should correctly load users from the service', () => {
        mockUserService.getUsers.and.returnValue(of(users));
        fixture.detectChanges();
        expect(fixture.componentInstance.users.length).toBe(1);
        expect(fixture.componentInstance.users[0].username).toEqual('Justin');
    });
});
