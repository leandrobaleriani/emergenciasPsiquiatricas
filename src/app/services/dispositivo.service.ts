import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from '../model/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  baseUrl = "https://medil.com.ar/serviciosSaludLaboral";

	constructor(private http: HttpClient) { }

	saveDispositivo(dispositivo: Dispositivo): Observable<String> {
		return this.http.post<String>(this.baseUrl + "/altaDispositivo.php", dispositivo);
	}
}
