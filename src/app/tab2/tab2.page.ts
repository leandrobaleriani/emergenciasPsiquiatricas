import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Turno } from '../model/Turno';
import { TurnosService } from '../services/turnos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  turnos: Turno[];

	constructor(private tService: TurnosService,
		public loadingController: LoadingController,
		public alertController: AlertController,
		public storage: Storage) {

	}

	ionViewWillEnter() {
		this.getTurnos();
	}
	
	ngOnInit() {
	}

	async getTurnos() {
		let loading = await this.loadingController.create({
			message: "Cargando...",
			spinner: "crescent"
		});

		await loading.present();
		await this.storage.get('user').then((val) => {
			this.tService.getTurnosByUserId(val.id).subscribe(data => {
				this.turnos = data;
				loading.dismiss();
			}, error => {
				loading.dismiss();
			})
		}, error => {
			loading.dismiss();
		});
	}

	async verDetalle(t) {
		let detalle = "<b>Dirección: </b>" + t.tur_dir + "<br>";
		if (t.tur_detalle != "") {
			detalle = detalle + "<br><b>Detalle: </b>" + t.tur_detalle;
    }
    
    detalle = detalle + "<br><b>Horario: </b>"  + new Date(t.tur_hora).toLocaleTimeString();

		const alert = await this.alertController.create({
			header: 'Detalle',
			subHeader: 'Turno N°: ' + t.res_id,
			message: detalle,
			buttons: [
				{
					text: 'Salir',
					role: 'cancel',
					cssClass: 'secondary'
				}, {
					text: 'Cancelar Reserva',
					cssClass: 'primary',
					handler: () => {
						this.cancelarTurno(t.tur_id, "CANCELADO");
					}
				}
			]
		});

		await alert.present();
	}

	async cancelarTurno(id, estado) {
		let loading = await this.loadingController.create({
			message: "Espere...",
			spinner: "crescent"
		});

		await loading.present();
		await this.tService.cancelarTurno(id, estado).subscribe(data => {
			this.getTurnos();
			loading.dismiss();
		}, error => {
			loading.dismiss();
		})
	}

}
