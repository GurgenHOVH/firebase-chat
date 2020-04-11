import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiNmwRT7je0qmyh94dxE5saAuSsNk1mhg",
  authDomain: "fir-chat-39eda.firebaseapp.com",
  databaseURL: "https://fir-chat-39eda.firebaseio.com",
  projectId: "fir-chat-39eda",
  storageBucket: "fir-chat-39eda.appspot.com",
  messagingSenderId: "1054644552725",
  appId: "1:1054644552725:web:7337745003a2a8f7dfba1c"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
