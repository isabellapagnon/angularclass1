import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualquerCoisaComponent } from './qualquer-coisa/qualquer-coisa.component'


const routes: Routes = [

  { path: '', component: QualquerCoisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
