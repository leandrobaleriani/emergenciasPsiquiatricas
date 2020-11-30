import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { DispositivoService } from './services/dispositivo.service';
import { Dispositivo } from './model/Dispositivo';
import { Device } from '@ionic-native/device/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebase: FirebaseX,
    public alertController: AlertController,
    public dService: DispositivoService,
    private device: Device,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.firebase.getToken().then(token => {

        this.storage.get('user').then((val) => {
          if (val) {
            let dispositivo = new Dispositivo();
            dispositivo.dis_device_id = val.id;
            dispositivo.dis_firebase_token = token;
  
            this.dService.saveDispositivo(dispositivo).subscribe(data => {}); 
          }
        });
      });
      
      this.firebase.onMessageReceived().subscribe(data => 
        {
          if(!data.tap) {
            this.showNotificacion(data);
          }
      });

    });
  }

  async showNotificacion(data) {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: data.title,
    subHeader: '',
    message: data.body,
    buttons: ['OK']
  });

    await alert.present();
  }
}
