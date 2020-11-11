import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  perfil: FormGroup;

	constructor(private storage: Storage, private formBuilder: FormBuilder,
		public loadingController: LoadingController,
    public toastController: ToastController,
    private navCtrl: NavController) {
		this.perfil = this.formBuilder.group({
			nombre: ['', Validators.required],
			email: '',
			telefono: ['', Validators.required],
			direccion: ['', Validators.required]
		});
	}

	ngOnInit() {
		this.storage.get('user').then((val) => {
			this.perfil.controls.nombre.setValue(val.nombre);
			this.perfil.controls.email.setValue(val.email);
			this.perfil.controls.telefono.setValue(val.telefono);
			this.perfil.controls.direccion.setValue(val.direccion);
		});
	}

	async cerrarSesion() {
		let loading = await this.loadingController.create({
			message: "Espere...",
			spinner: "crescent"
		});

		const toast = await this.toastController.create({
			color: 'primary',
			message: 'Se finalizó la sesión!',
			duration: 2000
		});

		await loading.present();
		this.storage.clear();

		loading.dismiss();

		this.navCtrl.navigateRoot('');
	}

	async updateUserData() {
		let loading = await this.loadingController.create({
			message: "Espere...",
			spinner: "crescent"
		});

		const toast = await this.toastController.create({
			color: 'primary',
			message: 'Se actualizó el perfil!',
			duration: 2000
		});

		await loading.present();
		this.storage.get('user').then((val) => {
			val.nombre = this.perfil.controls.nombre;
			val.email = this.perfil.controls.email;
			val.telefono = this.perfil.controls.telefono;
			val.direccion = this.perfil.controls.direccion;

			this.storage.set('user', val);
			toast.present();
			loading.dismiss();
		});
	}

}
