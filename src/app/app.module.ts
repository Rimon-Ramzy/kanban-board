import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {},
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(socketIoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
