import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../model/Turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  baseUrl = "https://bibal.com.ar/servicios/ferzam";

	constructor(private http: HttpClient) { }

	getTurnos(): Observable<Turno[]> {
		return this.http.get<Turno[]>(this.baseUrl + "/obtenerReservas.php");
	}

	getTurnosByUserId(id: string): Observable<Turno[]> {
		return this.http.get<Turno[]>(this.baseUrl + "/obtenerReservaByUserId.php?userId=" + id);
	}

	saveTurno(reserva: Turno): Observable<Turno> {
		return this.http.post<Turno>(this.baseUrl + "/altaReserva.php", reserva);
	}

	eliminarTurno(id: number) {
		this.http.delete(this.baseUrl + "/" + id);
	}

	cancelarTurno(id: number, estado: string): Observable<Number> {
		return this.http.get<Number>(this.baseUrl + "/cambiarEstadoReserva.php?id=" + id + "&estado=" + estado);
	}

	getTurnosByFecha(fecha): Observable<Turno[]> {
		return this.http.get<Turno[]>(this.baseUrl + "/obtenerReservasByFecha.php?fecha="+fecha);
	}
}
