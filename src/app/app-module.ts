import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { ApuestasComponent } from './components/apuestas-component/apuestas-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceApuestas } from './services/apuestas.service';
import { DeleteComponent } from './components/delete-component/delete-component';
import { CreateComponent } from './components/create-component/create-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    ApuestasComponent,
    DeleteComponent,
    CreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceApuestas],
  bootstrap: [App],
})
export class AppModule {}
