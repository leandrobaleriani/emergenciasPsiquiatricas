import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnoPageRoutingModule } from './turno-routing.module';

import { TurnoPage } from './turno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TurnoPage]
})
export class TurnoPageModule {}
