import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment-new',
  templateUrl: './appointment-new.component.html',
  styleUrls: ['./appointment-new.component.css']
})
export class AppointmentNewComponent implements OnInit {
  appointment: Appointment;

  constructor(
    private _route: Router,
    private _appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.appointment = new Appointment();
  }

  onSubmit(){
    this._appointmentService.createAppointment(this.appointment,
      (appointment) => {
        console.log(appointment);
        this.appointment = new Appointment();
        this._route.navigateByUrl('/appointment');
      },
      (err) => {
        console.log('errors', err);
      }
    )
  }

  cancel(){
    this._appointmentService.cancel(
      (res) => {
        console.log(res);
        this._route.navigateByUrl('/appointment');
      },
      console.log
    )
  }
}
