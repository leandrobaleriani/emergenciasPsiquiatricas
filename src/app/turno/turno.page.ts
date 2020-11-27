import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Turno } from '../model/Turno';
import { TurnosService } from '../services/turnos.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.page.html',
  styleUrls: ['./turno.page.scss'],
})
export class TurnoPage implements OnInit {

  turno: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController,
    private tService: TurnosService, public loadingController: LoadingController, 
	public toastController: ToastController, public storage: Storage) {
		this.turno = this.formBuilder.group({
			fecha: '',
			nombre: '',
			detalle: '',
			tipo: '',
			deviceId: '',
			telefono: ''
		});

		this.storage.get('user').then((val) => {
			this.turno.controls.nombre.setValue(val.nombre);
			this.turno.controls.deviceId.setValue(val.id);
		});

		this.storage.get('fecha').then((val) => {
			this.turno.controls.fecha.setValue(val);
		});

		this.storage.get('tipo').then((val) => {
			this.turno.controls.tipo.setValue(val);
		});
	}

	ngOnInit() {
	}

	async saveTurno() {
    let turno = new Turno();
		turno.tur_fecha = this.turno.controls.fecha.value;
		turno.tur_hora = "";
		turno.tur_nombre = this.turno.controls.nombre.value;
    	turno.tur_detalle = this.turno.controls.detalle.value;
    	turno.tur_tipo = this.turno.controls.tipo.value;
		turno.tur_estado = "PENDIENTE";
		turno.device_id = this.turno.controls.deviceId.value;
		turno.tur_telefono = this.turno.controls.telefono.value;

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
			this.navigateBack();
		}, error => {
			loading.dismiss();
		})
	}

	navigateBack() {
		this.navCtrl.back();
	}

}
