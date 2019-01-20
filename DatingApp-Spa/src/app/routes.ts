import { AuthGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';

import { MemberListComponent } from './member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { ListsComponent } from 'src/app/lists/lists.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
            { path: '**', redirectTo: '', pathMatch: 'full'}
        ]
    },

];