import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { VagalumesComponent } from './pages/faccoes/vagalumes/vagalumes.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ConfirmYourChooseComponent } from './pages/faccoes/confirm-your-choose/confirm-your-choose.component';
import { WlfComponent } from './pages/faccoes/wlf/wlf.component';
import { SerafitasComponent } from './pages/faccoes/serafitas/serafitas.component';
import { StartComponent } from './pages/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    VagalumesComponent,
    FeedComponent,
    ConfirmYourChooseComponent,
    WlfComponent,
    SerafitasComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
