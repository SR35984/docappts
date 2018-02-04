import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentNewComponent } from './appointment/appointment-new/appointment-new.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';

const routes: Routes = [
    { path: 'user', component: UserComponent, children: [
        { path: 'new', component: UserNewComponent }
    ]},

    { path: 'appointment', component: AppointmentComponent },
    { path: 'appointment', component: AppointmentListComponent },
    { path: 'appointment/new', component: AppointmentNewComponent },

    { path: '', pathMatch: 'full', component: UserComponent, children: [
        { path: '', component: UserNewComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
