import { Routes } from '@angular/router';

import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { ListsComponent } from 'src/app/lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { MemberListResolver } from './resolvers/member-list.resolver';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
            { path: '**', redirectTo: '', pathMatch: 'full'}
        ]
    },

];
