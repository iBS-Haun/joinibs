import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AusbildungComponent } from './ausbildung/ausbildung.component';



import { KontaktComponent } from './kontakt/kontakt.component';

import { StudiumComponent } from './studium/studium.component';
import { KevinsComponentComponent } from './kevins-component/kevins-component.component';


const routes: Routes = [
{ component: KevinsComponentComponent,
path:''},
{ component: AusbildungComponent,
path: 'ausbildung'},
{ component: StudiumComponent,
path: 'studium'},
{ component: KontaktComponent,
path: 'kontakt'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
