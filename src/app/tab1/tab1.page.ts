import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Turno } from '../model/Turno';
import { TurnosService } from '../services/turnos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  turno: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController,
    private tService: TurnosService, public loadingController: LoadingController, 
    public toastController: ToastController, public storage: Storage) {
		this.turno = this.formBuilder.group({
			fecha: '',
			nombre: '',
			detalle: '',
			tipo: '',
			deviceId: ''
		});

		this.storage.get('user').then((val) => {
			this.turno.controls.nombre.setValue(val.nombre);
			this.turno.controls.deviceId.setValue(val.id);
		});

		this.storage.get('fecha').then((val) => {
			this.turno.controls.fecha.setValue(val);
		});
	}

	ngOnInit() {
	}

	async saveTurno() {
    let turno = new Turno();
		turno.tur_fecha = this.turno.controls.fecha.value;
		turno.tur_nombre = this.turno.controls.nombre.value;
    turno.tur_detalle = this.turno.controls.detalle.value;
    turno.tur_tipo = this.turno.controls.tipo.value;
		turno.tur_estado = "PENDIENTE";
		turno.device_id = this.turno.controls.deviceId.value;
		
		let loading = await this.loadingController.create({
			message: "Espere...",
			spinner: "crescent"
		});

		const toast = await this.toastController.create({
			color: 'primary',
			message: 'Se registró el pedido! <br> En breve nos comunicaremos con usted.',
			duration: 2000
		  });

		await loading.present();
		await this.tService.saveTurno(turno).subscribe(data => {
			toast.present();
			loading.dismiss();
		}, error => {
			loading.dismiss();
		})
	}

}
