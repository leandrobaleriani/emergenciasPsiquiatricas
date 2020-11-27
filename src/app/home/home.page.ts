import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TurnosService } from '../services/turnos.service';
import { Usuario } from '../model/Usuario';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
		private formBuilder: FormBuilder,
		private navCtrl: NavController,
		private storage: Storage,
		public loadingController: LoadingController,
		public toastController: ToastController,
		private platform: Platform,
		public alertController: AlertController,
		private device: Device,
		private tService: TurnosService
	) {

		this.login = this.formBuilder.group({
			usuario: '',
			pass: ''
		});
	}

  ngOnInit() {
  }

  login: FormGroup;
	user: any = {};
	showUser: boolean = false;

	ionViewWillEnter() {
		this.storage.get('user').then((val) => {
			if (val) {
				this.navCtrl.navigateRoot("/tabs")
			}
		});

		this.storage.set('fecha', new Date().toISOString());
	}

	async validateLogin() {
		let loading = await this.loadingController.create({
			message: "Espere...",
			spinner: "crescent"
		});

		const toast = await this.toastController.create({
			color: 'primary',
			message: 'Se inicio sesión correctamente!',
			duration: 2000
		});

		const toastError = await this.toastController.create({
			color: 'danger',
			message: 'Usuario y/o Contraseña invalido!',
			duration: 2000
		});

		await loading.present();

		let usuario = new Usuario();
				usuario.usu_nombre = this.login.controls.usuario.value;
				usuario.usu_pass = this.login.controls.pass.value;

				this.tService.acceso(usuario).subscribe(data => {
					if(data == "1") {
						let user = { usuario: '', pass: '', id: '', nombre: '' };
						user.usuario = this.login.controls.usuario.value;
						user.pass = this.login.controls.pass.value;
						user.nombre = '';
						user.id = this.device.uuid;
						this.storage.set("user", user);
						toast.present();
						loading.dismiss();
						this.navCtrl.navigateRoot('/tabs/tabs');	
					}else {
						toastError.present();
						loading.dismiss();
					}
				}, error => {
					this.showNotificacion(JSON.stringify(error));
					this.showNotificacion(error.message);
					loading.dismiss();
				});
	}

	async showNotificacion(data) {
		const alert = await this.alertController.create({
		cssClass: 'my-custom-class',
		header: "",
		subHeader: '',
		message: data,
		buttons: ['OK']
	  });
	
		await alert.present();
	  }

}
