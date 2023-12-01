import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesertaPageRoutingModule } from './peserta-routing.module';

import { PesertaPage } from './peserta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesertaPageRoutingModule
  ],
  declarations: [PesertaPage]
})
export class PesertaPageModule {}
