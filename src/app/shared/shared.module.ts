import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [
    HeaderComponent,
    UserInformationComponent,
    LoadingComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    UserInformationComponent,
    LoadingComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
