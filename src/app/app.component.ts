import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

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
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.firebase.getToken().then(token => console.log(`The token is ${token}`));
      
      this.firebase.onMessageReceived().subscribe(data => 
        {
          this.showNotificacion(data);
      });

    });
  }

  async showNotificacion(data) {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Solicitud de Turno!',
    subHeader: 'Su turno se encuentra aceptado',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

    await alert.present();
  }
}
