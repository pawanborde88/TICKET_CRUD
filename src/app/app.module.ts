import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudticketComponent } from './crudticket/crudticket.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AppComponent,
    CrudticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CalendarModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    ToastModule,
    ConfirmPopupModule,
    PaginatorModule,
    TableModule,
    ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
