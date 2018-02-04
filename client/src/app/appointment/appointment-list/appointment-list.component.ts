import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];
  user: User = new User();

  constructor(
    private _userService: UserService,
    private _appointmentService: AppointmentService,
    private _route: Router
  ) {}

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        console.log(this._userService.currentUser);
        if (!user) {
          this._route.navigateByUrl('/');
          return;
        }
        this.user = user;
      },
      console.log
    );
    
    this._appointmentService.retrieveAppointments(
      (appointments) => {
        this.appointments = appointments;
        console.log(appointments);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id) {
    this._appointmentService.deleteAppointment(id,
      (appointment) => {

        this._appointmentService.retrieveAppointments(
          (appointments) => {
            this.appointments = appointments;
            console.log(appointments);
          },
          (err) => {
            console.log(err);
          }
        );
        console.log(appointment);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
