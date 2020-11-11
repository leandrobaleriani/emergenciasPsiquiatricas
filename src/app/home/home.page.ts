import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

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
		private uniqueDeviceID: UniqueDeviceID
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

		await loading.present();

		this.uniqueDeviceID.get()
  			.then((uuid: any) => {
				let user = { usuario: '', pass: '', id: '', nombre: '' };
				user.usuario = this.login.controls.usuario.value;
				user.pass = this.login.controls.pass.value;
				user.nombre = '';
				user.id = uuid;
				this.storage.set("user", user);
		
				toast.present();
				loading.dismiss();
				this.navCtrl.navigateRoot('/tabs/tabs');
			  })
  			.catch((error: any) => console.log(error));
	}

}
