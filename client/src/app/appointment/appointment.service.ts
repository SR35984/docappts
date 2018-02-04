import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Appointment } from './appointment';

@Injectable()
export class AppointmentService {
  appointments: Appointment[];

  constructor(
    private _http: Http
  ) { }

  createAppointment(appointment: Appointment, callback, errorback) {
    this._http.post('/create', appointment).subscribe(
      (res) => {
        const appointment = res.json();
        this.appointments.push(appointment);
        callback(this.appointments);
      },
      (err) => {
        errorback(err.json());
      }
    )
  }

  retrieveAppointments(callback, errorback) {
    this._http.get('/appointments').subscribe(
      (res) => {
        const appointments = res.json();
        this.appointments = appointments;
        callback(appointments);
      },
       (err) => {
         errorback(err.json());
       }
      )
   }

   deleteAppointment(id, callback, errorback) {
    this._http.delete('/appointments/' +id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err.json());
      }
    )
  }

  cancel(callback, errorback) {
    this._http.get('/appointments').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }
}
