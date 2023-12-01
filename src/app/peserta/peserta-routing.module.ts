import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesertaPage } from './peserta.page';

const routes: Routes = [
  {
    path: '',
    component: PesertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesertaPageRoutingModule {}
