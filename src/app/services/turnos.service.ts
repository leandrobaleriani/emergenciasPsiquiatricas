import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../model/Turno';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  baseUrl = "http://medil.com.ar/serviciosSaludLaboral";

	constructor(private http: HttpClient) { }

	getTurnos(): Observable<Turno[]> {
		return this.http.get<Turno[]>(this.baseUrl + "/obtenerTurnos.php");
	}

	getTurnosByDeviceId(id: string): Observable<Turno[]> {
		return this.http.get<Turno[]>(this.baseUrl + "/obtenerTurnosByDeviceId.php?deviceId=" + id);
	}

	saveTurno(turno: Turno): Observable<Turno> {
		return this.http.post<Turno>(this.baseUrl + "/altaTurno.php", turno);
	}

	eliminarTurno(id: number) {
		this.http.delete(this.baseUrl + "/" + id);
	}

	cancelarTurno(id: number, estado: string): Observable<Number> {
		return this.http.get<Number>(this.baseUrl + "/cambiarEstadoTurno.php?id=" + id + "&estado=" + estado);
	}

	acceso(usuario: Usuario): Observable<String> {
		return this.http.post<String>(this.baseUrl + "/acceso.php", usuario);
	}
}
