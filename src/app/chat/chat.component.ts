import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe', { static: false })
  private myScrollContainer: ElementRef;


  message: string = '';
  myEmail: string;


  constructor(private fbService: FirebaseServiceService,
    private firestore: AngularFirestore) {
    this.fbService.userSubject.subscribe((user) => {
      this.myEmail = user.email;
    });


  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  chatMessages: {}[] = [];

  ngOnInit() {
    this.firestore.collection('chat_message', ref => ref.orderBy('date'))
      .valueChanges()
      .subscribe((data) => {
        console.log(data);
        this.chatMessages = data;
      });
    this.scrollToBottom();
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
