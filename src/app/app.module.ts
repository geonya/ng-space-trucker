import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { WindowRefService } from './services/window-ref.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, EngineComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [WindowRefService],
  bootstrap: [AppComponent],
})
export class AppModule {}
