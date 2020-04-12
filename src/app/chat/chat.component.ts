import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseFirestore } from '@angular/fire';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string = '';
  constructor(private fbService: FirebaseServiceService,
    private firestore: AngularFirestore) { }

  chatMessages: {}[] = [];

  ngOnInit() {
    this.firestore.collection('chat_message').valueChanges().subscribe((data) => {
      console.log(data);

      this.chatMessages = data;
    });
  }


  logout() {
    this.fbService.logout();
  }

  async send() {
    await this.firestore.collection('chat_message').add({
      date: new Date(),
      from: this.fbService.user.email,
      text: this.message
    });

    this.message = '';
  }
}
