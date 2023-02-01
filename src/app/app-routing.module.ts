import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmYourChooseComponent } from './pages/faccoes/confirm-your-choose/confirm-your-choose.component';
import { SerafitasComponent } from './pages/faccoes/serafitas/serafitas.component';
import { VagalumesComponent } from './pages/faccoes/vagalumes/vagalumes.component';
import { WlfComponent } from './pages/faccoes/wlf/wlf.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [

  {path: '', component: StartComponent},
  {path:'home', component: HomeComponent},
  {path: 'vagalumes', component: VagalumesComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'confirm-your-choose', component: ConfirmYourChooseComponent},
  {path: 'wlf', component: WlfComponent},
  {path: 'serafitas', component: SerafitasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
